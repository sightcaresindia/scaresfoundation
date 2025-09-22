import React from 'react';
import Shape from '/public/images/funfuck-shape.svg';
import Image from 'next/image';
import InternshipImage from '/public/images/internship/internship.png'

const InternshipPrograms = (props) => {

    return (
        <section className="funfact-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <h2>Get Involved</h2>
                            <h3>Internship <span>Programs</span></h3>
                            <p>Are you looking to make a difference? Our structured internship programs offer hands-on experience in program coordination, outreach, and impact documentation. Interns at Sight Cares India Foundation gain valuable insights into nonprofit work while contributing directly to our mission.</p>
                        </div>
                        
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="image-corner">
                            <Image src={InternshipImage} alt="" />
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

export default InternshipPrograms;