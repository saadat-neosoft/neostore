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
        <div className="home-carousel ">
            <Slider {...settings}>
                <div>
                    <div className="carousel-container">
                        <span
                            className="hr-line"
                            // style={{
                            //     position: "absolute",
                            //     marginTop: "150px",
                            //     marginLeft: "100px",
                            //     zIndex: "1",
                            //     background: "#111111",
                            //     width: "4px",
                            //     height: "100px",
                            // }}
                        ></span>
                        <span
                            className="furniture"
                            // style={{
                            //     position: "absolute",
                            //     marginTop: "150px",
                            //     marginLeft: "122px",
                            //     zIndex: "1",
                            //     lineHeight: "48px",
                            //     fontWeight: "400",
                            //     fontSize: "40px",
                            // }}
                        >
                            Furniture <br />
                            2022
                        </span>
                        <span
                            className="new-arrival"
                            // style={{
                            //     position: "absolute",
                            //     marginTop: "408px",
                            //     marginLeft: "100px",
                            //     zIndex: "1",
                            //     lineHeight: "48px",
                            //     fontWeight: "700",
                            //     fontSize: "20px",
                            // }}
                        >
                            NEW ARRIVALS
                        </span>
                        <span
                            className="spring-collection"
                            // style={{
                            //     position: "absolute",
                            //     marginTop: "488px",
                            //     marginLeft: "100px",
                            //     zIndex: "1",
                            //     lineHeight: "84px",
                            //     fontWeight: "300",
                            //     fontSize: "70px",
                            // }}
                        >
                            SPRING <br /> COLLECTION
                        </span>
                        <button
                            className="carousel-btn"
                            type="button"
                            // style={{
                            //     position: "absolute",
                            //     marginTop: "712px",
                            //     marginLeft: "100px",
                            //     zIndex: "1",
                            //     lineHeight: "16px",
                            //     fontWeight: "500",
                            //     fontSize: "14px",
                            //     width: "145px",
                            //     height: "36px",
                            //     background: "#bb0100",
                            //     border: "none",
                            //     borderRadius: "2px",
                            //     color: "#fff",
                            //     cursor: "pointer",
                            // }}
                        >
                            Shop now
                        </button>
                        <img
                            src={image1}
                            alt=""
                            className="home-carousel__img"
                        />
                    </div>
                </div>

                <div>
                    <img src={image1} alt="" className="home-carousel__img" />
                </div>
            </Slider>
        </div>
    );
};

export default HomeCarousel;
