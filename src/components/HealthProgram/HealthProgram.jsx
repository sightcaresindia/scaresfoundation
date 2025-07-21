import React from 'react';
import Image from 'next/image';

import shapeArrow from '/public/images/process-arrow-shape.svg';
import shape1 from '/public/images/process/shape1.svg';
import shape2 from '/public/images/process/shape2.svg';
import shape3 from '/public/images/process/shape3.svg';
import shape4 from '/public/images/process/shape4.svg';
import shape5 from '/public/images/process/shape5.svg';
import img1 from '/public/images/government/delhi.png';
import img2 from '/public/images/government/haryana.png';
import img3 from '/public/images/government/bihar.png';
import img4 from '/public/images/government/punjab.png';
import img5 from '/public/images/government/up.png';
import img6 from '/public/images/government/jharkhand.png';
import img7 from '/public/images/government/west-bengal.png';
import img8 from '/public/images/government/maharashtra.png';
import img9 from '/public/images/government/gujrat.png';
import img10 from '/public/images/government/andhrapradesh.png';
import img11 from '/public/images/government/telangana.png';
import img12 from '/public/images/government/kerala.png';

const ProcessSection = () => {
  return (
    <section className="health-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h2>Health programmes/schemes offered by States</h2>
        </div>
        <div className="grid-container">
          <div className="card">
            <Image src={img1} alt="" />
            <div className="state highlight">Delhi</div>
            <div className="description">
              <a href="https://www.india.gov.in/website-national-programme-control-blindness-visual-impairment">
                National Programme for Control of Blindness and Visual Impairment
              </a>{' '}
              (NPCBVI) - This national program, implemented in Delhi, provides free or subsidised cataract surgeries and other eye care services.&nbsp;
              <a href="https://dgehs.delhi.gov.in/dghs/delhi-arogya-kosh#:~:text=3%20lakh%20per%20annum%20and,for%20children%20below%205%20years)%2C">
                Delhi Arogya Kosh
              </a>{' '}
              (DAK) offers financial assistance for the treatment of various diseases, including eye ailments, to eligible residents of Delhi.
            </div>
          </div>

          <div className="card">
             <Image src={img2} alt="" />
            <div className="state highlight">Haryana</div>
            <div className="description">
              The Haryana government offers free cataract surgery at all 26 government hospitals and 15 empanelled private hospitals. Includes teleconsultation services under schemes like{' '}
              <a href="https://nha.gov.in/PM-JAY#:~:text=Ayushman%20Bharat%20PM%2DJAY%20is,the%20bottom%2040%25%20of%20the">AB-PMJAY</a>
            </div>
          </div>

          <div className="card">
             <Image src={img3} alt="" />
            <div className="state highlight">Bihar</div>
            <div className="description">
              The <a href="https://npcbvi.mohfw.gov.in/Home"><strong>NPCBVI</strong></a> and{' '}
              <a href="https://www.jagran.com/jharkhand/ranchi-national-eye-jyoti-abhiyan-cataract-patient-test-start-from-today-under-central-government-scheme-rahstriya-netra-jyoti-abhiyan-22808863.html">
                <strong>National Eye-Jyoti Abhiyan</strong>
              </a>{' '}
              are active in villages and towns, focusing on cataract screening and surgery.
            </div>
          </div>

          <div className="card">
             <Image src={img4} alt="" />
            <div className="state highlight">Punjab</div>
            <div className="description">
              <a href="https://www.youtube.com/shorts/APiJgf6PtYI"><strong>Saade Buzurg Sadda Maan Scheme</strong></a> - senior citizens benefit from free eye exams, glasses, and cataract surgery via health camps.
              <strong> The Mukhyamantri Punjab </strong>
              <a href="https://timesofindia.indiatimes.com/city/ludhiana/mukh-mantri-punjab-motia-mukt-abhiyan-to-be-launched-on-november-26-ludhiana-civil-surgeon/articleshow/87835774.cms">
                <strong>Motia Mukt Abhiyan</strong>
              </a>{' '}
              offers cataract screening and surgeries in government facilities. To date, over 7,700 individuals have been screened, and 246 surgeries have been conducted in Mohali.
            </div>
          </div>

          <div className="card">
             <Image src={img5} alt="" />
            <div className="state highlight">Uttar Pradesh</div>
            <div className="description">
              <a href="https://npcbvi.mohfw.gov.in/Home"><strong>NPCBVI</strong></a> implementation through door-to-door cataract screening and surgeries. Broader poverty alleviation schemes, such as the <strong>Zero Poverty Campaign</strong>, facilitate access to Ayushman Bharat health coverage, including eye care.
            </div>
          </div>

          <div className="card">
             <Image src={img6} alt="" />
            <div className="state highlight">Jharkhand</div>
            <div className="description">
              <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=1944598"><strong>The National Eye-Jyoti Abhiyan</strong></a> offers door-to-door cataract detection across districts, providing referrals for surgery and follow-up.{' '}
              <a href="https://abdm.gov.in/"><strong>Ayushman Bharat</strong></a> - Jharkhand ranks 2nd nationally in number of eye surgeries covered—over 74,660 in one year.
            </div>
          </div>

          <div className="card">
             <Image src={img7} alt="" />
            <div className="state highlight">West Bengal</div>
            <div className="description">
              <strong>Chokher Alo</strong> aims to perform 20 lakh free cataract surgeries and distribute over 8.25 lakh free spectacles across a five-year period. Includes free screening camps, pediatric vision checks in Anganwadis and schools, and priority for economically weak and elderly populations.
            </div>
          </div>

          <div className="card">
             <Image src={img8} alt="" />
            <div className="state highlight">Maharashtra</div>
            <div className="description">
              <strong>Mahatma Jyotiba Phule Jan Arogya Yojana</strong> provides health coverage up to ₹1.5 lakh per family annually. It fully covers cataract surgery, including pre-and post-operative care in empanelled hospitals.
            </div>
          </div>

          <div className="card">
             <Image src={img9} alt="" />
            <div className="state highlight">Gujarat</div>
            <div className="description">
              <strong>Mukhyamantri Amrutam Yojana</strong> offers up to ₹5 lakh per family each year for medical and surgical procedures, including eye surgeries, in government and empanelled facilities.
            </div>
          </div>

          <div className="card">
             <Image src={img10} alt="" />
            <div className="state highlight">Andhra Pradesh</div>
            <div className="description">
              <strong>YSR Kranti Velugu</strong> is a state-wide scheme offering comprehensive eye care, including screenings, spectacles, and cataract surgeries, across multiple phases of implementation.
            </div>
          </div>

          <div className="card">
             <Image src={img11} alt="" />
            <div className="state highlight">Telangana</div>
            <div className="description">
              <strong>Kanti Velugu</strong> provides free eye check-ups, spectacles, and treatment (including cataracts, glaucoma, diabetic retinopathy, and general eye conditions) to all residents through community and referral services.
            </div>
          </div>

          <div className="card">
             <Image src={img12} alt="" />
            <div className="state highlight">Kerala</div>
            <div className="description">
              <strong>Karunya Arogya Suraksha Padhathi</strong> offers health insurance that includes up to ₹5 lakh per family annually for secondary and tertiary care, which can include major eye surgeries.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
