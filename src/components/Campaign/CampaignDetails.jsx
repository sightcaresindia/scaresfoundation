'use client';

import React, { useEffect, useRef, useState } from 'react';
import CampaignDonationForm from './CampaignDonationForm';
import styles from './CampaignDetails.module.scss';

const showCommunitySections = false;

const hasVisibleContent = value => {
    if (typeof value !== 'string') return false;
    const html = value.replace(/<!--[\s\S]*?-->/g, '')
        .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, '');
    if (/<(?:img|video|audio|iframe)\b[^>]*\bsrc\s*=\s*["']?[^\s"'>]/i.test(html)) return true;
    return html.replace(/<[^>]*>/g, '')
        .replace(/&(?:nbsp|ensp|emsp|thinsp|#0*160|#x0*a0|#0*32|#x0*20|#0*8203|#x0*200b);/gi, ' ')
        .replace(/[\s\u200B-\u200D\uFEFF]/g, '').length > 0;
};

const getVideoId = value => {
    if (typeof value !== 'string') return '';
    const input = value.trim();
    const validId = id => /^[A-Za-z0-9_-]{11}$/.test(id || '') ? id : '';
    if (!/^https?:\/\//i.test(input)) return validId(input.split(/[?&#]/)[0]);
    try {
        const url = new URL(input);
        const host = url.hostname.toLowerCase().replace(/^www\./, '');
        if (host === 'youtu.be') return validId(url.pathname.split('/')[1]);
        if (['youtube.com', 'm.youtube.com', 'youtube-nocookie.com'].includes(host)) {
            return validId(url.searchParams.get('v') || (/^\/(embed|shorts|live)\//.test(url.pathname) ? url.pathname.split('/')[2] : ''));
        }
    } catch {}
    return '';
};

const imageUrl = value => {
    if (!value) return '';
    if (/^https?:\/\//i.test(value)) return value;
    return (process.env.NEXT_PUBLIC_IMAGE_URL || '').trim().replace(/\/$/, '') + '/' + value.replace(/^\//, '');
};
const processSteps = [
    ['patient', 'Patient seeks care', 'The patient is brought to one of our medical partners or a hospital for an assessment.'],
    ['clipboard', 'Medical Partner submits Patient’s case', 'The medical partner shares the care plan. The team reviews the case and prepares the fundraising campaign.'],
    ['care', 'Contributors fund Patient’s care', 'Generous people like you help make treatment and essential medical support possible.'],
    ['phone', 'Get notified on your Contribution Impact', 'The medical partner and family share recovery updates, which are passed on to the contributors.'],
];

function Icon({ name, ...props }) {
    const shapes = {
        story: <><path d="M3 5h7l2 2 2-2h7v15h-7l-2 2-2-2H3z" /><path d="M12 7v15" /></>,
        document: <><path d="M6 3h8l4 4v14H6zM14 3v5h4M9 12h6M9 16h6" /></>,
        update: <><path d="M4 10a8 8 0 1 1 0 5M4 4v6h6M12 7v6l4 2" /></>,
        people: <><circle cx="9" cy="7" r="3" /><path d="M3 21v-4a6 6 0 0 1 12 0v4M16 4a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 5v2" /></>,
        comment: <><path d="M21 11a9 8 0 0 1-9 8H8l-5 3 1-6a8 8 0 0 1-1-5 9 8 0 0 1 18 0zM7 11h.1M12 11h.1M17 11h.1" /></>,
        patient: <><circle cx="10" cy="7" r="4" /><path d="M3 22v-5a7 7 0 0 1 14 0v5M20 5v8M16 9h8" /></>,
        clipboard: <><rect x="5" y="4" width="15" height="19" rx="2" /><path d="M9 2h7v5H9zM9 12h7M9 16h4M15 19l2 2 4-5" /></>,
        care: <><path d="M3 5h18v14H3zM1 22h22M8 16a4 4 0 0 1 8 0" /><circle cx="12" cy="10" r="2" /></>,
        phone: <><rect x="6" y="2" width="12" height="22" rx="2" /><path d="M10 5h4M10 18h4M10 12l2 2 4-4" /></>,
    };
    return <svg viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{shapes[name] || shapes.story}</svg>;
}

export default function CampaignDetails({ project }) {
    const videoId = getVideoId(project.video_id);
    const gallery = Array.isArray(project.gallery_images) ? project.gallery_images : [];
    const slides = [project.banner_image, ...gallery.map(item => item.path), project.thumbnail_image]
        .filter((value, index, items) => value && items.indexOf(value) === index)
        .map(src => ({ src: imageUrl(src), alt: project.heading || project.project_name }));
    const faqs = project.faqs || [];
    const documents = Array.isArray(project.campaign_documents) ? project.campaign_documents : [];
    const [supporters, setSupporters] = useState([]);
    const [supporterTotal, setSupporterTotal] = useState(project.supporters_count || 0);
    const [donorsLoading, setDonorsLoading] = useState(true);
    const [donorsError, setDonorsError] = useState('');
    const [donorRetry, setDonorRetry] = useState(0);
    const [slide, setSlide] = useState(0);
    const [taxBenefitOpen, setTaxBenefitOpen] = useState(false);
    const [urgentOpen, setUrgentOpen] = useState(false);
    const [tab, setTab] = useState('Story');
    const [expanded, setExpanded] = useState(false);
    const [donorTab, setDonorTab] = useState('recent');
    const [page, setPage] = useState(0);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [moreFaqs, setMoreFaqs] = useState(false);
    const supportersRef = useRef(null);
    useEffect(() => {
        if (!showCommunitySections) return;
        const controller = new AbortController();
        setDonorsLoading(true); setDonorsError('');
        const baseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL || '').trim().replace(/\/$/, '');
        fetch(baseUrl + '/project-details/' + encodeURIComponent(project.slug) + '/supporters?sort=' + donorTab + '&page=' + (page + 1), { signal: controller.signal, headers: { Accept: 'application/json' } })
            .then(response => { if (!response.ok) throw new Error('Unable to load supporters.'); return response.json(); })
            .then(result => { setSupporters(result.data); setSupporterTotal(result.total); })
            .catch(error => { if (error.name !== 'AbortError') setDonorsError('Unable to load supporters.'); })
            .finally(() => { if (!controller.signal.aborted) setDonorsLoading(false); });
        return () => controller.abort();
    }, [project.slug, donorTab, page, donorRetry]);

    function showDonors(type) {
        setDonorTab(type); setPage(0);
        supportersRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <div className={styles.page}>
            <main className={styles.container}>
                <div className={styles.layout}>
                    <div className={styles.campaignLead}>
                        <div className={styles.hero}>
                            {videoId ? (
                                <iframe
                                    key={videoId}
                                    className={styles.heroVideo}
                                    src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                                    title={`Campaign video: ${project.heading || project.project_name}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            ) : slides.length > 0 && <img className={styles.heroImage} src={slides[slide].src} alt={slides[slide].alt} />}
                            <div style={{ display: project.is_urgent ? undefined : 'none' }} className={styles.urgentInfo} onMouseEnter={() => setUrgentOpen(true)} onMouseLeave={event => { if (!event.currentTarget.contains(document.activeElement)) setUrgentOpen(false); }} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setUrgentOpen(false); }} onKeyDown={event => { if (event.key === 'Escape') { setUrgentOpen(false); event.stopPropagation(); } }}>
                                <button type="button" className={styles.urgent} aria-describedby={urgentOpen ? 'campaign-urgent-need' : undefined} onFocus={() => setUrgentOpen(true)} onClick={() => setUrgentOpen(true)}><span aria-hidden="true">⚠</span> &nbsp;URGENT</button>
                                <div id="campaign-urgent-need" role="tooltip" className={styles.taxTooltip + ' ' + styles.urgentTooltip} hidden={!urgentOpen}>
                                    <strong><span aria-hidden="true">⚠</span> Urgent Need</strong>
                                    <p>This fundraiser is in an urgent need of funds.</p>
                                </div>
                            </div>
                            <div style={{ display: project.tax_benefit ? undefined : 'none' }} className={styles.taxBenefit} onMouseEnter={() => setTaxBenefitOpen(true)} onMouseLeave={event => { if (!event.currentTarget.contains(document.activeElement)) setTaxBenefitOpen(false); }} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setTaxBenefitOpen(false); }} onKeyDown={event => { if (event.key === 'Escape') { setTaxBenefitOpen(false); event.stopPropagation(); } }}>
                                <button type="button" className={styles.taxBadge} aria-describedby={taxBenefitOpen ? 'campaign-tax-benefit' : undefined} onFocus={() => setTaxBenefitOpen(true)} onClick={() => setTaxBenefitOpen(true)}>TAX BENEFITS <span aria-hidden="true">ⓘ</span></button>
                                <div id="campaign-tax-benefit" role="tooltip" className={styles.taxTooltip} hidden={!taxBenefitOpen}>
                                    <strong><span aria-hidden="true">%</span> Tax Benefit</strong>
                                    <p>Donations made to this campaign are eligible for 80G Tax exemption for Indian citizens.</p>
                                </div>
                            </div>
                            {!videoId && <>
                            <button style={{ display: slides.length < 2 ? 'none' : undefined }} className={styles.previousSlide} aria-label="Previous campaign image" onClick={() => setSlide((slide + slides.length - 1) % slides.length)}>‹</button>
                            <button style={{ display: slides.length < 2 ? 'none' : undefined }} className={styles.nextSlide} aria-label="Next campaign image" onClick={() => setSlide((slide + 1) % slides.length)}>›</button>
                            <div className={styles.dots}>{slides.map((item, i) => <button key={item.src} onClick={() => setSlide(i)} aria-label={'Show campaign image ' + (i + 1)} aria-pressed={slide === i} className={slide === i ? styles.activeDot : ''} />)}</div>
                            </>}
                        </div>
                        <h1>{project.heading || project.project_name}</h1>
                        <div className={styles.summaryCard}>
                            {showCommunitySections && <div className={styles.summaryActions}><button onClick={() => showDonors('recent')}><span className={styles.blue}>◴</span> Recent Donors</button><button onClick={() => showDonors('top')}><span className={styles.gold}>🏆</span> Top Donors</button></div>}
                            <div className={styles.campaignMeta}><div><small>CAMPAIGN DETAILS</small><strong>{project.patient_name || project.project_name}</strong></div><div><small>BENEFICIARY DETAILS</small><strong>{project.hospital_name || "—"}</strong></div><div style={{ display: project.is_verified ? undefined : 'none' }} className={styles.verified}><span>✓</span> Verified</div></div>
                        </div>
                    </div>
                    <CampaignDonationForm project={project} />
                    <div className={styles.campaignBody}>
                        <div className={styles.tabs} role="tablist" aria-label="Campaign information">
                            {['Story', 'Documents', 'Updates'].map((label, i) => <button key={label} id={'tab-' + label} role="tab" aria-selected={tab === label} aria-controls="campaign-tabpanel" tabIndex={tab === label ? 0 : -1} className={tab === label ? styles.activeTab : ''} onClick={() => setTab(label)} onKeyDown={event => { const labels = ['Story', 'Documents', 'Updates']; let next; if (event.key === 'ArrowRight') next = (i + 1) % 3; else if (event.key === 'ArrowLeft') next = (i + 2) % 3; else if (event.key === 'Home') next = 0; else if (event.key === 'End') next = 2; if (next !== undefined) { event.preventDefault(); setTab(labels[next]); document.getElementById('tab-' + labels[next])?.focus(); } }}><Icon name={['story', 'document', 'update'][i]} />{label}</button>)}
                        </div>
                        <article className={styles.storyCard} id="campaign-tabpanel" role="tabpanel" aria-labelledby={'tab-' + tab} tabIndex={0}>
                            {tab === 'Story' && <>
                                <div id="campaign-story" className={expanded ? styles.fullStory : styles.storyPreview}>
                                    <div dangerouslySetInnerHTML={{ __html: project.description || project.short_description || '' }} />
                                </div>
                                <div className={styles.readMore}><button onClick={() => setExpanded(!expanded)} aria-expanded={expanded} aria-controls="campaign-story">{expanded ? 'Read Less' : 'Read More'}</button></div>
                            </>}
                            {tab === 'Documents' && <>
                                <h2>Campaign documents</h2>
                                {documents.length ? <div className={styles.documentsGrid}>{documents.map(item => {
                                    const isImage = /\.(jpe?g|png|webp)(?:[?#]|$)/i.test(item.path || '') || /\.(jpe?g|png|webp)$/i.test(item.name || '');
                                    return isImage ? (
                                        <a className={styles.documentImage} href={imageUrl(item.path)} target="_blank" rel="noopener noreferrer" key={item.path}>
                                            <img src={imageUrl(item.path)} alt={item.name || 'Campaign document'} loading="lazy" />
                                            <span>{item.name || 'View image'} <span aria-hidden="true">↗</span></span>
                                        </a>
                                    ) : (
                                        <div className={styles.documentPlaceholder} key={item.path}><Icon name="document" /><a href={imageUrl(item.path)} target="_blank" rel="noopener noreferrer">{item.name || 'View document'}</a></div>
                                    );
                                })}</div> : <p>No documents have been published yet.</p>}
                            </>}
                            {tab === 'Updates' && <><h2>Campaign updates</h2>{project.campaign_updates ? <div className={styles.update} dangerouslySetInnerHTML={{ __html: project.campaign_updates }} /> : <p>No updates have been published yet.</p>}</>}
                        </article>
                        {showCommunitySections && <section className={styles.supportersCard} ref={supportersRef} aria-labelledby="supporters-title">
                            <h2 id="supporters-title"><Icon name="people" />Campaign Supporters</h2>
                            <div className={styles.donorTabs} role="group" aria-label="Sort campaign supporters"><button aria-pressed={donorTab === 'recent'} className={donorTab === 'recent' ? styles.donorSelected : ''} onClick={() => { setDonorTab('recent'); setPage(0); }}><span className={styles.blue}>◴</span> Recent Donors</button><button aria-pressed={donorTab === 'top'} className={donorTab === 'top' ? styles.donorSelected : ''} onClick={() => { setDonorTab('top'); setPage(0); }}><span className={styles.gold}>🏆</span> Top Donors</button></div>
                            {donorsLoading && <p role="status">Loading supporters…</p>}
                            {donorsError && <p role="alert">{donorsError} <button onClick={() => setDonorRetry(donorRetry + 1)}>Retry</button></p>}
                            {!donorsLoading && !donorsError && supporterTotal === 0 && <p>Be the first to support this campaign.</p>}
                            <div aria-live="polite">{!donorsLoading && !donorsError && supporters.map(donor => <div className={styles.donor} key={donor.id}><span className={styles.avatar}>{donor.name[0]}</span><div><strong>{donor.name}</strong><small>{donor.time}</small></div><b>₹{donor.amount.toLocaleString('en-IN')}</b></div>)}</div>
                            <div className={styles.pagination}><button aria-label="Previous supporters" disabled={page === 0 || donorsLoading} onClick={() => setPage(page - 1)}>‹</button><span>{supporterTotal ? page * 5 + 1 : 0} – {Math.min(page * 5 + 5, supporterTotal)} of {supporterTotal} donations</span><button aria-label="Next supporters" disabled={(page + 1) * 5 >= supporterTotal || donorsLoading} onClick={() => setPage(page + 1)}>›</button></div>
                        </section>}
                        {showCommunitySections && <section className={styles.comments} aria-labelledby="comments-title"><h2 id="comments-title"><Icon name="comment" />Words of Support <span>{comments.length}</span></h2>
                            <form onSubmit={event => { event.preventDefault(); if (comment.trim()) { setComments([...comments, comment.trim()]); setComment(''); } }}><Icon name="comment" /><input aria-label="Words of support" placeholder="Add words of support (this session only)" value={comment} onChange={event => setComment(event.target.value)} required maxLength={500} /><button type="submit">POST</button></form>
                            {comments.length ? <div className={styles.commentList} aria-live="polite">{comments.map((text, i) => <div key={i}><strong>A supporter <small>Just now · This session</small></strong><p>{text}</p></div>)}</div> : <div className={styles.emptyComments}><Icon name="comment" /><p>Be the first to share words of encouragement and support!</p></div>}
                        </section>}
                    </div>
                </div>
                <section className={styles.aboutProcess}>
                    <div className={styles.about}><h2>About Sight Cares</h2><img src="/images/sight_care_logo.png" alt="Sight Cares India Foundation" /><p>Sight Cares India Foundation brings people together to help families access essential medical care. Through the generosity of contributors like you, we can help make treatment and a brighter future possible.</p><ul><li>Every campaign follows a review process to help build a trusted and caring community.</li><li>Campaign progress and treatment updates are shared with supporters.</li></ul></div>
                    <div className={styles.process}><h2>Process</h2>{processSteps.map(([icon, title, description], i) => <div className={styles.processStep} key={title}><span className={styles.processIcon}><Icon name={icon} /></span><div><h3>{i + 1}. {title}</h3><p>{description}</p></div></div>)}</div>
                </section>
                {hasVisibleContent(project.terms_declarations) && <details className={styles.terms}><summary>◈ &nbsp;IMPORTANT TERMS &amp; DECLARATIONS</summary><div dangerouslySetInnerHTML={{ __html: project.terms_declarations }} /></details>}
                {faqs.length > 0 && <section className={styles.faqs}><h2>FREQUENTLY ASKED QUESTIONS</h2>{faqs.slice(0, moreFaqs ? faqs.length : 4).map(faq => <details key={faq.id}><summary>{faq.question}</summary><div dangerouslySetInnerHTML={{ __html: faq.answer }} /></details>)}{faqs.length > 4 && <button className={styles.showMore} onClick={() => setMoreFaqs(!moreFaqs)}>{moreFaqs ? 'Show Less' : 'Show More'}</button>}</section>}
            </main>
            <a href="#donation" className={styles.mobileDonate}>Donate Now</a>
        </div>
    );
}
