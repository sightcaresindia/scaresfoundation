// Compatibility for consumers of the former banner component.
import PageBanner from '@/components/PageBanner/PageBanner';

export default function PageTitle({ pageTitle, pagesub, ...props }) {
    return <PageBanner title={pageTitle || pagesub} {...props} />;
}
