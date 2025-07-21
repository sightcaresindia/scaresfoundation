import React from 'react';

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
                                <h3>Every rupee you contribute helps prevent avoidable blindness</h3>
                                <p className='text-white'>Together, let&rsquo;s ensure that sight is not a privilege, but a right for all.</p>
                                <p className='text-white'><strong>For any assistance, write to us at info@sightcares.org or call us at +91-931-060-6469</strong></p>
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