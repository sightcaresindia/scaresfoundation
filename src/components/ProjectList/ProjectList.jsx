'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import fallbackImage from '/public/images/causes/camp1.jpg';
import styles from './ProjectList.module.scss';

const formatAmount = (value) => new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
}).format(value);

const getAmount = (value) => {
    if (value === null || value === undefined || value === '') return null;
    const amount = Number(value);
    return Number.isFinite(amount) && amount >= 0 ? amount : null;
};

export default function ProjectList({ limit = 3, paginated = false, showTitle = true, appearance = 'default', showFunding = false }) {
    const [page, setPage] = useState(1);
    const [projects, setProjects] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [retry, setRetry] = useState(0);

    useEffect(() => {
        const controller = new AbortController();

        const fetchProjects = async () => {
            setLoading(true);
            setError('');
            try {
                const baseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL || '').replace(/\/$/, '');
                const response = await fetch(
                    `${baseUrl}/all-projects?page=${page}&limit=${limit}`,
                    { signal: controller.signal }
                );
                if (!response.ok) throw new Error('Unable to load campaigns.');
                const result = await response.json();
                if (result.status !== 'success' || !Array.isArray(result.data)) {
                    throw new Error('Invalid campaigns response.');
                }
                if (!controller.signal.aborted) {
                    const count = Math.max(0, Number(result.total) || 0);
                    const lastPage = Math.max(1, Math.ceil(count / limit));
                    if (page > lastPage) {
                        setPage(lastPage);
                        return;
                    }
                    setProjects(result.data);
                    setTotal(count);
                }
            } catch (err) {
                if (!controller.signal.aborted) setError('Unable to load campaigns. Please try again.');
            } finally {
                if (!controller.signal.aborted) setLoading(false);
            }
        };

        fetchProjects();
        return () => controller.abort();
    }, [page, limit, retry]);

    const totalPages = Math.ceil(total / limit);
    const firstPage = Math.max(1, Math.min(page - 2, totalPages - 4));
    const pageNumbers = Array.from(
        { length: Math.min(5, totalPages) },
        (_, index) => firstPage + index
    );

    const changePage = (nextPage) => {
        if (nextPage === page) return;
        setLoading(true);
        setPage(nextPage);
    };

    return (
        <section className={appearance === 'campaigns' && paginated ? styles.campaignList : "section-padding service-section-s5 pt-5"} aria-label="Campaigns">
            <div className="container">
                {showTitle && (
                    <div className="section-title text-center mb-5">
                        <h2>Our <span>Campaigns</span></h2>
                    </div>
                )}
                {appearance === 'campaigns' && paginated && !loading && !error && total > 0 && (
                    <div className={styles.listHeading}>
                        <h3>Find a campaign to support</h3>
                        <span>{total} {total === 1 ? 'campaign' : 'campaigns'} · Showing {(page - 1) * limit + 1}–{Math.min(page * limit, total)}</span>
                    </div>
                )}
                <div aria-live="polite" aria-busy={loading}>
                    {loading ? (
                        <p className="text-center" role="status">Loading campaigns...</p>
                    ) : error ? (
                        <div className="text-center" role="alert">
                            <p>{error}</p>
                            <button type="button" className="btn btn-primary" onClick={() => setRetry(value => value + 1)}>Try again</button>
                        </div>
                    ) : projects.length === 0 ? (
                        <p className="text-center">No campaigns available at the moment.</p>
                    ) : (
                        <div className="row">
                            {projects.map(project => {
                                const goal = getAmount(project.target_amount);
                                const raised = getAmount(project.raised_amount);
                                const progress = goal > 0 && raised !== null
                                    ? Math.min(100, Math.round((raised / goal) * 100))
                                    : null;
                                const title = project.heading || project.project_name;
                                const description = (project.short_description || project.brief || '').replace(/<[^>]*>/g, ' ').trim();
                                const image = project.thumbnail_image
                                    ? `${(process.env.NEXT_PUBLIC_IMAGE_URL || '').trim().replace(/\/$/, '')}/${project.thumbnail_image.replace(/^\//, '')}`
                                    : fallbackImage.src;

                                return (
                                    <div key={project.id} className="col-lg-4 col-md-6 col-12 mb-4">
                                        <div className={`causes-card ${styles.card} ${appearance === 'campaigns' ? styles.campaignCard : ''}`}>
                                            <div className="image">
                                                <Link href={`/campaign/${project.slug}`}>
                                                    <img src={image} alt={project.project_name || title} onError={event => {
                                                        event.currentTarget.onerror = null;
                                                        if (!event.currentTarget.src.endsWith(fallbackImage.src)) event.currentTarget.src = fallbackImage.src;
                                                    }} />
                                                </Link>
                                            </div>
                                            <div className="text">
                                                <h2><Link href={`/campaign/${project.slug}`}>{title}</Link></h2>
                                                <p>{description}</p>
                                            </div>
                                            {showFunding && (
                                                <div className="progress-wrap">
                                                    {progress !== null && (
                                                        <div className="progress-item">
                                                            <div className="progress" role="progressbar" aria-label={`Funding progress for ${title}`} aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
                                                                <div className="bar" style={{ width: `${progress}%` }}>
                                                                    <span className="cssProgress-label">{progress}%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                    <ul>
                                                        <li><span className="title">Goal:</span><span>{goal !== null ? formatAmount(goal) : 'Unavailable'}</span></li>
                                                        <li><span className="title">Raised:</span><span>{raised !== null ? formatAmount(raised) : 'Unavailable'}</span></li>
                                                    </ul>
                                                </div>
                                            )}
                                            {appearance === 'campaigns' && (
                                                <Link href={`/campaign/${project.slug}`} className={styles.supportLink} aria-label={`Support ${title}`}>Support this campaign <span aria-hidden="true">↗</span></Link>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
                {paginated && !error && totalPages > 1 && (
                    <nav className="mt-4" aria-label="Campaign pagination">
                        <p className="text-center">Page {page} of {totalPages}</p>
                        <ul className="pagination justify-content-center flex-wrap">
                            <li className={`page-item ${page === 1 || loading ? 'disabled' : ''}`}>
                                <button className="page-link" type="button" disabled={page === 1 || loading} onClick={() => changePage(page - 1)}>Previous</button>
                            </li>
                            {pageNumbers.map(number => (
                                <li key={number} className={`page-item ${page === number ? 'active' : ''}`}>
                                    <button className="page-link" type="button" aria-label={`Page ${number}`} aria-current={page === number ? 'page' : undefined} disabled={loading} onClick={() => changePage(number)}>{number}</button>
                                </li>
                            ))}
                            <li className={`page-item ${page === totalPages || loading ? 'disabled' : ''}`}>
                                <button className="page-link" type="button" disabled={page === totalPages || loading} onClick={() => changePage(page + 1)}>Next</button>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </section>
    );
}
