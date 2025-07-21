import React from "react";
import { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link'
import shape1 from '/public/images/slider/shape-1.svg'
import shape2 from '/public/images/slider/shape-2.svg'
import shape3 from '/public/images/slider/shape-3.svg'
import shape4 from '/public/images/slider/shape-4.png'
import shape5 from '/public/images/slider/shape-5.svg'
import Image from "next/image";





const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Hero = (props) => {
    return (

        <section className={"" + props.hclass} >
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                navigation
            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-1.png'})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <span>Sight Cares India Foundation</span>
                                </div>
                                <div className="slide-sub-title">
                                    <h2>We are committed to <span className="text">transforming lives </span></h2>
                                </div>
                                <div data-swiper-parallax="500" className="slide-btns">
                                    <Link onClick={ClickHandler} href="/about-us" className="theme-btn">About Us</Link>
                                    <div className="call">
                                        <div className="icon">
                                            <i className="flaticon-phone"></i>
                                        </div>
                                        <div className="text">
                                            <h3>Call Us Now</h3>
                                            <span>+91 840 693 8482</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-shape">
                            <Image src={shape1} alt="" />
                        </div>
                        <div className="shape-1">
                            <Image src={shape2} alt="" />
                        </div>
                        <div className="shape-2">
                            <Image src={shape3} alt="" />
                        </div>
                        <div className="shape-3">
                            <Image src={shape4} alt="" />
                        </div>
                        <div className="shape-4">
                            <Image src={shape5} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
               
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-2.png'})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <span>Sight Cares India Foundation</span>
                                </div>
                                <div className="slide-sub-title">
                                    <h2>Our mission is to restore, <span className="text">vision dignity, and opportunity.</span> </h2>
                                </div>
                                <div data-swiper-parallax="500" className="slide-btns">
                                    <Link onClick={ClickHandler} href="/about-us" className="theme-btn">About Us</Link>
                                    <div className="call">
                                        <div className="icon">
                                            <i className="flaticon-phone"></i>
                                        </div>
                                        <div className="text">
                                            <h3>Call Us Now</h3>
                                            <span>+91 840 693 8482</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-shape">
                            <Image src={shape1} alt="" />
                        </div>
                        <div className="shape-1">
                            <Image src={shape2} alt="" />
                        </div>
                        <div className="shape-2">
                            <Image src={shape3} alt="" />
                        </div>
                        <div className="shape-3">
                            <Image src={shape4} alt="" />
                        </div>
                        <div className="shape-4">
                            <Image src={shape5} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
               
                ...
            </Swiper>
        </section>
    )
}

export default Hero;