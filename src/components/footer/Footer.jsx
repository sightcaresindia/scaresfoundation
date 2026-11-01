'use client'
import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.scss'

import shape1 from '/public/images/f-shape1.svg';
import shape2 from '/public/images/f-shape-2.svg';
import shape3 from '/public/images/f-shape3.svg';
import shape4 from '/public/images/f-shape4.webp';
import Image from 'next/image';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const Footer = () => {
    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="widget newsletter-s2">
                                <div className="widget-title">
                                    <h3>Sight Cares India Foundation</h3>
                                </div>
                                <p>Providing crowdfunding services for medical, social and charitable causes. We facilitate transactions between contributors and campaigners.</p>
                                <div className='footerSocialLinks'>
                                    <ul>
                                        <li><Link onClick={ClickHandler} href="https://www.facebook.com/SightCares" target='_blank'><i className="flaticon-facebook-app-symbol"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="https://www.linkedin.com/company/sight-cares/" target='_blank'><i className="flaticon-linkedin"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="https://www.instagram.com/sightcaresindia/" target='_blank'><i className="flaticon-camera"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="https://x.com/SightCares" target='_blank'><i className="flaticon-twitter"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-2 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget ">
                                <div className="widget-title">
                                    <h3>Useful links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/">Home</Link></li>
                                    <li><Link onClick={ClickHandler} href="/about-us">About us</Link></li>
                                    <li><Link onClick={ClickHandler} href="/our-campaigns">Campaigns</Link></li>
                                    <li><Link onClick={ClickHandler} href="/contact-us">Contact us</Link></li>
                                    <li><Link onClick={ClickHandler} href="/faqs">FAQs on Eye Health</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="widget locations-widget ">
                                <div className="widget-title">
                                    <h3>Locations</h3>
                                </div>
                                <p>KH NO. 18/19, 3rd Floor, Village Burari, Street no.19 Block- A1, Amrit Vihar, North Delhi- 110084</p>
                                <ul>
                                    <li>Contact</li>
                                    <li>info@sightcares.org</li>
                                    <li>+91-931-060-6469</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="widget">
                                <div className="widget-title">
                                    <h3>Support Our Work</h3>
                                </div>
                                <div className={styles.donationContent}>
                                    <figure className={styles.qrCode}>
                                        <a href="/images/qr-code.png" target="_blank" rel="noopener noreferrer" aria-label="Open donation QR code at full size">
                                            <img src="/images/qr-code.png" alt="Donation QR code for Sight Cares India Foundation" width="468" height="796" loading="lazy" />
                                        </a>
                                        <figcaption>Scan to donate</figcaption>
                                    </figure>
                                    <dl className={styles.bankDetails}>
                                        <div><dt>Account Holder Name</dt><dd>Sight Cares India Foundation</dd></div>
                                        <div><dt>Account Number</dt><dd>502001047899809</dd></div>
                                        <div><dt>IFSC Code</dt><dd>HDFC0003961</dd></div>
                                        <div><dt>Bank Name</dt><dd>HDFC Bank</dd></div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className='mb-1 policy-links'>
                                <Link onClick={ClickHandler} href="/privacy-policy">Privacy Policy</Link> |&nbsp;
                                <Link onClick={ClickHandler} href="/terms-and-conditions">Terms & Conditions</Link> |&nbsp;
                                <Link onClick={ClickHandler} href="/refund-cancellation-policy">Refund Policy</Link> |&nbsp;
                                <Link onClick={ClickHandler} href="/shipping-delivery-policy ">Shipping Delivery Policy </Link>
                            </p>
                            <p className="copyright"> &copy; {new Date().getFullYear()} Sight Cares India Foundation. All rights reserved.</p>
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
                <Image src={shape4} width={175} height={217} alt="" />
            </div>
        </footer>
    )
}

export default Footer;







