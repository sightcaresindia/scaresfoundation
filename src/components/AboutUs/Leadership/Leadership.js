import React from 'react';
import styles from './Leadership.module.scss';

const Leadership = () => {

    return (
        <section className={`${styles.section} section-padding`} aria-label="Our leadership and reach">
            <div className="container">
                <div className={styles.layout}>
                    <article className={styles.leadership} aria-labelledby="leadership-heading">
                        <span className={styles.eyebrow}>People behind the purpose</span>
                        <h2 id="leadership-heading">Leadership &amp; Team</h2>
                        <p>Under Ms Tannu Singh's leadership, Sight Cares India Foundation is committed to making medical and disability-related support more accessible to people facing financial hardship.</p>
                        <p>Through its crowdfunding initiative, the Foundation aims to highlight genuine needs for compassionate donors, encourage collective support, and promote responsible fundraising practices. Its work is guided by empathy, dignity, transparency and a commitment to help patients and their families navigate difficult circumstances with greater hope.</p>
                    </article>

                    <article className={styles.reach} aria-labelledby="reach-heading">
                        <div className={styles.locationIcon} aria-hidden="true">
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                                <path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" stroke="currentColor" strokeWidth="1.5" />
                                <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        </div>
                        <h2 id="reach-heading">Where We Work</h2>
                        <p>Sight Cares India Foundation operates across India, focusing on rural villages and urban slums where access to medical facilities is limited or nonexistent.</p>
                    </article>
                </div>
            </div>
        </section>
    )

}

export default Leadership;
