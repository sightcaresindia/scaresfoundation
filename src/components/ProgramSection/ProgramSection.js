import React from "react";
import Image from 'next/image';
import img1 from '/public/images/programs/medical-guidance.png';
import img2 from '/public/images/programs/subsidized.png';
import img3 from '/public/images/programs/pre-post.png';
import img4 from '/public/images/programs/medicine-devices.png';
import img5 from '/public/images/programs/eye-camp.png';
import img6 from '/public/images/programs/awareness.png';
import Link from "next/link";


const Programs = (props) => {
    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="services-grid">
                    <div className="service-card">
                        <div className="icon red">
                            <Image src={img1} alt="" />
                        </div>
                        <h3>Medical Guidance</h3>
                        <p>At Sight Cares India Foundation, we provide end-to-end medical guidance for individuals suffering from visual impairment.</p>
                        <Link href="/programs/medical-guidance" className="view-more-btn">Read More</Link>
                    </div>
                    <div className="service-card">
                        <div className="icon orange">
                            <Image src={img2} alt="" />
                        </div>
                        <h3>Subsidized Surgeries</h3>
                        <p>Many people lose their sight due to treatable conditions, simply because they cannot afford surgery.</p>
                        <Link href="/programs/subsidized-surgeries" className="view-more-btn">Read More</Link>
                    </div>
                    <div className="service-card">
                        <div className="icon blue">
                             <Image src={img3} alt="" />
                        </div>
                        <h3>Pre-Surgery & Post-Surgery Care</h3>
                        <p>Successful eye treatment involves more than just the surgery. </p>
                        <Link href="/programs/pre-post-surgery-care" className="view-more-btn">Read More</Link>
                    </div>
                    <div className="service-card">
                        <div className="icon green">
                            <Image src={img4} alt="" />
                        </div>
                        <h3>Medicines & Assistive Devices</h3>
                        <p>Sight Cares India Foundation supplies essential medicines and vision support devices to individuals in need.</p>
                        <Link href="/programs/medicines-assistive-devices" className="view-more-btn">Read More</Link>
                    </div>
                    <div className="service-card">
                        <div className="icon white">
                            <Image src={img5} alt="" />
                        </div>
                        <h3>Eye Camps & Screenings</h3>
                        <p>We regularly organise free eye camps in rural and low-income urban areas where access to healthcare is limited.</p>
                        <Link href="/programs/eye-camps-screenings" className="view-more-btn">Read More</Link>
                    </div>
                     <div className="service-card">
                        <div className="icon white">
                            <Image src={img6} alt="" />
                        </div>
                        <h3>Awareness & Advocacy</h3>
                        <p>Awareness is the first step toward prevention and timely treatment.</p>
                        <Link href="/programs/awareness-advocacy" className="view-more-btn">Read More</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Programs;
