import React from 'react';
import Shape from '/public/images/funfuck-shape.svg';
import Image from 'next/image';
import VolunteerImage from '/public/images/volunteer/volunteer.png'

const Volunteer = (props) => {

    return (
        <section className="funfact-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <h2>Get Involved</h2>
                            <h3>Volunteer <span>Opportunities</span></h3>
                            <p>Your time and energy can make a difference. As a volunteer, you can assist in organising and running eye screening camps, mobilising communities, and conducting awareness sessions in underserved areas. From on-ground support to digital outreach, every volunteer plays a crucial role in transforming lives. No prior experience is needed — just a passion for helping others.</p>
                        </div>
                        
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="image-corner">
                            <Image src={VolunteerImage} alt="" />
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

export default Volunteer;