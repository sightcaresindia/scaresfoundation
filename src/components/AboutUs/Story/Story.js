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
                            <p>Ms. Tannu Singh, the founder of Sight Cares India Foundation, was deeply moved by the challenges faced by visually impaired individuals in rural and low-income communities. A personal encounter with a child who had lost access to education due to an untreated eye condition sparked her determination to start this initiative. Her vision is to bridge the gap in eye healthcare through compassion, awareness, and structured support.</p>
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