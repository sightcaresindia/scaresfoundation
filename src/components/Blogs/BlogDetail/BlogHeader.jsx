import PageBanner from '@/components/PageBanner/PageBanner';

export default function BlogHeader({ pageTitle }) {
    return <PageBanner title={pageTitle || 'Blogs'} eyebrow="Stories & insights" description="Stories and insights from our community. Discover the people, experiences and ideas behind our work to make care and support more accessible." />;
}
