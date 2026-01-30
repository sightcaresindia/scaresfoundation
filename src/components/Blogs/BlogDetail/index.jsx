'use client'
import React, { Fragment, useEffect, useState } from 'react';
import NavbarS3 from '@/components/NavbarS3/NavbarS3'
import BlogHeader from '@/components/Blogs/BlogDetail/BlogHeader';
import BlogDetailsPage from '@/components/Blogs/BlogDetail/BlogDetailsPage';
import CtaSection from '@/components/CtaSection/CtaSection';
import Footer from '@/components/footer/Footer';
import Scrollbar from '@/components/scrollbar/scrollbar';

import Logo from '/public/images/sight_care_logo.png'


const BlogDetail = ({blogData}) => {

    return (
        <Fragment>
            <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
            <BlogHeader pageTitle={blogData.title} pagesub={'Blogs'} bgImage={blogData.banner_img} />
            <BlogDetailsPage hclass={'wpo-blog-section py-5 mb-5'} blogData = {blogData}/>
            <CtaSection hclass={'cta-section'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetail;
