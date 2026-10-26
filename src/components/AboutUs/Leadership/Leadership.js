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
                        <p>Under Ms Tannu Singh's leadership, Sight Cares India Foundation is committed to making medical and disability-related support more accessible to people facing financial hardship.</p>
                        <p>Through its crowdfunding initiative, the Foundation aims to highlight genuine needs for compassionate donors, encourage collective support, and promote responsible fundraising practices. Its work is guided by empathy, dignity, transparency and a commitment to help patients and their families navigate difficult circumstances with greater hope.</p>
                    </div>

                    <div class="card">
                        <h2>Where We Work</h2>
                        <p>Sight Cares India Foundation operates across India, focusing on rural villages and urban slums where access to medical facilities is limited or nonexistent.</p>
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