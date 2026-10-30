import Campaign from '@/components/Campaign';
import { notFound } from 'next/navigation';

export default async function Page({ params }) {
    const { slug } = await params;
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL?.trim().replace(/\/$/, '');
    if (!baseUrl) throw new Error('Campaign API URL is not configured.');
    const projectUrl = baseUrl + '/project-details/' + encodeURIComponent(slug);
    const options = { cache: 'no-store', headers: { Accept: 'application/json' } };
    const [response, faqResponse] = await Promise.all([
        fetch(projectUrl, options),
        fetch(projectUrl + '/faqs', options),
    ]);
    if (response.status === 404) notFound();
    if (!response.ok) throw new Error('Unable to load campaign.');
    if (!faqResponse.ok) throw new Error('Unable to load campaign FAQs.');
    const project = await response.json();
    project.faqs = await faqResponse.json();
    if (!Array.isArray(project.faqs)) throw new Error('Invalid campaign FAQs response.');
    return <Campaign project={project} />;
}
