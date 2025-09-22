import React from 'react';
import Shape from '/public/images/funfuck-shape.svg';
import Image from 'next/image';
import CorporateImage from '/public/images/corporate/corporate.png'

const CorporatePartnership = (props) => {

    return (
        <section className="funfact-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <h2>Get Involved</h2>
                            <h3>Corporate <span>Partnerships</span></h3>
                            <p>Join hands with us to create inclusive and impactful CSR initiatives. By partnering with Sight Cares India Foundation, your organisation can support vision care programs, sponsor surgeries, or co-host community eye health drives. We offer customised collaboration models aligned with your CSR goals and ESG values, ensuring transparency, scalability, and measurable outcomes.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="image-corner">
                            <Image src={CorporateImage} alt="" />
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

export default CorporatePartnership;