import React from 'react';
import Link from 'next/link';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const HeaderTopbarS3 = () => {
    return (
        <div className="topbar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-12">
                        <ul className="contact-info">
                            <li>
                                <Link onClick={ClickHandler} href="tel:+8406938482">
                                    <i className="flaticon-maps-and-flags"></i><span>4C Shiv Vihar, Sewak Park , Dwarka More, New Delhi - 110059</span>
                                </Link>
                            </li>
                            <li>
                                <i className="ti-email"></i><span>info@sightcares.org</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="contact-into">
                            <ul className="social-media">
                                <li><Link onClick={ClickHandler} href="#"><i className="flaticon-facebook-app-symbol"></i></Link></li>
                                <li><Link onClick={ClickHandler} href="#"><i className="flaticon-linkedin"></i></Link></li>
                                <li><Link onClick={ClickHandler} href="#"><i className="flaticon-camera"></i></Link></li>
                                <li><Link onClick={ClickHandler} href="#"><i className="flaticon-vimeo"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTopbarS3;