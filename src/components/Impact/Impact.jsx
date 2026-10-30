'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Impact.module.scss';

import impact1 from '/public/images/impact/route.png';
import impact2 from '/public/images/impact/medical-condition.png';
import impact3 from '/public/images/impact/patient.png';
import impact4 from '/public/images/impact/healthcare.png';

const highlights = [
    { icon: impact1, title: 'Geographical Reach', description: 'Focused in North India and progressively extending our impact across India.' },
    { icon: impact2, title: 'Medical Conditions Addressed', description: 'Various preventable and treatable conditions such as cataracts, refractive errors, glaucoma, diabetic retinopathy, and other treatable conditions.' },
    { icon: impact3, title: 'Support Provided', description: 'Medical guidance, surgery coordination, diagnosis, subsidized surgeries, free assistive devices, free medicines, spectacles, and post-operative care.' },
    { icon: impact4, title: 'Holistic Support', description: "Addresses every aspect of a visually impaired person's journey — from medical guidance and surgeries to emotional well-being and rehabilitation. We empower individuals with the tools, care, and confidence they need to lead independent and dignified lives." },
];

const Impact = () => (
    <section className={styles.section} aria-labelledby="impact-highlights-title">
        <div className="container">
            <div className={styles.heading}>
                <h2 id="impact-highlights-title">Impact <span>Highlights</span></h2>
                <div className={styles.headingDecoration} aria-hidden="true"><span /><span /><span /><span /></div>
            </div>
            <div className={styles.grid}>
                {highlights.map(({ icon, title, description }, index) => (
                    <article className={styles.card} key={title}>
                        <div className={styles.cardTop}>
                            <div className={styles.icon}><Image src={icon} alt="" width={44} height={44} /></div>
                            <span className={styles.number} aria-hidden="true">0{index + 1}</span>
                        </div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default Impact;
