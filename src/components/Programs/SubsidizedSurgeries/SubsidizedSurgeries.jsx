import React from 'react';
import Shape from '/public/images/funfuck-shape.svg';
import Image from 'next/image';
import SubsidizedImage from '/public/images/programs/subsidized-surgery.png'

const SubsidizedSurgeries = (props) => {

    return (
        <section className="funfact-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <h2>Programs</h2>
                            <h3>Subsidized <span>Surgeries</span></h3>
                            <p>Many people lose their sight due to treatable conditions, simply because they cannot afford surgery. We work closely with a network of trusted hospitals to make quality eye surgeries accessible at reduced or no cost for those in financial need. Our focus is on ensuring that affordability is never a barrier to restored vision and dignity.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="image-corner">
                            <Image src={SubsidizedImage} alt="" />
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

export default SubsidizedSurgeries;