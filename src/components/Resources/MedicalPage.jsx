'use client'
import React, { Fragment } from 'react';
import NavbarS3 from '@/components/NavbarS3/NavbarS3'
import PageTitle from '@/components/pagetitle/PageTitle'
import MedicalGuide from '@/components/Resources/MedicalGuide/MedicalGuide';
import MedicalSteps from '@/components/Resources/MedicalSteps/MedicalSteps';
import NeedHelp from '@/components/Resources/NeedHelp/NeedHelp';
import CtaSection from '@/components/CtaSection/CtaSection';
import Footer from '@/components/footer/Footer';
import Scrollbar from '@/components/scrollbar/scrollbar';
import Logo from '/public/images/sight_care_logo.png'


const MedicalPage = () => {
    return (
       <Fragment>
            <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Medical & Surgery Process Guide'} pagesub={'Medical & Surgery Process Guide'} />
            <MedicalGuide hclass={'about-section-s4 section-padding'} />
            <MedicalSteps hclass={'about-section section-padding'}/>
            <NeedHelp hclass={'about-section section-padding'}/>
            <CtaSection hclass={'cta-section'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default MedicalPage;
