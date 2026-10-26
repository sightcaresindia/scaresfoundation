'use client';

import React, { useEffect, useRef, useState } from 'react';
import { A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero2.module.scss';

const slides = [
    {
        eyebrow: 'Bringing light and hope into every life',
        title: 'Empowering lives through',
        highlight: 'better vision.',
        image: '/images/slider/sightcares-1.jpg',
        description: 'Together, we can bring essential eye care closer to the communities that need it most.',
    },
    {
        eyebrow: 'Quality eye care for everyone',
        title: 'Together, we can make vision care',
        highlight: 'accessible.',
        image: '/images/slider/sightcares-2.jpg',
        description: 'From eye screenings to treatment support, we help people take the next step towards clearer sight.',
    },
    {
        eyebrow: 'Restoring sight, transforming lives',
        title: 'A clearer vision for a',
        highlight: 'brighter tomorrow.',
        image: '/images/slider/sightcare-3.jpg',
        description: 'Better vision opens doors to learning, independence, and a life filled with possibility.',
    },
    {
        eyebrow: 'Care, compassion, and vision for all',
        title: 'Every eye deserves the',
        highlight: 'gift of sight.',
        image: '/images/slider/sightcares-4.jpg',
        description: 'Compassionate care and timely support can make a lasting difference in someone’s life.',
    },
    {
        eyebrow: 'Creating opportunities through accessible vision care',
        title: 'Building a world where everyone sees',
        highlight: 'possibilities.',
        image: '/images/slider/sightcares-5.jpg',
        description: 'Help us reach more communities with eye health awareness, screenings, and access to care.',
    },
    {
        eyebrow: 'Your support makes sight possible',
        title: 'Caring for eyes. Inspiring hope.',
        highlight: 'Changing lives.',
        image: '/images/slider/sightcares-2.jpg',
        description: 'Be part of a shared mission to restore sight, dignity, and opportunity for everyone.',
    },
];

const Arrow = ({ backwards = false }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={backwards ? { transform: 'rotate(180deg)' } : undefined}>
        <path d="M4 12h16m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default function Hero2() {
    const hero = useRef(null);
    const slider = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const element = hero.current;
        if (!element) return;

        const fitToViewport = () => {
            if (!element.isConnected) return;
            const top = element.getBoundingClientRect().top + window.scrollY;
            element.style.setProperty('--hero-available-height', `${Math.max(0, window.innerHeight - top)}px`);
            const swiper = slider.current;
            if (swiper && !swiper.destroyed && swiper.initialized) {
                swiper.updateAutoHeight(0);
            }
        };

        fitToViewport();
        window.addEventListener('resize', fitToViewport);
        const observer = new ResizeObserver(fitToViewport);
        if (element.previousElementSibling) observer.observe(element.previousElementSibling);
        return () => {
            window.removeEventListener('resize', fitToViewport);
            observer.disconnect();
        };
    }, []);

    const goToSlide = (index) => {
        const swiper = slider.current;
        if (swiper && !swiper.destroyed) swiper.slideTo(index);
    };

    const changeSlide = (direction) => {
        const swiper = slider.current;
        if (!swiper || swiper.destroyed) return;
        if (direction === 'previous') swiper.slidePrev();
        else swiper.slideNext();
    };

    return (
        <section ref={hero} className={styles.hero} aria-label="Sight Cares India Foundation highlights">
            <Swiper
                id="hero-slides"
                className={styles.slider}
                modules={[A11y, Autoplay]}
                slidesPerView={1}
                rewind
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                speed={650}
                autoHeight
                onSwiper={(swiper) => { slider.current = swiper; }}
                onBeforeDestroy={(swiper) => {
                    if (slider.current === swiper) slider.current = null;
                }}
                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.highlight}>
                        <div className={styles.slide}>
                            <div className={styles.content}>
                                <p className={styles.eyebrow}><span />{slide.eyebrow}</p>
                                <h1 className={styles.title}>{slide.title} <span>{slide.highlight}</span></h1>
                                <p className={styles.description}>{slide.description}</p>
                                <div className={styles.actions}>
                                    <Link className={styles.primaryLink} href="/our-campaigns">Make a difference <Arrow /></Link>
                                    <Link className={styles.secondaryLink} href="/programs">Explore our work <span aria-hidden="true">&#8599;</span></Link>
                                </div>
                            </div>
                            <div className={styles.visual}>
                                <Image src={slide.image} alt="Community eye care at Sight Cares India Foundation" fill priority={index === 0} sizes="(max-width: 767px) 100vw, 52vw" className={styles.photo} />
                                <div className={styles.imageCaption}><span className={styles.captionMark} aria-hidden="true">&#10022;</span><span>A little care.<br /><strong>A world of possibility.</strong></span></div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.footer}>
                <span className={styles.foundation}>SIGHT CARES INDIA FOUNDATION</span>
                <div className={styles.controls}>
                    <span className={styles.counter} aria-live="polite" aria-atomic="true"><strong>{String(activeSlide + 1).padStart(2, '0')}</strong><span> / {String(slides.length).padStart(2, '0')}</span></span>
                    <div className={styles.pagination} aria-label="Choose a banner">
                        {slides.map((slide, index) => (
                            <button key={slide.highlight} type="button" className={index === activeSlide ? styles.activeDot : styles.dot} aria-label={`Go to slide ${index + 1}`} aria-current={index === activeSlide ? 'true' : undefined} aria-controls="hero-slides" onClick={() => goToSlide(index)} />
                        ))}
                    </div>
                    <div className={styles.arrows}>
                        <button type="button" aria-label="Previous slide" aria-controls="hero-slides" onClick={() => changeSlide('previous')}><Arrow backwards /></button>
                        <button type="button" aria-label="Next slide" aria-controls="hero-slides" onClick={() => changeSlide('next')}><Arrow /></button>
                    </div>
                </div>
            </div>
        </section>
    );
}