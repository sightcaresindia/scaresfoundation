import React from 'react';
import Link from 'next/link';

import Shape from '/public/images/cta-shap.svg'
import Shape2 from '/public/images/curved_shape.svg'
import Shape3 from '/public/images/arrow1.svg'
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const CtaSection = (props) => {
    return (
        <section className={"" +props.hclass}>
            <div className="container">
                <div className="content">
                    <span>Lorem Ipsum Dolor</span>
                    <h3>Lorem Ipsum Dolor Sit Amet</h3>
                    <Link onClick={ClickHandler} href="/become-volunteer" className="theme-btn">Donate Now</Link>
                </div>
            </div>
            <div className="shape">
                <Image src={Shape} alt="" />
            </div>
            <div className="shape-1">
                <Image src={Shape2} alt="" />
            </div>
            <div className="shape-2">
                <Image src={Shape3} alt="" />
            </div>
        </section>
    );
};

export default CtaSection;