'use client'
import React, { useEffect, useState } from 'react';
import NavbarS3 from '@/components/NavbarS3/NavbarS3'
import PageTitle from '@/components/pagetitle/PageTitle'
import CampaignsByCategoryList from './CampaignsByCategoryList';
import CtaSection from '@/components/CtaSection/CtaSection';
import Footer from '@/components/footer/Footer';
import Scrollbar from '@/components/scrollbar/scrollbar';
import { useParams } from 'next/navigation';

import Logo from '/public/images/sight_care_logo.png';

const CampaignsByCategoryPage = () => {
    const [category, setCategory] = useState([]);
    const params = useParams();
    const categorySlug = params.slug;

    useEffect(() => {
        const fetchCategory = async () => {
            try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/projects-category/${categorySlug}`);
            const data = await res.json();
            setCategory(data);
            } catch (error) {
            console.error('Error fetching Campaigns:', error);
            }
        };

        fetchCategory();
    }, []);

    console.log(category);

    return (
        <>
            <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={category.name} pagesub="Our Campaigns" />
            <CampaignsByCategoryList hclass={'about-section-s4 mt-5 pt-3'} category={category} />
            <CtaSection hclass={'cta-section'} />
            <Footer />
            <Scrollbar />
        </>
    );
}

export default CampaignsByCategoryPage;