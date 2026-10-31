import Campaign from '@/components/Campaign';
import { notFound } from 'next/navigation';

export default async function Page({ params }) {
    const { slug } = await params;
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL?.trim().replace(/\/$/, '');
    if (!baseUrl) throw new Error('Campaign API URL is not configured.');
    // The project endpoint already includes FAQs, so one request is enough.
    const response = await fetch(baseUrl + '/project-details/' + encodeURIComponent(slug), {
        next: { revalidate: 60 },
        headers: { Accept: 'application/json' },
        signal: AbortSignal.timeout(10000),
    });
    if (response.status === 404) notFound();
    if (!response.ok) throw new Error('Unable to load campaign (HTTP ' + response.status + ').');
    const body = await response.text();
    let project;
    try {
        project = JSON.parse(body);
    } catch {
        throw new Error('Campaign API returned invalid JSON: ' + body.slice(0, 200));
    }
    if (!Array.isArray(project.faqs)) project.faqs = [];
    return <Campaign project={project} />;
}
