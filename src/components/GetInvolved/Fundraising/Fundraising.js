import React from 'react';
import Shape from '/public/images/funfuck-shape.svg';
import Image from 'next/image';
import FundraisingImage from '/public/images/fundraising/fundraising.png';

const Fundraising = (props) => {

    return (
        <section className="funfact-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <h2>Get Involved</h2>
                            <h3>Fundraising & <span>Campaigns</span></h3>
                            <p>Your contribution plays a vital role in preventing blindness that can be treated or cured. You can support our work by contributing to ongoing campaigns or launching your own — whether it’s to sponsor an eye surgery, provide assistive devices, or fund a local eye camp. We welcome individuals, organisations, community groups to host creative fundraising events or digital drives.</p>
                        </div>
                        
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="image-corner">
                            <Image src={FundraisingImage} alt="" />
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

export default Fundraising;