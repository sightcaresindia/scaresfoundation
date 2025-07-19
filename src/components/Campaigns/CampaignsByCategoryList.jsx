'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import Cimg1 from '/public/images/causes/camp1.jpg';

const CampaignsByCategoryList = ({ hclass, category }) => {
    const [campaigns, setCampaigns] = useState([]);
    const params = useParams();
    const categorySlug = params.slug;
    const categoryDescription = category.description || "";

    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/projects-by-category/${categorySlug}`);
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
            <div className='container'>
                <div className='row'>
                    <div className='col col-lg-12 col-md-12 col-sm-12'>
                        <div className='category-description mb-5 pb-3'>
                            <div dangerouslySetInnerHTML={{ __html: categoryDescription }}></div>
                        </div>
                    </div>
                    <div className="col col-lg-12 col-md-12 col-sm-12 mt-4" >
                       <div className='row'>
                            {campaigns.map((campaign) => (
                                <div key={campaign.id} className='col-md-3'>
                                    <div className="causes-card">
                                        <div className="image">
                                            <Link href={`/campaign/${campaign.slug}`}><img src={Cimg1.src} alt={campaign.project_name} /></Link>
                                        </div>
                                        <div className="text">
                                            <h2><Link href={`/campaign/${campaign.slug}`}>{campaign.project_name}</Link></h2>
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
    )
}

export default CampaignsByCategoryList;