import React from 'react';
import img1 from '/public/images/get-involved/volunteer-opportunities.png';
import img2 from '/public/images/get-involved/corporate-partner.png';
import img3 from '/public/images/get-involved/fundraising.png';
import img4 from '/public/images/get-involved/internship.png';
import Image from 'next/image';

const FeaturesSection = () => {
    return (
        <section className="features-section mb-5">
            <div className="container">
                <div className="wrapper">
                    <div className="row">
                        {/* Feature Card 1 */}
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="feature-card">
                                 <div className="icon">
                                    <Image src={img1} alt="Healthcare" />
                                </div>
                                <div className="content">
                                    <a href="#">
                                    <h3>Volunteer Opportunities</h3>
                                    </a>
                                </div>
                               
                            </div>
                        </div>

                        {/* Feature Card 2 */}
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="feature-card">
                                 <div className="icon">
                                     <Image src={img2} alt="Healthcare" />
                                </div>
                                <div className="content">
                                     <a href="#">
                                    <h3>Corporate Partnerships</h3>
                                    </a>
                                </div>
                               
                            </div>
                        </div>

                        {/* Feature Card 3 */}
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="feature-card">
                                <div className="icon">
                                     <Image src={img3} alt="Healthcare" />
                                </div>
                                <div className="content">
                                    
                                    <a href="#">
                                    <h3>Fundraising & Campaigns</h3>
                                    </a>
                                </div>
                                
                            </div>
                        </div>

                         {/* Feature Card 4 */}
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="feature-card">
                                <div className="icon">
                                     <Image src={img4} alt="Healthcare" />
                                </div>
                                <div className="content">
                                     <a href="#">
                                    <h3>Internship Programs</h3>
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
