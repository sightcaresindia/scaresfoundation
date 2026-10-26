import React from 'react';
import Link from 'next/link';
import styles from './Support.module.scss';

export default function Support() {
    return (
        <section className={`${styles.section} section-padding`} aria-labelledby="support-heading">
            <div className="container">
                <div className={styles.panel}>
                    <span className={styles.accent} aria-hidden="true" />
                    <h2 id="support-heading">Your Support Can Make a Difference</h2>
                    <p>A donation can help a family manage medical expenses, help a person access essential care, or bring necessary treatment within reach.</p>
                    <p>You do not have to donate a large amount to make a difference. Every contribution matters, and collective support can help people facing difficult circumstances find a way forward.</p>
                    <p className={styles.message}><strong>Together, we can help more people access the care and support they need, regardless of their financial circumstances.</strong></p>
                    <div className={styles.actions}>
                        <Link href="/our-campaigns" className={styles.campaigns}>Explore Campaigns <span aria-hidden="true">&#8594;</span></Link>
                        <Link href="/donate" className={styles.donate}>Donate Now</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
