import React from 'react';
import Link from 'next/link';

import Shape from '/public/images/healthcare.svg'
import Shape2 from '/public/images/cta-shap-2.svg'
import Shape3 from '/public/images/cta-shap-3.svg'
import Image from 'next/image';



const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const CtaSectionS3 = () => {
    return (
        <section className="cta-section-s3 section-padding bg-white">
            <div className="container">
                <div className="cta-wrap">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-12 col-12">
                            <div className="content text-center">
                                <h3>Need Help?</h3>
                                <p style={{color:'#FFF'}}>We are here to accompany you on your journey. Please write to us at&nbsp;<strong><a href="mailto:info@sightcaresfoundation.org" style={{textDecoration:'underline'}}>info@sightcaresfoundation.org</a></strong> or call us at <strong>+91-9310606469</strong>.</p>
                            </div>
                        </div>
                    </div>
                    <div className="shape">
                        <Image src={Shape2} alt="" />
                    </div>
                    <div className="shape1">
                        <Image src={Shape3} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSectionS3;