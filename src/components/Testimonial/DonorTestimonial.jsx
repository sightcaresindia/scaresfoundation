import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';


const testimonials = [
    {
        id: '01',
        img: "",
        Des: "This was my first time donating to a cause related to eye health, and I’m so glad I chose Sight Cares India Foundation. I was deeply moved by the stories of people regaining their sight. Knowing that even a small contribution can help someone see again is incredibly fulfilling.",
        title: '',
        sub: "- First-Time Contributor",
    },
    {
        id: '02',
        img: "",
        Des: "I started giving monthly because I believe in consistent impact. Sight Cares keeps me updated with where my support is going — from surgeries to camps. It feels good to be part of something that restores not just vision but dignity and hope.",
        title: '',
        sub: "- Monthly Donor",
    },
    {
        id: '03',
        img: "",
        Des: "Our company partnered with Sight Cares India Foundation as part of our CSR program, and it has been a significant collaboration. Their professionalism, transparent reporting, and real-world impact made it clear that this was more than charity — it was a shared mission for inclusive healthcare.",
        title: '',
        sub: "- Company Representative of CSR Partner Company",
    },
    {
        id: '04',
        img: "",
        Des: "As a parent, I couldn’t ignore the struggles of visually impaired children from underprivileged families. I donated to sponsor a child’s treatment, and when I received an update about her recovery, it brought tears to my eyes. That joy is priceless.",
        title: '',
        sub: "- Donor for Child Beneficiary",
    },
    {
        id: '05',
        img: "",
        Des: "I found Sight Cares online while searching for reliable NGOs, and their focus on preventable blindness resonated with me. The donation process was simple, and I appreciated the clear communication. I'll support them again.",
        title: '',
        sub: "",
    },
    {
        id: '06',
        img: "",
        Des: "I donated in memory of my late husband, who had struggled with vision issues. Supporting this cause felt personal. Sight Cares India Foundation handled everything with such respect and even shared how the funds helped an elderly patient. It meant the world to me.",
        title: '',
        sub: "- In Memory Giving",
    },
    {
        id: '07',
        img: "",
        Des: "Our local group decided to raise funds for an eye screening camp. Working with the Sight Cares team was seamless — they involved us every step of the way. Seeing the camp in action made us realize how essential their work is. We’re already planning the next one.",
        title: '',
        sub: "- Fundraising Partner",
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
                            <h2>Donor <span>Testimonials</span></h2>
                        </div>
                    </div>
                </div>
                <div className="testimonial-wrap">
                    <Slider {...settings} className="testimonial-slider">
                        {testimonials.map((testitem, titem) => (
                            <div className="testimonial-card" key={titem}>
                                <p>{testitem.Des}</p>
                                <p className="testimonial-sub">{testitem.sub}</p>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </section>
    );
}

export default Testimonial;





