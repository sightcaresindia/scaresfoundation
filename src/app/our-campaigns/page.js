import React, { Fragment } from 'react';
import CampaignsCategoryPage from '@/components/Campaigns/CampaignsCategoryPage';

export const metadata = {
    title: 'Eye Health & Vision-Restoring Campaigns | Sight Cares India Foundation',    
    description: 'Transform lives with Sight Cares: Eye camps, subsidised surgeries, advocacy & assistive devices for vision care.',
};

const Page = () => {
    return (
        <Fragment>
            <CampaignsCategoryPage />
        </Fragment>
    )
};
export default Page;
