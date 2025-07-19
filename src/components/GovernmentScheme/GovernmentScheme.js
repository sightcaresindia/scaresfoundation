'use client'
import React, { useState } from 'react';

import Shape6 from '/public/images/about/shape7.svg';
import Shape8 from '/public/images/about/shape8.svg';
import Image from 'next/image';

const AboutS2 = (props) => {

    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    }

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    
                    <div className="col-lg-10 col-12">
                        <h4><strong>Ayushman Bharat &ndash; </strong><a href="https://nha.gov.in/PM-JAY"><strong>Pradhan Mantri Jan Arogya Yojana (PM-JAY)</strong></a></h4>
                        <p>Provides cashless secondary and tertiary healthcare coverage up to ₹5 lakh per family per year, including cataract surgeries and related treatments. Accessible at empanelled government and private hospitals nationwide. It covers pre-hospitalisation (up to 3 days), hospitalisation, medicines, diagnostics, and post-hospitalisation (up to 15 days).</p>
                        <h4><strong>Blindness Control - </strong><a href="https://npcbvi.mohfw.gov.in/Home"><strong>National Programme for Control of Blindness &amp; Visual Impairment (NPCBVI)</strong></a></h4>
                        <p>Offers free cataract surgery, refractive error correction, glaucoma care, corneal transplants, low-vision aids, and paediatric eye screenings across India. <a href="https://sansad.in/getFile/annex/260/AU1375.pdf?source=pqars"><strong>Netra Jyoti Abhiyan</strong></a>, a recent initiative under this scheme, aims to clear surgical backlogs, including over 27 lakh cataract surgeries between 2022&ndash;25</p>
                        <h4><a href="https://www.india.gov.in/rashtriya-arogya-nidhi-scheme-ministry-health-and-family-welfare"><strong>Rashtriya Arogya Nidhi</strong></a><strong> (RAN)</strong></h4>
                        <p>Offers financial assistance (up to ₹15 lakh per case) for severe medical conditions, including complex eye surgeries (e.g., paediatric cataract, retinal detachment). Available to Ayushman Bharat or state-health card holders treated in government hospitals</p>
                        <h4><a href="https://janaushadhi.gov.in/"><strong>Pradhan Mantri Bhartiya Janaushadhi Pariyojana</strong></a><strong> (PMBJP)</strong></h4>
                        <p>Supplies affordable generic medicines through Jan Aushadhi Kendras, reducing out-of-pocket expenses for eye drops, antibiotics, and other prescribed treatments</p>
                        <h4><strong>Health programmes/schemes offered by States</strong></h4>
                        <p><strong>Delhi: </strong><a href="https://www.india.gov.in/website-national-programme-control-blindness-visual-impairment">National Programme for Control of Blindness and Visual Impairment</a> (NPCBVI) - This national program, implemented in Delhi, provides free or subsidised cataract surgeries and other eye care services.&nbsp;<a href="https://dgehs.delhi.gov.in/dghs/delhi-arogya-kosh#:~:text=3%20lakh%20per%20annum%20and,for%20children%20below%205%20years)%2C">Delhi Arogya Kosh</a> (DAK) offers financial assistance for the treatment of various diseases, including eye ailments, to eligible residents of Delhi.&nbsp;</p>
                        <p><strong>Haryana: </strong>The Haryana government offers free cataract surgery at all 26 government hospitals and 15 empanelled private hospitals. Includes teleconsultation services under schemes like <a href="https://nha.gov.in/PM-JAY#:~:text=Ayushman%20Bharat%20PM%2DJAY%20is,the%20bottom%2040%25%20of%20the">AB-PMJAY</a></p>
                        <p><strong>Bihar: </strong>The <a href="https://npcbvi.mohfw.gov.in/Home"><strong>NPCBVI</strong></a><strong> and </strong><a href="https://www.jagran.com/jharkhand/ranchi-national-eye-jyoti-abhiyan-cataract-patient-test-start-from-today-under-central-government-scheme-rahstriya-netra-jyoti-abhiyan-22808863.html"><strong>National Eye-Jyoti Abhiyan</strong></a> are active in villages and towns, focusing on cataract screening and surgery.</p>
                        <p><strong>Punjab: </strong><a href="https://www.youtube.com/shorts/APiJgf6PtYI"><strong>Saade Buzurg Sadda Maan Scheme</strong></a> - senior citizens benefit from free eye exams, glasses, and cataract surgery via health camps.<strong> The Mukhyamantri Punjab </strong><a href="https://timesofindia.indiatimes.com/city/ludhiana/mukh-mantri-punjab-motia-mukt-abhiyan-to-be-launched-on-november-26-ludhiana-civil-surgeon/articleshow/87835774.cms"><strong>Motia Mukt Abhiyan</strong></a> offers cataract screening and surgeries in government facilities. To date, over 7,700 individuals have been screened, and 246 surgeries have been conducted in Mohali.</p>
                        <p><strong>Uttar Pradesh: </strong><a href="https://npcbvi.mohfw.gov.in/Home"><strong>NPCBVI</strong></a> implementation through door-to-door cataract screening and surgeries. Broader poverty alleviation schemes, such as the <strong>Zero Poverty Campaign</strong>, facilitate access to Ayushman Bharat health coverage, including eye care.</p>
                        <p><strong>Jharkhand: </strong><a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=1944598"><strong>The National Eye-Jyoti Abhiyan</strong></a> offers door-to-door cataract detection across districts, providing referrals for surgery and follow-up. <a href="https://abdm.gov.in/"><strong>Ayushman Bharat</strong></a> - Jharkhand ranks 2nd nationally in number of eye surgeries covered&mdash;over 74,660 in one year.</p>
                        <p><strong>West Bengal: Chokher Alo </strong>aims to perform 20 lakh free cataract surgeries and distribute over 8.25 lakh free spectacles across a five-year period<strong>. </strong>Includes free screening camps, pediatric vision checks in Anganwadis and schools, and priority for economically weak and elderly populations.</p>
                        <p><strong>Maharashtra: Mahatma Jyotiba Phule Jan Arogya Yojana </strong>provides health coverage up to ₹1.5 lakh per family annually<strong>. </strong>It fully covers cataract surgery, including pre-and post-operative care in empanelled hospitals.</p>
                        <p><strong>Gujarat: Mukhyamantri Amrutam Yojana </strong>offers up to ₹5 lakh per family each year for medical and surgical procedures, including eye surgeries, in government and empanelled facilities.</p>
                        <p><strong>Andhra Pradesh: YSR Kranti Velugu </strong>is a state-wide scheme offering comprehensive eye care, including screenings, spectacles, and cataract surgeries, across multiple phases of implementation.</p>
                        <p><strong>Telangana: Kanti Velugu </strong>provides free eye check-ups, spectacles, and treatment (including cataracts, glaucoma, diabetic retinopathy, and general eye conditions) to all residents through community and referral services.</p>
                        <p><strong>Kerala: Karunya Arogya Suraksha Padhathi</strong> offers health insurance that includes up to ₹5 lakh per family annually for secondary and tertiary care, which can include major eye surgeries.</p>
                        <h4><strong>How to Access Government Eye Health Schemes</strong></h4>
                        <p>Navigating health schemes can be confusing &mdash; but you are not alone. At <strong>Sight Cares India Foundation</strong>, we guide every patient through the process of accessing free or subsidised eye care support provided by the government, charitable hospitals, and public health initiatives.</p>
                        <p>Here is how you can make the most of these programs:</p>
                        <h4><strong>National Eye-Jyoti Abhiyan / NPCBVI (National Programme for Control of Blindness &amp; Visual Impairment)</strong></h4>
                        <ul>
                        <li>Visit your nearest Primary Health Centre (PHC), District Hospital, or Community Health Centre to inquire about scheduled eye screenings.</li>
                        <li>Attend local eye screening camps, often organised in collaboration with the district health authorities or NGOs.</li>
                        </ul>
                        <h4><strong>Ayushman Bharat &ndash; PM-JAY (Pradhan Mantri Jan Arogya Yojana)</strong></h4>
                        <ul>
                        <li>If your family is enrolled under PM-JAY, you can avail cashless treatment for secondary and tertiary eye care, including cataract and glaucoma surgeries.</li>
                        <li>Carry your Ayushman Card (also known as the Golden Card) to any empanelled hospital for verification of eligibility and admission.</li>
                        </ul>
                        <h4><strong>State-Specific Eye Health &amp; Senior Citizen Schemes</strong></h4>
                        <p>Each state has its initiatives to support the elderly and vulnerable groups:</p>
                        <ul>
                        <li>For example, Punjab&rsquo;s &lsquo;Motia Mukt Abhiyan&rsquo; and West Bengal&rsquo;s &lsquo;Chokher Alo&rsquo; offer free cataract screenings and surgeries.</li>
                        <li>Bihar, Jharkhand, and Uttar Pradesh conduct screening drives under NPCBVI, often in collaboration with local eye hospitals.</li>
                        <li>Visit local health camps or contact the Block Health Officer (BHO) to inquire about the schedule and required documents.</li>
                        </ul>
                        <h4><strong>Charitable Eye Hospitals &amp; NGO Services</strong></h4>
                        <p>Several charitable eye hospitals and nonprofit organisations across India offer free or low-cost eye treatments, including cataract surgeries, spectacles, and medications. Hospitals conduct regular outreach camps, serving thousands of underprivileged patients each year. Many of these institutions operate mobile eye units and provide quality care regardless of a patient&rsquo;s ability to pay. Patients can directly contact these hospitals or attend their local camps for screenings and further treatment.</p>
                        <h4><strong>Where to Begin: Practical Steps for Patients</strong></h4>
                        <p>Here is a step-by-step guide to starting your journey toward treatment:</p>
                        <p><strong>Step 1: Visit a Government Health Facility</strong></p>
                        <p>Approach your local PHC, district hospital, or any government health department-organised eye camp for an initial check-up or to know about the schedule of any future camp.</p>
                        <p><strong>Step 2: Carry Required Documents</strong></p>
                        <p>Please carry your Aadhaar card, ration card, or senior citizen card to verify your eligibility for government support.</p>
                        <p><strong>Step 3: Attend Screening Camps</strong></p>
                        <p>Join an NPCBVI or NGO-organized Eye Health Camp &mdash; often the first step for diagnosis and referrals to a hospital.</p>
                        <p><strong>Step 4: Check for Medicines</strong></p>
                        <p>For ongoing care, visit Pradhan Mantri Janaushadhi Kendras near you for affordable, quality eye drops and medicines prescribed by your doctor.</p>
                        <p><strong>Step 5: Get Help from Our Team</strong></p>
                        <p>If you are unsure about any step &mdash; from document preparation to surgery logistics &mdash; please don't hesitate to contact us. We help you navigate the system from start to finish.</p>
                        <p>These government and charitable programs create a vital safety net, ensuring that quality eye care is no longer out of reach for low-income and vulnerable communities. By easing the financial burden of treatment, they make it possible to prevent avoidable blindness through timely interventions. <strong>Sight Cares India Foundation</strong> plays a crucial role in this ecosystem by guiding individuals through the process&mdash;raising awareness, assisting with documentation, coordinating hospital care, and helping with subsidised or free eye surgeries and treatment at the medical facilities associated with us. We aim to ensure smooth access to these life-changing services.</p>
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <Image src={Shape6} alt="" />
            </div>
            <div className="shape-3">
                <Image src={Shape8} alt="" />
            </div>
        </section >
    )
}

export default AboutS2;



