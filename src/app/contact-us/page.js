'use client'
import React, { Fragment } from 'react';
import NavbarS3 from '@/components/NavbarS3/NavbarS3'
import PageBanner from '@/components/PageBanner/PageBanner';
import Contactpage from '@/components/Contactpage/Contactpage';
import Footer from '@/components/footer/Footer';
import Scrollbar from '@/components/scrollbar/scrollbar';

import Logo from '/public/images/sight_care_logo.png'


const ContactUsPage = () => {
    return (
        <Fragment>
            <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
            <PageBanner title={'Contact Us'} />
            <Contactpage hclass={'section-padding'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ContactUsPage;
