import React from 'react';

import shapeArrow from '/public/images/process-arrow-shape.svg'
import shape1 from '/public/images/process/shape1.svg'
import shape2 from '/public/images/process/shape2.svg'
import shape3 from '/public/images/process/shape3.svg'
import shape4 from '/public/images/process/shape4.svg'
import img1 from '/public/images/sightcare/guided-medical.png'
import img2 from '/public/images/sightcare/community-centered.png'
import img3 from '/public/images/sightcare/sustainable-partnerships.png'
import img4 from '/public/images/sightcare/fututre.png'
import Image from 'next/image';
import styles from './SightCare.module.scss';

const AboutSightCare = () => {
    return (
        <section className={`process-section ${styles.section}`}>
            <div className="container">
                <div className="section-title text-center">
                    <h2>How We Make a Difference</h2>
                </div>
                <div className={`wrape ${styles.grid}`}>
                    <div className="item">
                        <div className="icon">
                            <Image src={img1} alt="" />
                            <span>01</span>
                        </div>
                        <h2>Medical Treatment</h2>
                        <p>Supporting fundraising for illnesses, surgeries, accidents, medicines and other essential medical expenses.</p>
                        <div className="shape">
                            <Image src={shapeArrow} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <Image src={img2} alt="" />
                            <span>02</span>
                        </div>
                        <h2>Disability Support</h2>
                        <p>Helping people with disabilities access eligible care, assistive devices, rehabilitation and related support.</p>
                        <div className="shape">
                            <Image src={shapeArrow} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <Image src={img3} alt="" />
                            <span>03</span>
                        </div>
                        <h2>Long-Term Care</h2>
                        <p>Bringing attention to ongoing healthcare needs that place a financial burden on individuals and families.</p>
                        <div className="shape">
                            <Image src={shapeArrow} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <Image src={img2} alt="" />
                            <span>04</span>
                        </div>
                        <h2>Connecting Donors with People in Need</h2>
                        <p>Allowing eligible medical and disability-related campaigns to reach people willing to help.</p>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <Image src={img1} alt="" />
                            <span>05</span>
                        </div>
                        <h2>Responsible Crowdfunding</h2>
                        <p>Working towards appropriate case verification, clear communication and accountability in the handling of donations.</p>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <Image src={img4} alt="" />
                            <span>06</span>
                        </div>
                        <h2>Vision for the Future</h2>
                        <p>With a strong foundation, the NGO is working towards expanding its reach, investing in advocacy, and bringing eye healthcare programs and treatments to the grassroots level.</p>
                        <div className="shape">
                            <Image src={shapeArrow} alt="" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="shape-1">
                <Image src={shape1} alt="" />
            </div>
            <div className="shape-2">
                <Image src={shape2} alt="" />
            </div>
            <div className="shape-3">
                <Image src={shape3} alt="" />
            </div>
            <div className="shape-4">
                <Image src={shape4} alt="" />
            </div>
        </section>
    );
};

export default AboutSightCare;
