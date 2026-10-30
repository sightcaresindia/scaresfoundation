'use client';

import React from 'react';
import NavbarS3 from '@/components/NavbarS3/NavbarS3';
import Footer from '@/components/footer/Footer';
import Scrollbar from '@/components/scrollbar/scrollbar';
import Logo from '/public/images/sight_care_logo.png';
import CampaignDetails from './CampaignDetails';

export default function Campaign({ project }) {
    return (
        <>
            <NavbarS3 hclass="wpo-site-header" Logo={Logo} />
            <CampaignDetails key={project.id} project={project} />
            <Footer />
            <Scrollbar />
        </>
    );
}
