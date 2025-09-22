import React from 'react';
import Shape from '/public/images/funfuck-shape.svg';
import Image from 'next/image';
import MedicinesAssistiveImage from '/public/images/programs/medicine.png'

const MedicinesAssistive = (props) => {

    return (
        <section className="funfact-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-12">
                        <div className="content">
                            <h2>Programs</h2>
                            <h3>Medicines & <span>Assistive Devices</span></h3>
                            <p>Sight Cares India Foundation supplies essential medicines and vision support devices to individuals in need. Whether it’s post-operative medication, eye drops for chronic conditions, or tools like low-vision aids, magnifiers, white canes, or Braille equipment, we ensure that each beneficiary receives what they need to improve or manage their vision.</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-12">
                        <div className="image-corner">
                            <Image src={MedicinesAssistiveImage} alt="" />
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

export default MedicinesAssistive;