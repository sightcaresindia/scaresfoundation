'use client'
import React, { Fragment } from 'react';
import NavbarS3 from '@/components/NavbarS3/NavbarS3'
import Link from 'next/link';
import styles from './AboutBanner.module.scss';
import SightCare from '@/components/AboutUs/SightCare/SightCare';
import MissionVision from '@/components/AboutUs/MissionVision/MissionVision';
import Story from '@/components/AboutUs/Story/Story';
import Leadership from '@/components/AboutUs/Leadership/Leadership';
import Support from '@/components/AboutUs/Support/Support';
import CtaSection from '@/components/CtaSection/CtaSection';
import Footer from '@/components/footer/Footer';
import Scrollbar from '@/components/scrollbar/scrollbar';

import Logo from '/public/images/sight_care_logo.png'


const AboutPage = () => {
    return (
        <Fragment>
            <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
            <section className={styles.hero} aria-labelledby="about-title">
                <div className="container">
                    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                        <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">About Us</span>
                    </nav>
                    <div className={styles.heroContent}>
                        <p className={styles.eyebrow}>About Sight Cares India Foundation</p>
                        <h1 id="about-title">Compassion that connects.<br />Care that brings <em>hope.</em></h1>
                        <p>We connect people in need with people who care, supporting medical treatment, disability care and a brighter future through responsible crowdfunding.</p>
                        <Link href="/our-campaigns" className={styles.primaryLink}>Explore our campaigns <span aria-hidden="true">↗</span></Link>
                    </div>
                    <div className={styles.photoCaption}><span aria-hidden="true">✦</span> People at the heart of everything we do.</div>
                </div>
            </section>
            <SightCare hclass={'section-padding'} />
            <MissionVision hclass={'section-padding'} />
            <Story hclass={'section-padding'} />
            <Leadership />
            <Support />
            <CtaSection hclass={'cta-section'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;
