import React, { Fragment } from "react";
import CampaignsByCategoryPage from "@/components/Campaigns/CampaignsByCategoryPage";
import { getCampaignCategory } from "@/utils/getCampaignCategory";

export async function generateMetadata({ params }) {
  const categoryData = await getCampaignCategory(params.slug);

  return {
    title: categoryData?.meta_title || "Sight Cares India Foundation | Restoring Sight with Free Eye Care Support",
    description: categoryData?.meta_description || "Sight Cares India Foundation - restoring vision for underserved communities in India. Get free eye screenings & support today.",
  };
}

const Page = async ({ params }) => {
  const categorySlug = params.slug;
  const categoryData = await getCampaignCategory(categorySlug);

  return (
    <Fragment>
      <CampaignsByCategoryPage categoryInfo={categoryData} />
    </Fragment>
  );
};

export default Page;