import React from 'react';
import CountUp from 'react-countup';
import Shape from '/public/images/funfuck-shape.svg';
import Image from 'next/image';

const FunFact = (props) => {

    return (
        <section className="funfact-section section-padding">
            <div className="container">
                 <div class="section-wrapper">
                    <div class="card">
                    <h2>Leadership & Team</h2>
                    <p>
                        Led by Ms Tannu Singh, the team includes healthcare professionals, social workers, and volunteers passionate about creating eye health equity across India.
                    </p>
                    </div>

                    <div class="card">
                    <h2>Where We Work</h2>
                    <p>
                        Sight Cares India Foundation operates across India, with a focus on rural villages and urban slums where access to medical facilities is limited or non-existent.
                    </p>
                    </div>
                </div>
            </div>
            <div className="shape">
                <Image src={Shape} alt="" />
            </div>
        </section>
    )

}

export default FunFact;