'use client'
import React, { Fragment } from 'react';
import NavbarS3 from '@/components/NavbarS3/NavbarS3'
import PageTitle from '@/components/pagetitle/PageTitle'
import MedicalGuidance from '@/components/MedicalGuidance/MedicalGuidance';
import CtaSection from '@/components/CtaSection/CtaSection';
import Footer from '@/components/footer/Footer';
import Scrollbar from '@/components/scrollbar/scrollbar';

import Logo from '/public/images/sight_care_logo.png'


const CorporatePage = () => {
    return (
       <Fragment>
            <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Medical Guidance'} pagesub={'Medical Guidance'} />
            <MedicalGuidance hclass={'about-section-s4 section-padding'} />
            <CtaSection hclass={'cta-section'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default CorporatePage;
