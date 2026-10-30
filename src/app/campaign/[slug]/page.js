import Campaign from '@/components/Campaign';
import { notFound } from 'next/navigation';

export default async function Page({ params }) {
    const { slug } = await params;
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL?.trim().replace(/\/$/, '');
    if (!baseUrl) throw new Error('Campaign API URL is not configured.');
    const response = await fetch(baseUrl + '/project-details/' + encodeURIComponent(slug), { cache: 'no-store', headers: { Accept: 'application/json' } });
    if (response.status === 404) notFound();
    if (!response.ok) throw new Error('Unable to load campaign.');
    const project = await response.json();
    return <Campaign project={project} />;
}
