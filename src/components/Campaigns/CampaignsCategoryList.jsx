'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Cimg1 from '/public/images/causes/camp1.jpg';

const CampaignsCategoryList = ({ hclass }) => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/project-category`);
            const data = await res.json();
            setCampaigns(data);
            } catch (error) {
            console.error('Error fetching Campaigns:', error);
            }
        };

        fetchCampaigns();
    }, []);
    
    return(
        <section className={hclass}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col col-lg-10 col-md-10 col-sm-12">
                        <p>At Sight Cares India Foundation, our campaigns are more than just initiatives &mdash; they are lifelines for those who live in darkness, both metaphorically and literally. Each campaign is tailored to tackle specific challenges faced by blind and visually impaired individuals, especially those from underprivileged backgrounds who have little to no access to proper eye care.</p>
                        <p>We believe that <strong>vision is not a privilege but a right</strong> &mdash; and our work is dedicated to making this a reality, one person, one treatment, and one campaign at a time.</p>
                    </div>
                    <div className="col col-lg-10 col-md-10 col-sm-12" >
                       <div className='row'>
                            {campaigns.map((campaign) => (
                                <div key={campaign.id} className='col-md-4'>
                                    <div className="causes-card">
                                        <div className="image">
                                            <Link href={`/campaigns/${campaign.slug}`}><img src={Cimg1.src} alt={campaign.name} /></Link>
                                        </div>
                                        <div className="text">
                                            <h2><Link href={`/campaigns/${campaign.slug}`}>{campaign.name}</Link></h2>
                                            <p>{campaign.brief}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CampaignsCategoryList;