'use client';

import React, { useEffect, useState } from 'react';
import { trackDonationSuccess } from '@/lib/donationTracking';

import shapeArrow from '/public/images/process-arrow-shape.svg'
import shape1 from '/public/images/process/shape1.svg'
import shape2 from '/public/images/process/shape2.svg'
import shape3 from '/public/images/process/shape3.svg'
import shape4 from '/public/images/process/shape4.svg'
import Link from 'next/link';
import Image from 'next/image';

import { useSearchParams } from 'next/navigation';
import styles from './ThankYou.module.scss';

// Same labels and order as the PDF receipt; the amount sits in the card header and
// optional fields are left out when empty.
const donationRows = donation => [
    ['Receipt', donation.receipt_no],
    ['Date', donation.date],
    ['Campaign', donation.campaign],
    ['Donor name', donation.full_name],
    ['Email', donation.email],
    ['Mobile', donation.phone],
    ['PAN', donation.pan],
    ['Address with Pincode', donation.address],
    ['Transaction ID', donation.payment_id],
    ['Payment order', donation.order_id],
    ['80G receipt requested', donation.form_80G ? 'Yes' : 'No'],
].filter(([, value]) => value);

const ThankYou = () => {
    const searchParams = useSearchParams();
    const donationID = searchParams.get('donation-id');
    const [donation, setDonation] = useState(null);
    const [detailsFailed, setDetailsFailed] = useState(false);

    useEffect(() => {
        trackDonationSuccess(donationID);
    }, [donationID]);

    useEffect(() => {
        if (!donationID) return;
        const controller = new AbortController();
        const baseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL || '').trim().replace(/\/$/, '');
        setDonation(null);
        setDetailsFailed(false);
        fetch(`${baseUrl}/donation-details/${encodeURIComponent(donationID)}`, {
            headers: { Accept: 'application/json' },
            cache: 'no-store',
            signal: controller.signal,
        })
            .then(response => {
                if (!response.ok) throw new Error('Unable to load donation details.');
                return response.json();
            })
            .then(({ data }) => setDonation(data))
            .catch(error => {
                if (error.name !== 'AbortError') setDetailsFailed(true);
            });
        return () => controller.abort();
    }, [donationID]);

    return (
        <section className="process-section">
            <div className="container">
                <div className="section-title text-center">
                    <h2>Thank you for your kind contribution</h2>
                </div>
                <div className="wrape">
                    <div className='row justify-content-center'>
                        <div className="col-12 col-lg-9 text-center">
                            <h4 style={{ fontSize: '18px', fontWeight: '500', lineHeight: '1.4' }}>Your generous contribution can bring hope, relief and access to essential medical care to someone in need. Every donation, big or small, helps make critical treatments, surgeries and other medical support possible for individuals and families who cannot afford them.Together, we can help ease their burden and give them a chance to move forward with dignity and hope.</h4>
                            <h4 className="mb-3" style={{ fontStyle: 'italic', color: '#FBAD17', fontWeight: '700' }}>Thank you for making a difference.</h4>
                            <p className='mt-4 fw-bold'>A confirmation email has been sent to your inbox. Stay connected with us to see how your support is changing lives. For any queries, please reach out to us at <a href="mailto:info@sightcares.org">info@sightcares.org</a></p>
                            {donation && (
                                <div className={styles.card}>
                                    <div className={styles.header}>
                                        <h3 className={styles.title}>Donation Details</h3>
                                        <div className={styles.amount}>
                                            <span>Donation received</span>
                                            <strong>₹{donation.donation_amount}</strong>
                                        </div>
                                    </div>
                                    <table className={styles.table}>
                                        <tbody>
                                            {donationRows(donation).map(([label, value]) => (
                                                <tr key={label}>
                                                    <th scope="row">{label}</th>
                                                    <td>{value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                            {detailsFailed && <p className="mt-5" role="alert">We couldn&apos;t load your donation details right now. Please refresh this page.</p>}
                            {donation?.form_80G && (
                                <p className="pt-5 text-center">
                                    <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/donation-receipt/${donationID}`} className="donation_button" download="">Download Receipt </Link>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <Image src={shape1} alt="" />
            </div>
            <div className="shape-2">
                <Image src={shape2} alt="" />
            </div>
            <div className="shape-3">
                <Image src={shape3} alt="" />
            </div>
            <div className="shape-4">
                <Image src={shape4} alt="" />
            </div>
        </section>
    );
};

export default ThankYou;
