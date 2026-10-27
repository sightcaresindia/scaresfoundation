import Link from 'next/link';
import { bannerContent, sharedBannerImage } from './bannerContent';
import styles from './PageBanner.module.scss';

export default function PageBanner({ title, heading, highlight, description, eyebrow, cta }) {
    const defaults = bannerContent[title] || {};
    const bannerTitle = title || 'Sight Cares India Foundation';
    const bannerHeading = heading ?? defaults.heading ?? bannerTitle;
    const bannerHighlight = highlight ?? defaults.highlight;
    const bannerDescription = description ?? defaults.description;
    const bannerImage = sharedBannerImage;
    const bannerEyebrow = eyebrow ?? defaults.eyebrow ?? 'Sight Cares India Foundation';
    const bannerCta = cta === undefined ? defaults.cta : cta;
    const plainDescription = typeof bannerDescription === 'string'
        ? bannerDescription.replace(/<[^>]*>/g, ' ').trim()
        : bannerDescription;

    return (
        <section className={styles.hero} aria-label={bannerTitle} style={{ '--banner-image': 'url(' + JSON.stringify(bannerImage) + ')' }}>
            <div className="container">
                <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{bannerTitle}</span>
                </nav>
                <div className={styles.heroContent}>
                    {bannerEyebrow && <p className={styles.eyebrow}>{bannerEyebrow}</p>}
                    <h1>{bannerHeading}{bannerHighlight && <> <em>{bannerHighlight}</em></>}</h1>
                    {plainDescription && <p>{plainDescription}</p>}
                    {bannerCta?.href && bannerCta?.label && (
                        <Link href={bannerCta.href} className={styles.primaryLink}>{bannerCta.label}<span aria-hidden="true">↗</span></Link>
                    )}
                </div>
            </div>
        </section>
    );
}
