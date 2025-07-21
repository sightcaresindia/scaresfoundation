'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import DonationForm from './DonationForm';

const CampaignDetails = ({ hclass}) => {
    const [campaign, setCampaign] = useState([]);
    const params = useParams();
    const slug = params.slug;
    
    useEffect(() => {
        const fetchCampaign = async () => {
            try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/project-details/${slug}`);
            const data = await res.json();
            setCampaign(data);
            } catch (error) {
            console.error('Error fetching Campaigns:', error);
            }
        };

        fetchCampaign();
    }, []);
    
    const preferred_slot = campaign.preferred_slot ? campaign.preferred_slot : '';
    
    return (
       <section className={hclass}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8'>
                        <h2>{campaign.project_name}</h2>
                        <DonationForm preferred_slot={preferred_slot} campaign_id={campaign.id}  />
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </div>
       </section>
    );
}

export default CampaignDetails;