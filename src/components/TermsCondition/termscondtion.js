'use client'
import React, { useState } from 'react';

import Shape6 from '/public/images/about/shape7.svg';
import Shape8 from '/public/images/about/shape8.svg';
import Image from 'next/image';

const TermsCondition = (props) => {

    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    }

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    
                    <div className="col-lg-10 col-12">
                        <h4>Sight Cares India Foundation</h4>
                        <p>By participating in any activity involving interviews, testimonials, photographs, videos, audio recordings, or related media facilitated by Sight Cares India Foundation, individuals provide their informed consent for the following:</p>
                        <ul>
                            <li><strong>Permission for Use:</strong>
                            <p>The individual authorizes the Foundation to use, reproduce, and distribute any content featuring their image, voice, name, or statements. This content may be published across various mediums &mdash; including print, digital, and broadcast &mdash; such as the Foundation&rsquo;s website, social media channels, newsletters, reports, brochures, presentations, press releases, or fundraising materials.</p>
                            </li>
                            <li><strong>Editorial &amp; Public Sharing:</strong>
                            <p>The participant acknowledges and accepts that the shared content may be edited for clarity or format and may be made publicly available to support the organization&rsquo;s awareness, outreach, or promotional efforts.</p>
                            </li>
                            <li><strong>No Monetary Compensation:</strong>
                            <p>Sight Cares India Foundation or its employees will not provide any financial remuneration or benefits for the creation, use, or publication of the content.</p>
                            </li>
                            <li><strong>Voluntary Consent:</strong>
                            <p>The consent is granted willingly, without any form of pressure or obligation. The participant (or legal guardian, where applicable) affirms that they understand the nature and purpose of the content usage agreement.</p>
                            </li>
                            <li><strong>Respect &amp; Sensitivity:</strong>
                            <p>The Foundation commits to handling all content with care and dignity, particularly when it involves beneficiaries who are blind or visually impaired. Sight Cares India Foundation will ensure that the content is used respectfully and aligns with the Foundation&rsquo;s values.</p>
                            </li>
                            <li><strong>Irrevocability &amp; Withdrawal Conditions:</strong>
                            <p>Consent granted under this agreement is considered final and binding. However, individuals may request withdrawal of consent in writing, providing a valid reason. Such requests, if accepted, will apply only to future use of the content. Any material already published or shared before the withdrawal request cannot be removed or retracted.</p>
                            </li>
                            <li><strong>Implied Agreement:</strong>
                            <p>By participating in any content-related activity, the individual is deemed to have agreed to these terms unless a prior written objection has been submitted and acknowledged by the Foundation.</p>
                            </li>
                        </ul>
                        <p>For questions or requests regarding content usage or withdrawal of consent, please contact us at <a href="mailto:support@logistika.com">support@logistika.com</a> or call <a href="tel:+880%20(123) 456 88">+880 (123) 456 88</a>.</p>
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

export default TermsCondition;



