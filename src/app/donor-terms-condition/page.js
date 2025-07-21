'use client'
import React, { Fragment } from 'react';
import NavbarS3 from '@/components/NavbarS3/NavbarS3'
import PageTitle from '../../components/pagetitle/PageTitle'
import DonorTermsCondition from '../../components/DonationTermsCondition/donation-terms-condtions';
import CtaSection from '../../components/CtaSection/CtaSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

import Logo from '/public/images/sight_care_logo.png'


const DonationTermsCondition = () => {
    return (
        <Fragment>
            <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
            {/* <PageTitle pageTitle={'About Us'} pagesub={'About'} /> */}
            <DonorTermsCondition hclass={'about-section-s4 pt-4'} />
            <CtaSection hclass={'cta-section'} />
            <Footer />
            <Scrollbar />

        </Fragment>
    )
};
export default DonationTermsCondition;
