'use client'
import React, { Fragment } from 'react';
import NavbarS3 from '@/components/NavbarS3/NavbarS3'
import PageTitle from '@/components/pagetitle/PageTitle'
import GovernmentScheme from '@/components/GovernmentScheme/GovernmentScheme';
import HealthProgram from '@/components/HealthProgram/HealthProgram';
import AccessScheme from '@/components/AccessScheme/AccessScheme';
import CharitySection from '@/components/CharitySection/CharitySection';
import CtaSection from '@/components/CtaSection/CtaSection';
import Footer from '@/components/footer/Footer';
import Scrollbar from '@/components/scrollbar/scrollbar';
import Logo from '/public/images/sight_care_logo.png'


const Page = () => {
    return (
        <Fragment>
            <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Government Schemes & Support'} pagesub={'About'} />
            <GovernmentScheme hclass={'about-section-s4 section-padding'} />
            <HealthProgram hclass={'about-section-s4 section-padding'} />
            <AccessScheme hclass={'about-section-s4 section-padding'} />
            <CharitySection hclass={'about-section-s4 section-padding'} />
            <CtaSection hclass={'cta-section'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default Page;
