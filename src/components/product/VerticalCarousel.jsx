import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CustomArrowNext from "../home/CustomArrowNext";
import CustomArrowPrev from "../home/CustomArrowPrev";
// import HomeCarousel from "../home/HomeCarousel";
import image1 from "../../assets/heroHomePage.png";

const VerticalCarousel = () => {
    const settings = {
        dots: false, // Show navigation dots
        infinite: true, // Enable infinite loop
        speed: 800, // Transition speed in milliseconds
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll per step
        prevArrow: <CustomArrowPrev />,
        nextArrow: <CustomArrowNext />,
        // autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        // vertical: true,
    };

    return (
        <div className="home-carousel" style={{ display: "inline" }}>
            <Slider {...settings}>
                <div style={{ width: "300px" }}>
                    <div className="carousel-container">
                        <div className="container content">
                            <span className="hr-line"></span>
                            <span className="furniture">Furniture 2022</span>
                            <span className="new-arrival">NEW ARRIVALS</span>
                            <span className="spring-collection">
                                SPRING <br /> COLLECTION
                            </span>
                            <button className="carousel-btn" type="button">
                                Shop now
                            </button>
                        </div>
                        <img
                            src={image1}
                            alt=""
                            className="home-carousel__img"
                        />
                    </div>
                </div>
                <div>
                    <div className="carousel-container">
                        <div className="container content">
                            <span className="furniture">
                                Furniture <br />
                                2022
                            </span>
                            <span className="new-arrival">NEW ARRIVALS</span>
                            <span className="spring-collection">
                                SPRING <br /> COLLECTION
                            </span>
                            <button className="carousel-btn" type="button">
                                Shop now
                            </button>
                        </div>
                        <img
                            src={image1}
                            alt=""
                            className="home-carousel__img"
                        />
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default VerticalCarousel;
