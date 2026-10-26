import React from 'react';
import Link from 'next/link';

/* image */
import Img1 from '/public/images/about/about-1.jpg'
import Img2 from '/public/images/about/about-2.jpg'
import shape1 from '/public/images/about/shape1.svg'
import shape3 from '/public/images/about/shape3.svg'
import shape4 from '/public/images/about/shape4.svg'
import shape5 from '/public/images/about/shape5.svg'
import shape6 from '/public/images/about/shape6.svg'
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const about = (props) => {
    return (
        <section className={"" +props.hclass}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="about-image">
                            <div className="img-1">
                                <Image src={Img1} alt="" />
                            </div>
                            <div className="img-2">
                                <Image src={Img2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="about-content">
                            <h3>Sight Cares <span>India</span> Foundation</h3>
                            <p style={{ borderLeft: 'none', fontWeight: 'bold', color: '#1d6db2' }}>Sight Cares India Foundation aims to bridge this gap through medical crowdfunding, connecting people in need with those who can help.</p>
                            <p>Providing crowdfunding services for medical, social and charitable causes. We facilitate transactions between contributors and campaigners.</p>
                            <p>We support fundraising for a wide range of medical and healthcare needs, including illnesses, surgeries, accidents, Our focus is on individuals and families who cannot afford these essential expenses and need financial support.</p>
                            <p>Through crowdfunding, we give eligible cases a chance to reach compassionate donors who can help meet their needs. Every campaign represents a real person, a family facing difficult circumstances and a need for support.</p>
                            <p>We believe everyone deserves access to appropriate care and to live with dignity, regardless of financial circumstances.</p>
                            <div className="about-btn">
                                <Link onClick={ClickHandler} href="/about-us" className="theme-btn">About Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <Image src={shape1} alt="" />
            </div>
            <div className="shape-3">
                <Image src={shape3}alt="" />
            </div>
            <div className="shape-4">
                <Image src={shape4} alt="" />
            </div>
            <div className="shape-5">
                <Image src={shape5} alt="" />
            </div>
            <div className="shape-6">
                <Image src={shape6} alt="" />
            </div>
        </section>
    );
};

export default about;