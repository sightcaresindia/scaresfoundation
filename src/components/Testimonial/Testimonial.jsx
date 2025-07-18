import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';


const testimonials = [
    {
        id: '01',
        img: "",
        Des: "When my eyesight started fading, I was scared — not just for my health, but because I knew we could not afford treatment. We barely make enough to cover daily needs. Then Sight Cares India Foundation held a camp in our area. They diagnosed my cataract and arranged the surgery without charging us. Today, I can see it again, and it feels like a miracle.",
        title: '',
        sub: "",
    },
    {
        id: '02',
        img: "",
        Des: "My son was falling behind in school because he could not see clearly, but we did not have money for an eye check-up, let alone glasses. When the eye camp came to our area, they checked his eyes and gave him spectacles free of cost. For families like ours, even a small thing like a pair of glasses can feel out of reach — but this help changed everything.",
        title: '',
        sub: "",
    },
    {
        id: '03',
        img: "",
        Des: "For many months, I suffered due to eye pain and blurry vision. We live far from a hospital and could not afford private treatment. I thought blindness was my fate. Someone suggested we contact the Sight Cares India Foundation. They got my eyes checked and supported my surgery including post-treatment. I had no money for medicines, but they took care of that too. I will never forget their help.",
        title: '',
        sub: "",
    },
    {
        id: '04',
        img: "",
        Des: "I live on a small pension and had no one to take me for treatment when my vision started worsening. Private hospitals were too expensive. Sight Cares India Foundation helped me get diagnosed and treated for glaucoma and arranged a donor for my surgery. They even gave me the medicines I could not afford. Their kindness and support restored not just my sight, but my confidence.",
        title: '',
        sub: "",
    },
    {
        id: '05',
        img: "",
        Des: "When I began losing sight in one eye, I was terrified. Missing work meant no income, but treatment was something I just could not afford. That is when I found Sight Cares India Foundation. They took me in without asking for money, arranged surgery through their hospital tie-ups, and even gave me time to heal. Without them, I would have lost both my vision and my livelihood.",
        title: '',
        sub: "",
    },
    {
        id: '06',
        img: "",
        Des: "My daughter was born with serious vision problems, and every doctor visit felt like an expense we couldn’t manage. The fear of high costs and our inability to arrange money made us delay the treatment. Then Sight Cares India Foundation stepped in — they supported every step, from diagnosis to assistive glasses, and never once asked us to pay. They gave my child a chance we never thought we could afford.",
        title: '',
        sub: "",
    },


]

const Testimonial = (props) => {

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        ]
    };

    return (
        <section className={"" + props.tClass}>
            <div className="container mb-5 pb-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="section-title">
                            <h2>Beneficiary <span>Testimonials</span></h2>
                        </div>
                    </div>
                </div>
                <div className="testimonial-wrap">
                    <Slider {...settings} className="testimonial-slider">
                        {testimonials.map((testitem, titem) => (
                            <div className="testimonial-card" key={titem}>
                                <p>{testitem.Des}</p>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </section>
    );
}

export default Testimonial;





