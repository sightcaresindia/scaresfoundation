import React from 'react';
import CountUp from 'react-countup';
import Shape from '/public/images/funfuck-shape.svg';
import Image from 'next/image';
import MedicalImage from '/public/images/medical/medical.png';


const MedicalGuide = (props) => {

    return (
        <section className="funfact-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <h2>Resources</h2>
                            <h3>Helping You <span>Every Step</span> of the Way</h3>
                        </div>
                        <p className='mt-4'>At Sight Cares India Foundation, we believe that lack of money should never be a reason for someone to lose their vision. We have designed a patient-friendly, step-by-step process to help individuals access the proper care — from first contact with us to full recovery.</p>
                    </div>
                    <div className="col-lg-6 col-12">
                        <Image src={MedicalImage} alt="" />
                    </div>
                </div>
            </div>
            <div className="shape">
                <Image src={Shape} alt="" />
            </div>
        </section>
        
    )

}

export default MedicalGuide;