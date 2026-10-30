'use client';

import React, { useState } from 'react';
import styles from './CampaignDetails.module.scss';

const money = value => Number(value).toLocaleString('en-IN');

export default function CampaignDonationForm({ project }) {
    let slots = [];
    try { slots = Array.isArray(project.preferred_slot) ? project.preferred_slot : JSON.parse(project.preferred_slot || '[]'); } catch {}
    const minimum = Math.max(1, Number(project.minimum_amount) || 1);
    const amounts = Array.isArray(slots) ? slots.map(Number).filter(value => Number.isFinite(value) && value >= minimum) : [];
    const initialAmount = Math.max(minimum, Number(project.default_amount) || amounts[0] || minimum);
    const [amount, setAmount] = useState(String(initialAmount));
    const [custom, setCustom] = useState(!amounts.includes(initialAmount));
    const [taxReceipt, setTaxReceipt] = useState(false);
    const [busy, setBusy] = useState(false);
    const [message, setMessage] = useState('');
    const validAmount = Number(amount) >= minimum && Number(amount) <= 10000000;

    async function submit(event) {
        event.preventDefault();
        if (!validAmount || busy) return;
        const form = new FormData(event.currentTarget);
        setBusy(true); setMessage('');
        const baseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL || '').trim().replace(/\/$/, '');
        async function post(endpoint, body) {
            const response = await fetch(baseUrl + endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(body) });
            const result = await response.json();
            if (!response.ok) throw new Error(Object.values(result.errors || {}).flat()[0] || result.message || result.error || 'Unable to complete your donation. Please try again.');
            return result;
        }
        try {
            if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID) throw new Error('Payment checkout is unavailable. Please try again later.');
            if (!window.Razorpay) await new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = 'https://checkout.razorpay.com/v1/checkout.js';
                script.onload = resolve; script.onerror = () => { script.remove(); reject(new Error('Unable to load payment checkout. Please try again.')); };
                document.body.appendChild(script);
            });
            const query = new URLSearchParams(window.location.search);
            const tracking = Object.fromEntries(['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_id', 'utm_term'].map(key => [key, query.get(key) || '']));
            const result = await post('/save-project-data', {
                full_name: form.get('full_name'), emailid: form.get('email'), phone: form.get('phone'),
                donation_amount: Number(amount), campaign_id: project.id,
                contributor_name_display: form.get('anonymous') ? 'anonymous' : 'full_name',
                form_80G: taxReceipt ? '1' : '0',
                pan: form.get('pan') || '', address: form.get('address') || '',
                sourceUrl: window.location.origin + window.location.pathname, ...tracking,
            });
            const order = result.data;
            if (!order?.order_id || !order?.saveData_id || !order?.uuid) throw new Error('Unable to create payment order. Please try again.');
            const checkout = new window.Razorpay({
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: order.amount, currency: order.currency, order_id: order.order_id,
                name: 'Sight Cares India Foundation', description: project.project_name,
                prefill: { name: form.get('full_name'), email: form.get('email'), contact: form.get('phone') },
                modal: { ondismiss: () => { setBusy(false); setMessage('Payment was not completed. You can try again.'); } },
                handler: async payment => {
                    try {
                        await post('/update-donation-status', { order_id: payment.razorpay_order_id, payment_id: payment.razorpay_payment_id, signature: payment.razorpay_signature, saveData_id: order.saveData_id });
                        window.location.assign('/thank-you?donation-id=' + encodeURIComponent(order.uuid));
                    } catch (error) { setMessage(error.message); setBusy(false); }
                },
                theme: { color: '#155b92' },
            });
            checkout.on('payment.failed', () => { setMessage('Payment failed. Please try again.'); setBusy(false); });
            checkout.open();
        } catch (error) { setMessage(error.message); setBusy(false); }
    }

    return (
        <aside className={styles.donationCard} id="donation" aria-labelledby="donation-title">
            <div className={styles.donationTitle}>
                <h2 id="donation-title">{project.donation_form_heading || project.heading || project.project_name}</h2>
            </div>
            <form onSubmit={submit}>
                <fieldset disabled={busy} style={{ border: 0, padding: 0, margin: 0, minWidth: 0 }}>
                <div className={styles.amounts} role="group" aria-label="Donation amount">
                    {amounts.map(value => <button key={value} type="button" aria-pressed={!custom && amount === String(value)} className={!custom && amount === String(value) ? styles.selected : ''} onClick={() => { setAmount(String(value)); setCustom(false); setMessage(''); }}>₹{value}</button>)}
                    <button type="button" aria-pressed={custom} className={custom ? styles.selected : ''} onClick={() => { setCustom(true); setAmount(''); setMessage(''); }}>Custom</button>
                </div>
                {custom && <label className={styles.customAmount}>Donation amount (₹)<input autoFocus aria-label="Custom donation amount in rupees" type="number" min={minimum} max="10000000" step="1" required value={amount} onChange={event => setAmount(event.target.value)} placeholder="Enter amount" /></label>}
                <div className={styles.personalFields}>
                    <input aria-label="Full name" name="full_name" autoComplete="name" placeholder="Full Name" required maxLength={100} />
                    <label className={styles.check}><input type="checkbox" name="anonymous" /> Contribute anonymously</label>
                    <input aria-label="Email address" name="email" type="email" autoComplete="email" placeholder="Email Address" required />
                    <input aria-label="Mobile number" name="phone" type="tel" autoComplete="tel" inputMode="tel" pattern="[+]?[0-9 ()-]{10,16}" title="Enter a valid mobile number, including the country code if needed" placeholder="Mobile Number" required />
                    {project.tax_benefit && <label className={styles.check}><input type="checkbox" name="form_80G" checked={taxReceipt} onChange={event => setTaxReceipt(event.target.checked)} aria-controls="tax-details" aria-expanded={taxReceipt} /> I want 80G Tax Benefit Certificate</label>}
                    {taxReceipt && <div id="tax-details" className={styles.taxFields}>
                        <input aria-label="PAN number" name="pan" placeholder="PAN Number" required pattern="[A-Za-z]{5}[0-9]{4}[A-Za-z]" title="Enter a valid 10-character PAN number" maxLength={10} style={{ textTransform: 'uppercase' }} />
                        <input aria-label="Address with Pincode" name="address" autoComplete="street-address" placeholder="Address with Pincode" maxLength={2000} required />
                    </div>}
                </div>
                <button className={styles.donateButton} type="submit" disabled={busy || !validAmount}>{busy ? 'Please wait…' : 'Donate ' + (validAmount ? '₹' + money(amount) : '') + ' Now'}</button>
                </fieldset>
                {message && <p role="alert">{message}</p>}
            </form>
            <div className={styles.trustMarks}><span><b className={styles.green}>◈</b>SECURE</span>{project.tax_benefit && <span><b className={styles.blue}>%</b>TAX BENEFIT</span>}{project.is_verified && <span><b className={styles.gold}>●</b>VERIFIED</span>}</div>

        </aside>
    );
}
