import React from 'react';
import Shape from '/public/images/funfuck-shape.svg';
import Image from 'next/image';
import EyeCampImage from '/public/images/programs/eye.png'

const EyeCamp = (props) => {

    return (
        <section className="funfact-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <h2>Programs</h2>
                            <h3>Eye Camps &  <span>Screenings</span></h3>
                            <p>We regularly organise free eye camps in rural and low-income urban areas where access to healthcare is limited. These camps help detect eye conditions early, such as cataracts, glaucoma, or refractive errors, and serve as the first step in the treatment process. Through local outreach, community mobilisation, and volunteer networks, we bring eye care to people who need it most.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="image-corner">
                            <Image src={EyeCampImage} alt="" />
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

export default EyeCamp;