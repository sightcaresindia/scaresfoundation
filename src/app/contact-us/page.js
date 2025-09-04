'use client'
import React, { Fragment } from 'react';
import NavbarS3 from '@/components/NavbarS3/NavbarS3'
import PageTitle from '@/components/pagetitle/PageTitle'
import Contactpage from '@/components/Contactpage/Contactpage';
import MissionVision from '@/components/MissionVision/MissionVision';
import Story from '@/components/Story/Story';
import Leadership from '@/components/Leadership/Leadership';
import CtaSection from '@/components/CtaSection/CtaSection';
import Footer from '@/components/footer/Footer';
import Scrollbar from '@/components/scrollbar/scrollbar';

import Logo from '/public/images/sight_care_logo.png'


const ContactUsPage = () => {
    return (
        <Fragment>
            <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'} />
            <Contactpage hclass={'section-padding'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ContactUsPage;
