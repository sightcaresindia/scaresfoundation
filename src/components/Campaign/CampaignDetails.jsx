'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import DonationForm from './DonationForm';
import styles from './CampaignDetails.module.scss';

const CampaignDetails = ({ hclass }) => {
    const [campaign, setCampaign] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [retry, setRetry] = useState(0);
    const { slug } = useParams();

    useEffect(() => {
        const controller = new AbortController();
        const fetchCampaign = async () => {
            setLoading(true);
            setError('');
            try {
                const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + '/project-details/' + slug, { signal: controller.signal });
                if (!res.ok) throw new Error('Unable to load campaign.');
                const data = await res.json();
                if (!data?.id) throw new Error('Campaign not found.');
                if (!controller.signal.aborted) setCampaign(data);
            } catch (err) {
                if (!controller.signal.aborted) setError('Unable to load this campaign. Please try again.');
            } finally {
                if (!controller.signal.aborted) setLoading(false);
            }
        };
        fetchCampaign();
        return () => controller.abort();
    }, [slug, retry]);

    const image = campaign?.banner_image
        ? (process.env.NEXT_PUBLIC_IMAGE_URL || '').trim().replace(/[/]$/, '') + '/' + campaign.banner_image
        : null;

    return (
        <section className={[hclass, styles.section].filter(Boolean).join(' ')} aria-label="Campaign details">
            <div className="container">
                {loading ? (
                    <p className={styles.status} role="status">Loading campaign...</p>
                ) : error ? (
                    <div className={styles.status} role="alert">
                        <p>{error}</p>
                        <button type="button" className="btn btn-primary" onClick={() => setRetry(value => value + 1)}>Try again</button>
                    </div>
                ) : campaign && (
                    <div className={styles.layout}>
                        <div className={styles.imagePanel}>
                            <div className={styles.storyHeader}>
                                <p className={styles.eyebrow}>A little kindness. A lasting difference.</p>
                                <h2>{campaign.project_name}</h2>
                            </div>
                            {image && <img src={image} alt={campaign.project_name} className={styles.campaignImage} />}
                        </div>
                        <aside className={styles.donationPanel} aria-labelledby="donation-panel-title">
                            <div className={styles.panelHeader}>
                                <p className={styles.eyebrow}>Make care possible</p>
                                <h2 id="donation-panel-title">Support this campaign</h2>
                                <p>Your contribution can help someone take the next step towards care.</p>
                            </div>
                            <div className={styles.formBody}>
                                <DonationForm key={campaign.id} preferred_slot={campaign.preferred_slot || ''} campaign_id={campaign.id} />
                            </div>
                        </aside>
                        <article className={styles.story}>
                            <div className={styles.storyContent}>
                                <h3>About this campaign</h3>
                                <div className={styles.description} dangerouslySetInnerHTML={{ __html: campaign.description || '' }} />
                            </div>
                        </article>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CampaignDetails;
