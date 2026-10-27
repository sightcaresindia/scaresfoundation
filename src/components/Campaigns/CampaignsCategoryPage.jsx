'use client';

import React from 'react';
import Link from 'next/link';
import NavbarS3 from '@/components/NavbarS3/NavbarS3';
import PageBanner from '@/components/PageBanner/PageBanner';
import ProjectList from '@/components/ProjectList/ProjectList';
import Footer from '@/components/footer/Footer';
import Scrollbar from '@/components/scrollbar/scrollbar';
import Logo from '/public/images/sight_care_logo.png';
import styles from './CampaignsCategoryPage.module.scss';

export default function CampaignsCategoryPage() {
    return (
        <>
            <NavbarS3 hclass="wpo-site-header" Logo={Logo} />
            <main className={styles.page}>
                <PageBanner title="Our Campaigns" />

                <section className={styles.campaigns} id="active-campaigns" aria-labelledby="active-campaigns-title">
                    <div className="container">
                        <div className={styles.introduction}>
                            <div>
                                <p className={styles.eyebrow}>Together, we make sight possible</p>
                                <h2 id="active-campaigns-title">Small acts of kindness.<br /><span>Life-changing possibilities.</span></h2>
                            </div>
                            <p>Vision is a right. From timely surgery to essential assistive devices, explore the people and projects that need your support. Find a cause that speaks to you and take the next step.</p>
                        </div>
                    </div>
                    <ProjectList limit={12} paginated showTitle={false} appearance="campaigns" />
                </section>

                <section className={styles.support} aria-labelledby="support-title">
                    <div className="container">
                        <div className={styles.supportPanel}>
                            <div className={styles.supportContent}>
                                <p className={styles.eyebrow}>There’s more than one way to help</p>
                                <h2 id="support-title">Your time can make<br />a difference, too.</h2>
                                <p>Join our community of volunteers and help bring compassionate eye care closer to those who need it.</p>
                                <Link href="/get-involved/volunteer-opportunities" className={styles.primaryLink}>Become a volunteer <span aria-hidden="true">↗</span></Link>
                            </div>
                            <div className={styles.supportPhoto} role="img" aria-label="Sight Cares volunteers supporting a community eye camp" />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <Scrollbar />
        </>
    );
}
