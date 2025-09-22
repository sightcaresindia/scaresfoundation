'use client'
import React from 'react';
import Image from 'next/image';

import impact1 from '/public/images/impact/route.png';
import impact2 from '/public/images/impact/medical-condition.png';
import impact3 from '/public/images/impact/patient.png';
import impact4 from '/public/images/impact/healthcare.png';

import shape1 from '/public/images/about/shape1.svg'
import shape4 from '/public/images/about/shape4.svg'

const Impact = (props) => {
    return (
        <section className={"" +props.hclass}>
            <div className="container mb-4">
                <div className="row align-items-center">
                    <div className="col-lg-12 col-12">
                        <div className="section-title text-center">
                            <h2>Impact <span>Highlights</span></h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container pt-5 mb-5 pb-5'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className="impact-card">
                            <div className="icon">
                                <Image src={impact1} alt="" />
                            </div>
                            <div className="content">
                                <h2>Geographical Reach</h2>
                                <p>Focused in North India and progressively extending our impact across India.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="impact-card" style={{backgroundColor: "#1d6db2"}}>
                            <div className="icon">
                                <Image src={impact2} alt="" />
                            </div>
                            <div className="content">
                                <h2>Medical Conditions Addressed</h2>
                                <p>Various preventable and treatable conditions such as cataracts, refractive errors, glaucoma, diabetic retinopathy, and other treatable conditions.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="impact-card">
                            <div className="icon">
                                <Image src={impact3} alt="" />
                            </div>
                            <div className="content">
                                <h2>Support Provided</h2>
                                <p>Medical guidance, surgery coordination, diagnosis, subsidized surgeries, free assistive devices, free medicines, spectacles, and post-operative care.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="impact-card" style={{backgroundColor: "#1d6db2"}}>
                            <div className="icon">
                                <Image src={impact4} alt="" />
                            </div>
                            <div className="content">
                                <h2>Holistic Support</h2>
                                <p>Addresses every aspect of a visually impaired person's journey — from medical guidance and surgeries to emotional well-being and rehabilitation. We empower individuals with the tools, care, and confidence they need to lead independent and dignified lives.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <Image src={shape1} alt="" />
            </div>
            <div className="shape-4">
                <Image src={shape4} alt="" />
            </div>
        </section>
    );
};

export default Impact;