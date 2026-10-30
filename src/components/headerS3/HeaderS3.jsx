import React, { useState } from 'react'
import Link from 'next/link'
import MobileMenu from '@/components/MobileMenu/MobileMenu';
import HeaderTopbarS3 from '@/components/HeaderTopbarS3/HeaderTopbarS3';
import FontAwesome from '@/components/UiStyle/FontAwesome';
import Image from 'next/image';
import styles from './HeaderS3.module.scss';




const HeaderS3 = (props) => {
    const [menuActive, setMenuState] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { carts } = props;


    return (
        <header id="header" className={`header-s3 ${styles.header}`}>
            <HeaderTopbarS3/>
            <div className={"" + props.hclass}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className={`row align-items-center ${styles.headerRow}`}>
                            <div className={`col-lg-2 col-6 ${styles.logoColumn}`}>
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" href="/"><Image src={props.Logo}
                                        alt="logo" /></Link>
                                </div>
                            </div>
                            <div className={`col-auto d-lg-none ${styles.mobileColumn}`}>
                                <MobileMenu />
                            </div>
                            <div className="col-lg-8 d-none d-lg-block px-0">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder justify-content-center">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li><Link onClick={ClickHandler} className="active" href="/">Home</Link></li>
                                        <li><Link onClick={ClickHandler} href="/about-us">About Us</Link></li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/programs">Programs <FontAwesome name="caret-down" /></Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/programs/medical-guidance">Medical Guidance</Link></li>
                                                <li><Link onClick={ClickHandler} href="/programs/subsidized-surgeries">Subsidized Surgeries</Link></li>
                                                <li><Link onClick={ClickHandler} href="/programs/pre-post-surgery-care">Pre and post-surgery</Link></li>
                                                <li><Link onClick={ClickHandler} href="/programs/medicines-assistive-devices">Medicines & Assistive Devices</Link></li>
                                                <li><Link onClick={ClickHandler} href="/programs/eye-camps-screenings">Eye Camps & Screenings</Link></li>
                                                <li><Link onClick={ClickHandler} href="/programs/awareness-advocacy">Awareness & Advocacy</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/our-campaigns">Campaigns</Link></li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="#">Resources <FontAwesome name="caret-down" /></Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/faqs">FAQs on Eye Health</Link></li>
                                                <li><Link onClick={ClickHandler} href="/resources/government-schemes-and-support">Government Schemes & Support</Link></li>
                                                <li><Link onClick={ClickHandler} href="/resources/medical-and-surgery-process-guide">Medical & Surgery Process Guide</Link></li>
                                                {/* <li><Link onClick={ClickHandler} href="#">Blog & News Updates</Link></li>
                                                <li><Link onClick={ClickHandler} href="#">Photo Gallery</Link></li>*/}
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/get-involved">Get Involved <FontAwesome name="caret-down" /></Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/get-involved/volunteer-opportunities">Volunteer Opportunities</Link></li>
                                                <li><Link onClick={ClickHandler} href="/get-involved/corporate-partnerships">Corporate Partnerships</Link></li>
                                                <li><Link onClick={ClickHandler} href="/get-involved/fundraising-and-campaigns">Fundraising & Campaigns</Link></li>
                                                <li><Link onClick={ClickHandler} href="/get-involved/internship-programs">Internship Programs</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} className="active" href="/blogs">Blogs</Link></li>
                                        <li><Link onClick={ClickHandler} href="/contact-us">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 d-none d-lg-block">
                                <div className="header-right">
                                    <div className="close-form ms-0">
                                        <Link onClick={ClickHandler} className="theme-btn" href="/donate">Donate Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default HeaderS3;
