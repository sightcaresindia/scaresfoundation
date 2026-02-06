'use client'
import React, { Fragment } from 'react';
import NavbarS3 from '@/components/NavbarS3/NavbarS3'
import Hero from '@/components/hero/hero';
import About from '@/components/about/about';
import Impact from '@/components/Impact/Impact';
import Testimonial from '@/components/Testimonial/Testimonial';
import CategoriesWithPosts from '@/components/CategoriesWithPosts/CategoriesWithPosts';
import Footer from '@/components/footer/Footer';
import Scrollbar from '@/components/scrollbar/scrollbar';

import Logo from '/public/images/sight_care_logo.png'


const HomePage = () => {
    return (
        <Fragment>
            <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
            <Hero hclass={'wpo-hero-slider'} />
            <About hclass={'about-section section-padding'}/>
            <CategoriesWithPosts />
            <Impact hclass={"impact-section service-section-s5 pt-5"} />
            <Testimonial tClass={'testimonial-section'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage;