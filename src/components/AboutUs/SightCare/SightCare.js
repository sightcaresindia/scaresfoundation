import React from 'react';

import shapeArrow from '/public/images/process-arrow-shape.svg'
import shape1 from '/public/images/process/shape1.svg'
import shape2 from '/public/images/process/shape2.svg'
import shape3 from '/public/images/process/shape3.svg'
import shape4 from '/public/images/process/shape4.svg'
import shape5 from '/public/images/process/shape5.svg'
import img1 from '/public/images/sightcare/guided-medical.png'
import img2 from '/public/images/sightcare/community-centered.png'
import img3 from '/public/images/sightcare/sustainable-partnerships.png'
import img4 from '/public/images/sightcare/fututre.png'
import Image from 'next/image';

const ProcessSection = () => {
    return (
        <section className="process-section">
            <div className="container">
                <div class="section-title text-center">
                    <h2>What Makes Sight Cares India Foundation Unique?</h2>
                </div>
                <div className="wrape">
                    <div className="item">
                        <div className="icon">
                             <Image src={img1} alt="" />
                            <span>01</span>
                        </div>
                        <h2>Guided Medical Support</h2>
                        <p>While surgeries and treatments are conducted through partner hospitals, the Foundation plays a crucial role in guidance, coordination, mobilization, and affordability support.</p>
                        <div className="shape">
                            <Image src={shapeArrow} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <Image src={img2} alt="" />
                            <span>02</span>
                        </div>
                        <h2>Community-Centered Approach</h2>
                        <p>Eye camps and health screenings are conducted at the grassroots level, identifying beneficiaries and hand-holding them through the process.</p>
                        <div className="shape">
                            <Image src={shapeArrow} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <Image src={img3} alt="" />
                            <span>03</span>
                        </div>
                        <h2>Sustainable Partnerships</h2>
                        <p>Collaborates with private and government hospitals, healthcare professionals, and institutional donors to create lasting change.</p>
                        <div className="shape">
                            <Image src={shapeArrow} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <Image src={img4} alt="" />
                            <span>04</span>
                        </div>
                        <h2>Vision for the Future</h2>
                        <p>With a strong foundation, the NGO is working towards expanding its reach, investing in advocacy, and bringing eye healthcare programs and treatments to the grassroot level.</p>
                        <div className="shape">
                            <Image src={shapeArrow} alt="" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="shape-1">
                <Image src={shape1} alt="" />
            </div>
            <div className="shape-2">
                <Image src={shape2} alt="" />
            </div>
            <div className="shape-3">
                <Image src={shape3} alt="" />
            </div>
            <div className="shape-4">
                <Image src={shape4} alt="" />
            </div>
            <div className="shape-5">
                <Image src={shape5} alt="" />
            </div>
        </section>
    );
};

export default ProcessSection;