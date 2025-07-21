'use client'
import React, { Fragment } from 'react';
import NavbarS3 from '@/components/NavbarS3/NavbarS3'
import PageTitle from '@/components/pagetitle/PageTitle'
import TermsCondition from '@/components/TermsCondition/termscondtion';
import CtaSection from '@/components/CtaSection/CtaSection';
import Footer from '@/components/footer/Footer';
import Scrollbar from '@/components/scrollbar/scrollbar';

import Logo from '/public/images/sight_care_logo.png'


const TermConditionPage = () => {
    return (
        <Fragment>
            <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
            {/* <PageTitle pageTitle={'About Us'} pagesub={'About'} /> */}
            <TermsCondition hclass={'about-section-s4 pt-4'} />
            <CtaSection hclass={'cta-section'} />
            <Footer />
            <Scrollbar />

        </Fragment>
    )
};
export default TermConditionPage;
