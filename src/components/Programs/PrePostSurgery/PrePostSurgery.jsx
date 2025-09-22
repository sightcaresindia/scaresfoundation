import React from 'react';
import Shape from '/public/images/funfuck-shape.svg';
import Image from 'next/image';
import PrePostImage from '/public/images/programs/pre-post-surgery.png'

const PrePostSurgery = (props) => {

    return (
        <section className="funfact-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <h2>Programs</h2>
                            <h3>Pre-Surgery & <span>Post-Surgery Care</span></h3>
                            <p>Successful eye treatment involves more than just the surgery. We support patients at every stage — from arranging pre-surgical assessments and ensuring they are medically fit, to post-surgery follow-ups, wound care, and recovery support. We also provide necessary medications and assistive tools like spectacles, magnifiers, or eye shields to aid healing and rehabilitation.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="image-corner">
                            <Image src={PrePostImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape">
                <Image src={Shape} alt="" />
            </div>
        </section>
    )

}

export default PrePostSurgery;