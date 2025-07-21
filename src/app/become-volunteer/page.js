'use client'
import React, { Fragment } from 'react';
import NavbarS3 from '@/components/NavbarS3/NavbarS3'
import PageTitle from '@/components/pagetitle/PageTitle';
import BecomeVolunteerForm from '@/components/BecomeVolunteerForm/BecomeVolunteerForm'
import Footer from '@/components/footer/Footer';
import Scrollbar from '@/components/scrollbar/scrollbar';
import Bgimg from '/public/images/volunteer.jpg'
import Image from 'next/image';

import Logo from '/public/images/sight_care_logo.png'

const HomePage4 = () => {
    return (
        <Fragment>
            <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Become Volunteer'} />
            <div className="volunteer-area">
                <div className="volunteer-wrap">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="volunteer-item">
                                    <div className="volunteer-img-wrap">
                                        <div className="volunter-img">
                                            <Image src={Bgimg} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="volunteer-contact">
                                    <div className="volunteer-contact-form">
                                        <h2>Become a Volunteer</h2>
                                        <BecomeVolunteerForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage4;