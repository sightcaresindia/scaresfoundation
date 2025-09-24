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
                            <h4>Your generosity helps us empower blind people with education and opportunities.</h4>
                            <h4>A confirmation email has been sent to your inbox. Stay connected with us to see how your support is changing lives."</h4>
                            <p className='mt-4 fw-bold'>For any queries, please reach out to us at <a href="mailto:info@sightcaresfoundation.org">info@sightcaresfoundation.org</a></p>
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