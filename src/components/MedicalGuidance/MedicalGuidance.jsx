import React from 'react';
import Shape from '/public/images/funfuck-shape.svg';
import Image from 'next/image';
import MedicalImage from '/public/images/programs/medicial.png'

const Medical = (props) => {

    return (
        <section className="funfact-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <h2>Programs</h2>
                            <h3>Medical <span>Guidance</span></h3>
                            <p>At Sight Cares India Foundation, we provide end-to-end medical guidance for individuals suffering from visual impairment. Our team helps patients and families understand eye conditions, find timely diagnoses, and connect with qualified eye specialists in both government and private hospitals. From initial consultations to navigating complex treatment options, we ensure that no one is left confused or unsupported on their journey to better vision.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="image-corner">
                            <Image src={MedicalImage} alt="" />
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

export default Medical;