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
                             <p><strong>Sight Cares India Foundation</strong> is a non-profit organization committed to transforming lives by restoring vision and ensuring accessible eye care for underprivileged communities across India. Our mission is to restore vision, dignity, and opportunity to those affected by avoidable visual impairments.</p>
                            <p>Founded with a deep sense of empathy and purpose, the organization works to reach underserved rural and urban populations who are often neglected by the mainstream healthcare system.</p>
                            <p>With a focus on awareness, accessibility, and affordability, the Foundation guides individuals in need through the entire journey of eye care—right from diagnosis to surgery, recovery, and post-surgery support. </p>
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