'use client'
import React, { useState } from 'react';

import Shape6 from '/public/images/about/shape7.svg';
import Shape8 from '/public/images/about/shape8.svg';
import Image from 'next/image';
import AyushmanImage from '/public/images/government/pmjy.png';
import BlindnessImage from '/public/images/government/npcvi.png';
import RashtriyaImage from '/public/images/government/ran.png';
import PradhanImage from '/public/images/government/pmbjp.png';
const GovernmentScheme = (props) => {

    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    }

    return (
        <section className={"" + props.hclass}>
            <div class="container">
                <div className='row'>
                    <div className='col-md-6'>
                        <div class="program">
                            <div class="icon">
                                <Image src={AyushmanImage} alt="" />
                            </div>
                            <div class="content">
                                <h3><strong>Ayushman Bharat &ndash; </strong><a target="_blank" href="https://nha.gov.in/PM-JAY"><strong>Pradhan Mantri Jan Arogya Yojana (PM-JAY)</strong></a></h3>
                                <p>Provides cashless secondary and tertiary healthcare coverage up to ₹5 lakh per family per year, including cataract surgeries and related treatments. Accessible at empanelled government and private hospitals nationwide. It covers pre-hospitalisation (up to 3 days), hospitalisation, medicines, diagnostics, and post-hospitalisation (up to 15 days).</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div class="program">
                            <div class="icon">
                                <Image src={BlindnessImage} alt="" />
                            </div>
                            <div class="content">
                                <h3><strong>Blindness Control - </strong><a href="https://npcbvi.mohfw.gov.in/Home" target="_blank"><strong>National Programme for Control of Blindness &amp; Visual Impairment (NPCBVI)</strong></a></h3>
                                <p>Offers free cataract surgery, refractive error correction, glaucoma care, corneal transplants, low-vision aids, and paediatric eye screenings across India. <a href="https://sansad.in/getFile/annex/260/AU1375.pdf?source=pqars" target="_blank"><strong>Netra Jyoti Abhiyan</strong></a>, a recent initiative under this scheme, aims to clear surgical backlogs, including over 27 lakh cataract surgeries between 2022&ndash;25</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div class="program">
                            <div class="icon">
                                <Image src={RashtriyaImage} alt="" />
                            </div>
                            <div class="content">
                                <h3><a href="https://www.india.gov.in/rashtriya-arogya-nidhi-scheme-ministry-health-and-family-welfare" target="_blank"><strong>Rashtriya Arogya Nidhi</strong></a><strong> (RAN)</strong></h3>
                               <p>Offers financial assistance (up to ₹15 lakh per case) for severe medical conditions, including complex eye surgeries (e.g., paediatric cataract, retinal detachment). Available to Ayushman Bharat or state-health card holders treated in government hospitals</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div class="program">
                            <div class="icon">
                                <Image src={PradhanImage} alt="" />
                            </div>
                            <div class="content">
                                <h3><a href="https://janaushadhi.gov.in/" target="_blank"><strong>Pradhan Mantri Bhartiya Janaushadhi Pariyojana</strong></a><strong> (PMBJP)</strong></h3>
                                <p>Supplies affordable generic medicines through Jan Aushadhi Kendras, reducing out-of-pocket expenses for eye drops, antibiotics, and other prescribed treatments</p>
                            </div>
                        </div>
                    </div>
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

export default GovernmentScheme;



