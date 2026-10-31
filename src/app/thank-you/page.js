'use client'
import React, { Fragment, Suspense } from 'react';
import NavbarS3 from '@/components/NavbarS3/NavbarS3'
import PageBanner from '@/components/PageBanner/PageBanner';
import ThankYou from '@/components/ThankYou/ThankYou';
import CtaSection from '@/components/CtaSection/CtaSection';
import Footer from '@/components/footer/Footer';
import Scrollbar from '@/components/scrollbar/scrollbar';

import Logo from '/public/images/sight_care_logo.png'


const AboutPage = () => {
    return (
        <Fragment>
            <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
            <PageBanner title={'Thank You'} />
            <Suspense fallback={null}><ThankYou hclass={'section-padding'} /></Suspense>
            <CtaSection hclass={'cta-section'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;
