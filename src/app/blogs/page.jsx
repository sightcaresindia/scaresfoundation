import React, { Fragment } from 'react';
import Blogs from '@/components/Blogs';

export const metadata = {
  title: 'Blogs | Sight Cares India Foundation',
  description: 'Sight Cares India Foundation is a non-profit organization committed to transforming lives by restoring vision',
};

const Page = () => {
    return (
        <Fragment>
            <Blogs />
        </Fragment>
    )
}

export default Page;