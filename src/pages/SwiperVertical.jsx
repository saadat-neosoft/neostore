import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

import vc1 from "../assets/vc1.png";
import vc2 from "../assets/vc2.png";
import vc3 from "../assets/vc3.png";

import prevArrow from "../assets/chevronLeft.svg";
import nextArrow from "../assets/chevronRight.svg";

import "../styles/components/productDetail.scss";

const SwiperVertical = () => {
    return (
        <div className="swiper-container">
            <Swiper
                className="swiper-container-wrapper"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation={{
                    prevEl: ".prev-button",
                    nextEl: ".next-button",
                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                direction="vertical"
                loop="true"
            >
                <div className="prev-button">
                    <div
                        className="swiper-container-wrapper__prev"
                        // style={{
                        //     position: "absolute",
                        //     top: "-40px",
                        //     left: "30px",
                        //     zIndex: "2",
                        // }}
                    >
                        <img
                            // style={{ transform: "rotate(90deg)" }}
                            src={prevArrow}
                            alt=""
                        />
                    </div>
                </div>
                <div className="next-button">
                    <div
                        className="swiper-container-wrapper__next"
                        // style={{
                        //     position: "absolute",
                        //     bottom: "-30px",
                        //     left: "50px",
                        //     zIndex: "2",
                        // }}
                    >
                        <img
                            // style={{ transform: "rotate(90deg)" }}
                            src={nextArrow}
                            alt=""
                        />
                    </div>
                </div>
                <SwiperSlide>
                    <img className="vimg" src={vc1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="vimg" src={vc2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="vimg" src={vc3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="vimg" src={vc1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="vimg" src={vc2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="vimg" src={vc3} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperVertical;
