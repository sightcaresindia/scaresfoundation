const pendingKey = id => 'sightcares:pending-conversion:' + id;
const inFlight = new Map();

export function donationThankYouUrl(verification) {
    const id = verification?.uuid;
    const url = '/thank-you?donation-id=' + encodeURIComponent(id);
    if (!id || verification.payment_status !== 1 || !verification.tracking_token) return url;
    try {
        window.sessionStorage.setItem(pendingKey(id), verification.tracking_token);
        return url;
    } catch {
        // A fragment survives navigation when browser storage is unavailable and
        // is never sent to the web server or included in a Referer header.
        return url + '#tracking-token=' + encodeURIComponent(verification.tracking_token);
    }
}

export function trackDonationSuccess(id) {
    if (!id) return Promise.resolve();
    // Share the request across React Strict Mode effects and component remounts.
    if (inFlight.has(id)) return inFlight.get(id);
    const promise = claimAndPush(id).finally(() => inFlight.delete(id));
    inFlight.set(id, promise);
    return promise;
}

async function claimAndPush(id) {
    try {
        const fragment = new URLSearchParams(window.location.hash.slice(1));
        let token = fragment.get('tracking-token');
        if (token) window.history.replaceState(null, '', window.location.pathname + window.location.search);
        if (!token) {
            try { token = window.sessionStorage.getItem(pendingKey(id)); } catch {}
        }
        // A page visit or a donation UUID alone is never enough to fire an event.
        if (!token) return;
        const baseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL || '').trim().replace(/\/$/, '');
        const response = await fetch(baseUrl + '/donation-conversion', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            cache: 'no-store',
            body: JSON.stringify({ donation_id: id, tracking_token: token }),
        });
        if (!response.ok) return;
        const { data } = await response.json();
        if (data !== null) {
            if (data?.event !== 'donation_success' || data.donation_id !== id ||
                typeof data.transaction_id !== 'string' || !data.transaction_id.startsWith('pay_') ||
                typeof data.donation_value !== 'number' || !Number.isFinite(data.donation_value) ||
                data.donation_value <= 0 || data.currency !== 'INR') return;
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'donation_success',
                donation_id: data.donation_id,
                transaction_id: data.transaction_id,
                donation_value: data.donation_value,
                currency: 'INR',
            });
        }
        try { window.sessionStorage.removeItem(pendingKey(id)); } catch {}
    } catch {
        // Tracking must never prevent the donor from viewing the receipt.
        // Keep the pending token on network failure so a refresh can retry.
    }
}
