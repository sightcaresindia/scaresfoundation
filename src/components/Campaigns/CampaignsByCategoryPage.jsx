'use client'
import React from 'react';
import NavbarS3 from '@/components/NavbarS3/NavbarS3'
import PageBanner from '@/components/PageBanner/PageBanner';
import CampaignsByCategoryList from './CampaignsByCategoryList';
import CtaSection from '@/components/CtaSection/CtaSection';
import Footer from '@/components/footer/Footer';
import Scrollbar from '@/components/scrollbar/scrollbar';

import Logo from '/public/images/sight_care_logo.png';

const CampaignsByCategoryPage = ({ categoryInfo}) => {
    
    return (
        <>
            <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
            <PageBanner title={categoryInfo.name} eyebrow="Our Campaigns" description={categoryInfo.brief} />
            <CampaignsByCategoryList hclass={'about-section-s4 mt-5 pt-3'} category={categoryInfo} />
            <CtaSection hclass={'cta-section'} />
            <Footer />
            <Scrollbar />
        </>
    );
}

export default CampaignsByCategoryPage;