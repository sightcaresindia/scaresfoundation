'use client'
import React, { Fragment } from 'react';
import NavbarS3 from '@/components/NavbarS3/NavbarS3'
import PageTitle from '@/components/pagetitle/PageTitle'
import Volunteer from '@/components/Volunteer/Volunteer';
import CtaSection from '@/components/CtaSection/CtaSection';
import Footer from '@/components/footer/Footer';
import Scrollbar from '@/components/scrollbar/Scrollbar';

import Logo from '/public/images/sight_care_logo.png'


const VolunteerPage = () => {
    return (
       <Fragment>
            <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Volunteer Opportunities'} pagesub={'Volunteer Opportunities'} />
            <Volunteer hclass={'about-section-s4 section-padding'} />
            <CtaSection hclass={'cta-section'} />
            <Footer />
            <Scrollbar />

        </Fragment>
    )
};
export default VolunteerPage;
