import React from 'react';
import Link from 'next/link';

/* image */
import Img1 from '/public/images/about/about-1.jpg'
import Img2 from '/public/images/about/about-2.jpg'
import CEO from '/public/images/about/ceo.jpg'
import shape1 from '/public/images/about/shape1.svg'
import shape3 from '/public/images/about/shape3.svg'
import shape4 from '/public/images/about/shape4.svg'
import shape5 from '/public/images/about/shape5.svg'
import shape6 from '/public/images/about/shape6.svg'
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const about = (props) => {
    return (
        <section className={"" +props.hclass}>
            <div className="container">
                <div className="row">
                    <div className='col-md-6'>
                      <div className="funfact">
                         <div className="steps">
                            <h3>Step 1: Reach Out to Us</h3>
                          </div>
                            <p>If you or someone you know is facing an eye-related issue but cannot afford treatment, you can contact us through:</p>
                            <ul>
                                <li><i className="flaticon-check"></i>Our helpline number or email</li>
                                <li><i className="flaticon-check"></i>On-ground eye health camps (mobile or fixed locations)</li>
                                <li><i className="flaticon-check"></i>Community referrals or NGO partners</li>
                            </ul>
                            <p>Our team will note the basic details and guide you through the next steps.
                            </p>
                       </div>
                    </div>
                   <div className='col-md-6'>
                      <div className="funfact">
                        <div className="steps">
                            <h3>Step 2: Initial Screening & Diagnosis</h3>
                        </div>
                                <ul>
                                <li><i className="flaticon-check"></i>Visit one of our free eye screening camps or partner clinics.</li>
                                <li><i className="flaticon-check"></i>Qualified doctors or medical teams will examine the eyes, detect the issue, and recommend further treatment if needed.</li>
                                <li><i className="flaticon-check"></i>If the doctor recommends surgery (such as cataract or glaucoma), we will guide you through the next phase of care.</li>
                                </ul>
                       </div>
                   </div>
                   <div className='col-md-6'>
                        <div className="funfact">
                            <div className="steps">
                                <h3>Step 3: Eligibility Assessment</h3>
                            </div>
                                <p>To ensure support reaches the most deserving:</p>
                                <ul>
                                    <li><i className="flaticon-check"></i>We conduct a financial background check (ration card, income proof, Aadhaar, etc.).</li>
                                    <li><i className="flaticon-check"></i>Once eligible, you will be enrolled in the subsidised surgery program and matched with a partner hospital or clinic.</li>
                                </ul>
                        </div>
                   </div>
                     <div className='col-md-6'>
                        <div className="funfact">
                            <div className="steps">
                                <h3>Step 4: Pre-Surgery Support</h3>
                            </div>
                                <ul>
                                    <li><i className="flaticon-check"></i>We coordinate pre-operative evaluations, tests, and hospital admissions.</li>
                                    <li><i className="flaticon-check"></i>Our team assists with:</li>
                                    <li><i className="flaticon-check"></i>Transport coordination (if needed)</li>
                                    <li><i className="flaticon-check"></i>Explanation of the procedure</li>
                                    <li><i className="flaticon-check"></i>Consent and preparation checklists</li>
                                    <li><i className="flaticon-check"></i>For children, the elderly, or individuals with disabilities, we provide additional support.</li>
                                </ul>
                          </div>
                     </div>
                     <div className='col-md-6'>
                        <div className="funfact">
                            <div className="steps">
                                <h3>Step 5: Surgery & Hospital Care</h3>
                            </div>
                                <ul>
                                    <li><i className="flaticon-check"></i>The surgery is carried out at one of our partner government or private hospitals.</li>
                                    <li><i className="flaticon-check"></i>Depending on the case, the procedure may be entirely free or subsidised.</li>
                                    <li><i className="flaticon-check"></i>Our volunteers stay connected with the hospital staff for updates and support.</li>
                                </ul>
                        </div>
                     </div> 
                      <div className='col-md-6'>
                         <div className="funfact">
                                <div className="steps">
                                    <h3>Step 6: Post-Surgery Care & Recovery</h3>
                                </div>
                                <p>We ensure full recovery by offering:</p>
                                <ul>
                                    <li><i className="flaticon-check"></i>Follow-up check-ups at designated intervals</li>
                                    <li><i className="flaticon-check"></i>Free or low-cost medications, eye drops, and pain relief</li>
                                    <li><i className="flaticon-check"></i>Glasses or assistive devices (if prescribed)</li>
                                    <li><i className="flaticon-check"></i>Advice on eye protection and hygiene</li>
                                </ul>
                         </div>
                      </div>
                      <div className='col-md-12'>
                       <div className="funfact">
                        <div className="steps">
                            <h3>Step 7: Awareness & Long-Term Guidance</h3>
                        </div>
                            <p>Even after treatment, we continue to:</p>
                            <ul>
                                <li><i className="flaticon-check"></i>Educate the patient and family about eye health, nutrition, and care</li>
                                <li><i className="flaticon-check"></i>Offer guidance on early detection of future symptoms</li>
                                <li><i className="flaticon-check"></i>Connect with nearby healthcare resources for long-term support</li>
                            </ul>
                       </div>
                      </div>
                      <div className='col-md-6'>
                        <div className="funfact">
                            <div className="steps">
                                <h3>Additional Support (if required)</h3>
                            </div>
                                <ul>
                                    <li><i className="flaticon-check"></i>For school children: Referral to educational assistance</li>
                                    <li><i className="flaticon-check"></i>For working adults: Guidance on returning to work or support groups</li>
                                    <li><i className="flaticon-check"></i>For elderly patients: Emotional and physical caregiving help via our partners</li>
                                </ul>
                           </div>
                        </div>
                       <div className='col-md-6'>
                            <div className="funfact">
                                <div className="steps">
                                    <h3>Documents Typically Required</h3>
                                </div>
                                    <ul>
                                        <li><i className="flaticon-check"></i>Aadhaar card (or valid ID)</li>
                                        <li><i className="flaticon-check"></i>Ration card / BPL card/income proof</li>
                                        <li><i className="flaticon-check"></i>Doctor&rsquo;s referral (if already consulted)</li>
                                        <li><i className="flaticon-check"></i>Passport-size photo</li>
                                    </ul>
                            </div>
                       </div>
                </div>
            </div>
            <div className="shape-1">
                <Image src={shape1} alt="" />
            </div>
            <div className="shape-3">
                <Image src={shape3}alt="" />
            </div>
            <div className="shape-4">
                <Image src={shape4} alt="" />
            </div>
            <div className="shape-5">
                <Image src={shape5} alt="" />
            </div>
            <div className="shape-6">
                <Image src={shape6} alt="" />
            </div>
        </section>
    );
};

export default about;