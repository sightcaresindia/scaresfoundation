'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './Testimonial.module.scss';

const testimonials = [
    {
        "name": "Parimala",
        "quote": "When my eyesight started fading, I was scared — not just for my health, but because I knew we could not afford treatment. We barely make enough to cover daily needs. Then Sight Cares India Foundation held a camp in our area. They diagnosed my cataract and arranged the surgery without charging us. Today, I can see it again, and it feels like a miracle.",
        "initials": "P"
    },
    {
        "name": "Nandlal Purohit",
        "quote": "My son was falling behind in school because he could not see clearly, but we did not have money for an eye check-up, let alone glasses. When the eye camp came to our area, they checked his eyes and gave him spectacles free of cost. For families like ours, even a small thing like a pair of glasses can feel out of reach — but this help changed everything.",
        "initials": "NP"
    },
    {
        "name": "Anil Kumar Mishra",
        "quote": "For many months, I suffered due to eye pain and blurry vision. We live far from a hospital and could not afford private treatment. I thought blindness was my fate. Someone suggested we contact the Sight Cares India Foundation. They got my eyes checked and supported my surgery including post-treatment. I had no money for medicines, but they took care of that too. I will never forget their help.",
        "initials": "AK"
    },
    {
        "name": "Aina Thakur",
        "quote": "I live on a small pension and had no one to take me for treatment when my vision started worsening. Private hospitals were too expensive. Sight Cares India Foundation helped me get diagnosed and treated for glaucoma and arranged a donor for my surgery. They even gave me the medicines I could not afford. Their kindness and support restored not just my sight, but my confidence.",
        "initials": "AT"
    }
];

const Testimonial = () => {
    const carouselRef = useRef(null);
    const sectionRef = useRef(null);
    const hoveredRef = useRef(false);
    const [autoplayPaused, setAutoplayPaused] = useState(false);
    const [canGoBack, setCanGoBack] = useState(false);
    const [canGoForward, setCanGoForward] = useState(true);

    useEffect(() => {
        const carousel = carouselRef.current;
        const updateControls = () => {
            setCanGoBack(carousel.scrollLeft > 2);
            setCanGoForward(carousel.scrollLeft + carousel.clientWidth < carousel.scrollWidth - 2);
        };
        const observer = new ResizeObserver(updateControls);
        observer.observe(carousel);
        carousel.addEventListener('scroll', updateControls, { passive: true });
        updateControls();
        return () => {
            observer.disconnect();
            carousel.removeEventListener('scroll', updateControls);
        };
    }, []);

    useEffect(() => {
        if (autoplayPaused) return;
        const timer = window.setInterval(() => {
            const carousel = carouselRef.current;
            if (document.hidden || hoveredRef.current || sectionRef.current.contains(document.activeElement)
                || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            const atEnd = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 2;
            carousel.scrollTo({
                left: atEnd ? 0 : carousel.scrollLeft + carousel.clientWidth + 24,
                behavior: 'smooth',
            });
        }, 5000);
        return () => window.clearInterval(timer);
    }, [autoplayPaused]);

    const move = direction => {
        const carousel = carouselRef.current;
        carousel.scrollBy({
            left: direction * (carousel.clientWidth + 24),
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        });
    };

    return (
    <section className={styles.section} ref={sectionRef} aria-labelledby="beneficiary-testimonials-title"
        onPointerEnter={event => { if (event.pointerType === 'mouse') hoveredRef.current = true; }}
        onPointerLeave={() => { hoveredRef.current = false; }}>
        <div className="container">
            <div className={styles.heading}>
                <div className={styles.headingMark} aria-hidden="true">“</div>
                <h2 id="beneficiary-testimonials-title">Beneficiary <span>Testimonials</span></h2>
                <div className={styles.headingLine} aria-hidden="true" />
            </div>
            <div className={styles.carousel} ref={carouselRef} id="beneficiary-testimonial-carousel" role="region" aria-label="Beneficiary testimonials carousel" tabIndex={0}>
                {testimonials.map(({ name, quote, initials }) => (
                    <figure className={styles.card} key={name}>
                        <div className={styles.quoteMark} aria-hidden="true">“</div>
                        <blockquote><p>{quote}</p></blockquote>
                        <figcaption className={styles.person}>
                            <div className={styles.avatar} aria-hidden="true">{initials}</div>
                            <span>{name}</span>
                        </figcaption>
                    </figure>
                ))}
            </div>
            <div className={styles.controls}>
                <button type="button" onClick={() => setAutoplayPaused(paused => !paused)} aria-label={autoplayPaused ? 'Resume automatic scrolling' : 'Pause automatic scrolling'} title={autoplayPaused ? 'Resume automatic scrolling' : 'Pause automatic scrolling'} aria-controls="beneficiary-testimonial-carousel">{autoplayPaused ? '▶' : 'Ⅱ'}</button>
                <button type="button" onClick={() => move(-1)} disabled={!canGoBack} aria-label="Previous testimonials" aria-controls="beneficiary-testimonial-carousel">←</button>
                <button type="button" onClick={() => move(1)} disabled={!canGoForward} aria-label="Next testimonials" aria-controls="beneficiary-testimonial-carousel">→</button>
            </div>
        </div>
    </section>
    );
};

export default Testimonial;





