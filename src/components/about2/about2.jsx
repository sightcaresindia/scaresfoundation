'use client'
import React, { useState } from 'react';

import Shape6 from '/public/images/about/shape7.svg';
import Shape8 from '/public/images/about/shape8.svg';
import Image from 'next/image';

const AboutS2 = (props) => {

    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    }

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    
                    <div className="col-lg-10 col-12">
                        <h4>What Makes Sight Cares India Foundation Unique?</h4>
                        <ul>
                            <li><strong>Guided Medical Support:</strong> While surgeries and treatments are conducted through partner hospitals, the Foundation plays a crucial role in guidance, coordination, mobilization, and affordability support.</li>
                            <li><strong>Community-Centered Approach:</strong> Eye camps and health screenings are conducted at the grassroots level, identifying beneficiaries and hand-holding them through the process.</li>
                            <li><strong>Sustainable Partnerships:</strong> Collaborates with private and government hospitals, healthcare professionals, and institutional donors to create lasting change.</li>
                            <li><strong>Vision for the Future:</strong> With a strong foundation, the NGO is working towards expanding its reach, investing in advocacy, and bringing eye healthcare programs and treatments to the grassroot level.</li>
                        </ul>
                        <div id="mission" className="mt-4">
                            <h4>Our Mission & Vision</h4>
                            <p><strong>Mission</strong>: To provide comprehensive eye care support to underserved communities, restoring sight and improving quality of life.</p>
                            <p><strong>Vision</strong>: A future where no one in India suffers from preventable blindness due to lack of access or awareness.</p>
                        </div>
                        <div id="our-story" className="mt-4">
                            <h4>Our Story</h4>
                            <p>Ms. Tanu Singh, the founder of Sight Cares India Foundation, was deeply moved by the challenges faced by visually impaired individuals in rural and low-income communities. A personal encounter with a child who had lost access to education due to an untreated eye condition sparked her determination to start this initiative. Her vision is to bridge the gap in eye healthcare through compassion, awareness, and structured support.</p>
                        </div>
                        <div id="team" className="mt-4">
                            <h4>Leadership & Team</h4>
                            <p>Led by Ms Tanu Singh, the team includes healthcare professionals, social workers, and volunteers passionate about creating eye health equity across India.</p>
                        </div>
                        <div id="where-we-work" className="mt-4">
                            <h4>Where We Work</h4>
                            <p>Sight Cares India Foundation operates across India, with a focus on rural villages and urban slums where access to medical facilities is limited or non-existent.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <Image src={Shape6} alt="" />
            </div>
            <div className="shape-3">
                <Image src={Shape8} alt="" />
            </div>
        </section >
    )
}

export default AboutS2;



