import React, { useState } from 'react'
import Link from 'next/link'
import MobileMenu from '@/components/MobileMenu/MobileMenu';
import HeaderTopbarS3 from '@/components/HeaderTopbarS3/HeaderTopbarS3';
import FontAwesome from '@/components/UiStyle/FontAwesome';
import Image from 'next/image';




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
        <header id="header" className="header-s3">
            <HeaderTopbarS3/>
            <div className={"" + props.hclass}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <MobileMenu />
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" href="/"><Image src={props.Logo}
                                        alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li><Link onClick={ClickHandler} className="active" href="/">Home</Link></li>
                                        <li><Link onClick={ClickHandler} href="/about-us">About Us</Link></li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="#">Programs <FontAwesome name="caret-down" /></Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="#">Medical Guidance</Link></li>
                                                <li><Link onClick={ClickHandler} href="#">Subsidized Surgeries</Link></li>
                                                <li><Link onClick={ClickHandler} href="#">Pre and post-surgery</Link></li>
                                                <li><Link onClick={ClickHandler} href="#">Medicines & Assistive Devices</Link></li>
                                                <li><Link onClick={ClickHandler} href="#">Eye Camps & Screenings</Link></li>
                                                <li><Link onClick={ClickHandler} href="#">Awareness & Advocacy</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="#">Campaigns <FontAwesome name="caret-down" /></Link>
                                            <ul className="sub-menu">
                                               <li><Link onClick={ClickHandler} href="#">Medical Guidance</Link></li>
                                                <li><Link onClick={ClickHandler} href="#">Subsidized Surgeries</Link></li>
                                                <li><Link onClick={ClickHandler} href="#">Pre and post-surgery</Link></li>
                                                <li><Link onClick={ClickHandler} href="#">Medicines & Assistive Devices</Link></li>
                                                <li><Link onClick={ClickHandler} href="#">Eye Camps & Screenings</Link></li>
                                                <li><Link onClick={ClickHandler} href="#">Awareness & Advocacy</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="#">Resources <FontAwesome name="caret-down" /></Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/faqs">FAQs on Eye Health</Link></li>
                                                <li><Link onClick={ClickHandler} href="#">Government Schemes & Support</Link></li>
                                                <li><Link onClick={ClickHandler} href="#">Medical & Surgery Process Guide</Link></li>
                                                <li><Link onClick={ClickHandler} href="#">Blog & News Updates</Link></li>
                                                <li><Link onClick={ClickHandler} href="#">Photo Gallery</Link></li>
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
                                        <li><Link onClick={ClickHandler} href="#">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="close-form ms-0">
                                        <Link onClick={ClickHandler} className="theme-btn" href="/donate">Donate now</Link>
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