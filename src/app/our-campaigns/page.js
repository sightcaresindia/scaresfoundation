import React, { Fragment } from 'react';
import CampaignsCategoryPage from '@/components/Campaigns/CampaignsCategoryPage';

export const metadata = {
    title: 'Sight Cares Campaigns | Free Eye Camps, Awareness & Vision Programs',    
    description: 'Transform lives with Sight Cares: Eye camps, screenings, awareness campaigns, and surgeries for underserved communities.',
};

const Page = () => {
    return (
        <Fragment>
            <CampaignsCategoryPage />
        </Fragment>
    )
};
export default Page;
