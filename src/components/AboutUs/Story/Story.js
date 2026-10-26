import React from 'react';
import VolunteerImage from '/public/images/volunteer/volunteer.png'
import Image from 'next/image';

const FunFact = (props) => {

    return (
        <section className="funfact-section section-padding bg-white">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <h3>Our <span>Story</span></h3>
                            <p>Ms Tannu Singh founded Sight Cares India Foundation with a vision to help people who struggle to afford essential healthcare and medical support.</p>
                            <p>Many individuals and families face difficult choices when the cost of medical treatment, medicines, surgery, or rehabilitation support is beyond their means.</p>
                            <p>Sight Cares India Foundation aims to bridge this financial gap through crowdfunding, connecting people in need with compassionate donors who can help. The platform supports individuals facing a wide range of medical conditions helping them raise funds for essential care and support they might otherwise struggle to access.</p>
                            <p>At the heart of this initiative is a simple belief: <strong>no one should be denied the opportunity to seek essential medical care simply because they cannot afford it.</strong></p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="image-corner">
                            <Image src={VolunteerImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default FunFact;