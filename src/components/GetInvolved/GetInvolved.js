import React from "react";
import Link from 'next/link'
import Services from "../../api/Services";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const GetInvolved = (props) => {

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 col-12 text-center">
                        <div className="section-title">
                            <h2>Sight Cares <span>India</span> Foundation</h2>
                            <p className="mt-4">Be a part of a movement that changes lives through the gift of sight. At Sight Cares India Foundation, we believe that collective efforts can create a lasting impact. Whether you're an individual, a doctor, a student, a professional, hospital or an organisation, there’s a meaningful way for you to contribute.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GetInvolved;




