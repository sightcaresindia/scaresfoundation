'use client'
import React, { Fragment } from 'react';
import NavbarS3 from '@/components/NavbarS3/NavbarS3'
import PageTitle from '@/components/pagetitle/PageTitle'
import MedicalGuide from '@/components/MedicalGuide/MedicalGuide';
import CtaSection from '@/components/CtaSection/CtaSection';
import Footer from '@/components/footer/Footer';
import Scrollbar from '@/components/scrollbar/scrollbar';
import MedicalSteps from '@/components/MedicalSteps/MedicalSteps';
import Logo from '/public/images/sight_care_logo.png'


const MedicalPage = () => {
    return (
       <Fragment>
            <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Medical & Surgery Process Guide'} pagesub={'Medical & Surgery Process Guide'} />
            <MedicalGuide hclass={'about-section-s4 section-padding'} />
            <MedicalSteps hclass={'about-section section-padding'}/>
            <CtaSection hclass={'cta-section'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default MedicalPage;
