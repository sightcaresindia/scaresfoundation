'use client'
import React from 'react';
import NavbarS3 from '@/components/NavbarS3/NavbarS3'
import PageTitle from '@/components/pagetitle/PageTitle'
import RefundPolicyContent from './RefundPolicyContent';
import CtaSection from '@/components/CtaSection/CtaSection';
import Footer from '@/components/footer/Footer';
import Scrollbar from '@/components/scrollbar/scrollbar';

import Logo from '/public/images/sight_care_logo.png'

const RefundPolicy = () => {
    return(
        <>
            <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle="" pagesub="" />
            <RefundPolicyContent hclass={'mt-5 pt-3'} />
            <CtaSection hclass={'cta-section'} />
            <Footer />
            <Scrollbar />
        </>
    )
}

export default RefundPolicy;