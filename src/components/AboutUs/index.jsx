'use client'
import React, { Fragment } from 'react';
import NavbarS3 from '@/components/NavbarS3/NavbarS3'
import PageBanner from '@/components/PageBanner/PageBanner';
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
            <PageBanner title="About Us" />
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
