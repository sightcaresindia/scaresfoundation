'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Services from '../../api/Services';

import shape1 from '/public/images/f-shape1.svg';
import shape2 from '/public/images/f-shape-2.svg';
import shape3 from '/public/images/f-shape3.svg';
import shape4 from '/public/images/f-shape4.svg';
import Image from 'next/image';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const Footer = (props) => {
    const [email, setEmail] = useState('');

    const handleReset = () => {
        setEmail('');
    };
    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget newsletter-s2">
                                <div className="widget-title">
                                    <h3>Sight Cares India Foundation</h3>
                                </div>
                                <p>Sight Cares India Foundation is a non-profit organization committed to transforming lives by restoring vision and ensuring accessible eye care for underprivileged communities across India.</p>
                                
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget ">
                                <div className="widget-title">
                                    <h3>Programs</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="#">Subsidized Surgeries</Link></li>
                                    <li><Link onClick={ClickHandler} href="#">Pre and post-surgery</Link></li>
                                    <li><Link onClick={ClickHandler} href="#">Medicines & Assistive Devices</Link></li>
                                    <li><Link onClick={ClickHandler} href="#">Eye Camps & Screenings</Link></li>
                                    <li><Link onClick={ClickHandler} href="#">Awareness & Advocacy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget ">
                                <div className="widget-title">
                                    <h3>Useful links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/">Home</Link></li>
                                    <li><Link onClick={ClickHandler} href="/about-us">about us</Link></li>
                                    <li><Link onClick={ClickHandler} href="#">Resources</Link></li>
                                    <li><Link onClick={ClickHandler} href="#">Campaigns</Link></li>
                                    <li><Link onClick={ClickHandler} href="#">contact us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget locations-widget ">
                                <div className="widget-title">
                                    <h3>Locations</h3>
                                </div>
                                <p>4C Shiv Vihar, Sewak Park , Dwarka More, New Delhi - 110059</p>
                                <ul>
                                    <li>Contact</li>
                                    <li>info@sightcares.org</li>
                                    <li>+91-931-060-6469</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> &copy; 2025 Sight Cares India Foundation. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape">
                <Image src={shape1} alt="" />
            </div>
            <div className="shape1">
                <Image src={shape2} alt="" />
            </div>
            <div className="shape2">
                <Image src={shape3} alt="" />
            </div>
            <div className="shape3">
                <Image src={shape4} alt="" />
            </div>
        </footer>
    )
}

export default Footer;







