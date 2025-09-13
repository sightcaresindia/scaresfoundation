import React from 'react';
import Shape from '/public/images/funfuck-shape.svg';
import Image from 'next/image';
import AwarenessAdvocacyImage from '/public/images/programs/awareness-and-advocasy.png'

const AwarenessAdvocacy = (props) => {

    return (
        <section className="funfact-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-12">
                        <div className="content">
                            <h2>Programs</h2>
                            <h3>Awareness & <span>Advocacy</span></h3>
                            <p>Awareness is the first step toward prevention and timely treatment. We conduct educational programs and workplaces to raise awareness about preventable blindness, the importance of eye hygiene, and early signs of vision loss. Additionally, we advocate for better access to inclusive eye healthcare and policies that support the visually impaired.</p>
                        </div>
                        <p><strong>Procedure:</strong></p>
                        <ul>
                            <li><i class="flaticon-check"></i>Conduct awareness campaigns.</li>
                            <li><i class="flaticon-check"></i>Organise eye screening camps.</li>
                            <li><i class="flaticon-check"></i>Diagnose and assess needs.</li>
                            <li><i class="flaticon-check"></i>Refer to hospitals for further treatment.</li>
                            <li><i class="flaticon-check"></i>Provide financial and logistical support for surgeries, medicines, and follow-up care.</li>
                        </ul>
                    </div>
                    <div className="col-lg-5 col-12">
                        <div className="image-corner">
                            <Image src={AwarenessAdvocacyImage} alt="" />
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

export default AwarenessAdvocacy;