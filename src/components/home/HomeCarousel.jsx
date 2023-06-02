import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/components/homeCarousel.scss";
import image1 from "../../assets/heroHomePage.png";
import CustomArrowNext from "./CustomArrowNext";
import CustomArrowPrev from "./CustomArrowPrev";

const HomeCarousel = () => {
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
    };

    return (
        <div className="home-carousel">
            <Slider {...settings}>
                <div>
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

export default HomeCarousel;
