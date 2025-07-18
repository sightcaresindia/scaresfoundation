'use client'
import React, { Fragment } from 'react';
import NavbarS3 from '@/components/NavbarS3/NavbarS3'
import PageTitle from '@/components/pagetitle/PageTitle'
import SightCare from '@/components/SightCare/SightCare';
import MissionVision from '@/components/MissionVision/MissionVision';
import Story from '@/components/Story/Story';
import Leadership from '@/components/Leadership/Leadership';
import CtaSection from '@/components/CtaSection/CtaSection';
import Footer from '@/components/footer/Footer';
import Scrollbar from '@/components/scrollbar/scrollbar';

import Logo from '/public/images/sight_care_logo.png'


const AboutPage = () => {
    return (
        <Fragment>
            <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            <SightCare hclass={'section-padding'} />
            <MissionVision hclass={'section-padding'} />
            <Story hclass={'section-padding'} />
            <Leadership />
            <CtaSection hclass={'cta-section'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;
