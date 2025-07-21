'use client'
import React, { useState } from 'react';

import Shape6 from '/public/images/about/shape7.svg';
import Shape8 from '/public/images/about/shape8.svg';
import Image from 'next/image';

const DonationTermsCondition = (props) => {

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
                        <p>Thank you for choosing to support Sight Cares India Foundation. Your donation is essential for providing crucial eye care, treatment access, and rehabilitation support to individuals with visual impairments. Before contributing, we request you go through the terms outlined below kindly:</p>
                        <ul>
                            <li><strong>Allocation of Donations</strong>
                            <p>We strive to allocate your donation toward the campaign or initiative you have selected. However, if a particular project has already been fully funded or completed, the Foundation reserves the right to allocate the donation to other ongoing or upcoming programs that align with our broader mission. This flexibility allows us to utilize resources effectively and respond to areas of greater need.</p>
                            </li>
                            <li><strong>Non-Refund Policy</strong>
                            <p>All donations made to Sight Cares India Foundation are considered final. As a policy, we do not process refunds under any circumstances.</p>
                            </li>
                            <li><strong>Tax Benefits</strong>
                            <p>If donations qualify under&nbsp;&nbsp;<strong>Section 80G of the Income Tax Act, 1961</strong>, these are eligible for tax exemption. Donors will receive an official receipt, along with <strong>Form 10BE</strong> (where applicable), for their records and tax filings.</p>
                            </li>
                            <li><strong>Donor Information</strong>
                            <p>To ensure accurate documentation and timely issuance of tax receipts, donors are requested to provide correct personal details, including their <strong>Permanent Account Number (PAN)</strong>.</p>
                            </li>
                            <li><strong>Privacy & Confidentiality</strong>
                            <p>We value and protect your privacy. All donor information is treated as confidential and used solely for internal documentation, compliance, and communication purposes. We do not share donor data with third parties without consent.</p>
                            </li>
                            <li><strong>Commitment to Transparency</strong>
                            <p>Sight Cares India Foundation is committed to financial accountability. Regular updates on our programs, fund utilization, and impact stories are made available through our official website, reports, and other communication channels.</p>
                            </li>
                        </ul>
                         <div className="mt-4">
                            <h4>Contact Us</h4>
                            <p>If you have any queries or would like to learn more about our donation process, please feel free to contact us at email <a href="mailto:support@logistika.com">support@logistika.com</a> or phone number  <a href="tel:+880%20(123) 456 88">+880 (123) 456 88</a>.</p>
                            <p>We also welcome visits to our centre. Kindly book an appointment in advance to ensure we maintain a comfortable and undisturbed environment for our visually impaired residents.</p>
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
        </section >
    )
}

export default DonationTermsCondition;



