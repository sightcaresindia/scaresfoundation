'use client'
import React, { useState } from 'react';

import Shape6 from '/public/images/about/shape7.svg';
import Shape8 from '/public/images/about/shape8.svg';
import Image from 'next/image';
import AyushmanImage from '/public/images/government/pmjy.png';
import BlindnessImage from '/public/images/government/npcvi.png';
import RashtriyaImage from '/public/images/government/ran.png';
import PradhanImage from '/public/images/government/pmbjp.png';
const AccessScheme = (props) => {

    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    }

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div class="section-title text-center">
                    <h2>How to Access Government Eye Health Schemes</h2>
                    </div>
                <p className="text-center intro">
                Navigating health schemes can be confusing — but you are not alone.
                At <strong>Sight Cares India Foundation</strong>, we guide every patient
                through the process of accessing free or subsidised eye care support
                provided by the government, charitable hospitals, and public health initiatives.
                </p>
                <p>Here is how you can make the most of these programs:</p>

                <div className="scheme-card">
                <h3>National Eye-Jyoti Abhiyan / NPCBVI (National Programme for Control of Blindness & Visual Impairment)</h3>
                <ul>
                    <li><i className="flaticon-check"></i>Visit your nearest Primary Health Centre (PHC), District Hospital, or Community Health Centre to inquire about scheduled eye screenings.</li>
                    <li><i className="flaticon-check"></i>Attend local eye screening camps, often organised in collaboration with the district health authorities or NGOs.</li>
                </ul>
                </div>

                <div className="scheme-card">
                <h3>Ayushman Bharat – PM-JAY</h3>
                <ul>
                    <li><i className="flaticon-check"></i>If your family is enrolled under PM-JAY, you can avail cashless treatment for secondary and tertiary eye care, including cataract and glaucoma surgeries.</li>
                    <li><i className="flaticon-check"></i>Carry your Ayushman Card (also known as the Golden Card) to any empanelled hospital for verification of eligibility and admission.</li>
                </ul>
                </div>

                <div className="scheme-card">
                <h3>State-Specific Eye Health & Senior Citizen Schemes</h3>
                <ul>
                    <li><i className="flaticon-check"></i>Punjab’s <strong>Motia Mukt Abhiyan</strong> and West Bengal’s <strong>Chokher Alo</strong> offer free cataract screenings and surgeries.</li>
                    <li><i className="flaticon-check"></i>Bihar, Jharkhand, and Uttar Pradesh conduct screening drives under NPCBVI, often in collaboration with local eye hospitals.</li>
                    <li><i className="flaticon-check"></i>Visit local health camps or contact the Block Health Officer (BHO) to inquire about the schedule and required documents.</li>
                </ul>
                </div>
            </div>
             <div className="shape-1">
                            <Image src={Shape6} alt="" />
                        </div>
                        <div className="shape-3">
                            <Image src={Shape8} alt="" />
                        </div>
     </section>
    )
}

export default AccessScheme;



