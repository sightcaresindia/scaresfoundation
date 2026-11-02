import React from 'react';

import shapeArrow from '/public/images/process-arrow-shape.svg'
import shape1 from '/public/images/process/shape1.svg'
import shape2 from '/public/images/process/shape2.svg'
import shape3 from '/public/images/process/shape3.svg'
import shape4 from '/public/images/process/shape4.svg'
import Link from 'next/link';
import Image from 'next/image';

import { useSearchParams } from 'next/navigation';

const ThankYou = () => {
    const searchParams = useSearchParams();
    const donationID = searchParams.get('donation-id');

    return (
        <section className="process-section">
            <div className="container">
                <div class="section-title text-center">
                    <h2>Thank you for your kind contribution</h2>
                </div>
                <div className="wrape">
                    <div className='row justify-content-center'>
                        <div className="col-12 col-lg-9 text-center">
                            <h4 style={{ fontSize: '18px', fontWeight: '500', lineHeight: '1.4' }}>Your generous contribution can bring hope, relief and access to essential medical care to someone in need. Every donation, big or small, helps make critical treatments, surgeries and other medical support possible for individuals and families who cannot afford them.Together, we can help ease their burden and give them a chance to move forward with dignity and hope.</h4>
                            <h4 className="mb-3" style={{ fontStyle: 'italic', color: '#FBAD17', fontWeight: '700' }}>Thank you for making a difference.</h4>
                            <p className='mt-4 fw-bold'>A confirmation email has been sent to your inbox. Stay connected with us to see how your support is changing lives. For any queries, please reach out to us at <a href="mailto:info@sightcaresfoundation.org">info@sightcaresfoundation.org</a></p>
                            <p className="pt-5 text-center">
                                <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/donation-receipt/${donationID}`} className="donation_button" download="">Download Receipt </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <Image src={shape1} alt="" />
            </div>
            <div className="shape-2">
                <Image src={shape2} alt="" />
            </div>
            <div className="shape-3">
                <Image src={shape3} alt="" />
            </div>
            <div className="shape-4">
                <Image src={shape4} alt="" />
            </div>
        </section>
    );
};

export default ThankYou;
