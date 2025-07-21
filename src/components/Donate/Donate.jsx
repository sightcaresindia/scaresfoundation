'use client'
import React, { useState } from 'react';

const AboutS2 = (props) => {

    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    }

    return (
<section className="vision-impact">
  <div className="container">
     <div class="section-title text-center">
       <h2>Be the Reason Someone Sees Again</h2>
    </div>
    <div className="vision-intro">
      <p>Millions in India live with preventable or treatable blindness &mdash; simply because they can&rsquo;t afford care. At Sight Cares India Foundation, your contribution directly supports eye screenings, medical guidance, subsidized surgeries, post-operative care, and assistive devices for underserved communities.</p>
      <p>Whether you choose to give once or commit monthly, every donation creates lasting impact.</p>
    </div>
    <div className="vision-cards">
      <div className="vision-box">
        <div className="icon">💡</div>
        <h3>One-Time / Monthly Giving</h3>
        <p>Give once to spark change, or monthly to build lasting impact in underprivileged communities.</p>
      </div>

      <div className="vision-box">
        <div className="icon">👁️</div>
        <h3>Sponsor a Surgery</h3>
        <p>Just one cataract surgery can return a child to school or a parent to work. Transform a life today.</p>
      </div>

      <div className="vision-box">
        <div className="icon">🤝</div>
        <h3>CSR & Institutional Partners</h3>
        <p>Partner with us to drive health equity through transparent and scalable community interventions.</p>
      </div>
    </div>
    <div className="vision-help-section">
      <h3>Other Ways You Can Help</h3>
      <div className="help-options">
        <div className="help-card">
          <span className="check-icon">✅</span>
          <p><strong>Donate Online</strong><br />Use our secure payment gateway to support instantly.</p>
        </div>
        <div class="help-card">
          <span className="check-icon">🏦</span>
          <p><strong>Bank Transfer / NEFT</strong><br />Contribute directly to our account with ease.</p>
        </div>
        <div className="help-card">
          <span className="check-icon">🎁</span>
          <p><strong>In-kind Support</strong><br />Provide spectacles, medicines, or devices.</p>
        </div>
        <div className="help-card">
          <span className="check-icon">📢</span>
          <p><strong>Host a Fundraiser</strong><br />Start a giving campaign in your community or workplace.</p>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default AboutS2;



