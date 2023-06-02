import HomeSectionHeader from "../components/home/HomeSectionHeader";

import g1 from "../assets/g1.png";
import g2 from "../assets/g2.png";
import g3 from "../assets/g3.png";
import g4 from "../assets/g4.png";
import g5 from "../assets/g5.png";
import g6 from "../assets/g6.png";
import "../styles/components/neopost.scss";
import "../styles/components/homeCarousel.scss";
import Slider from "react-slick";
import CustomArrowPrev from "../components/home/CustomArrowPrev";
import CustomArrowNext from "../components/home/CustomArrowNext";

const NeoPost = () => {
    const title = "#NEOSTOREfurniture";
    const text = "Use #neostore on your post for a chance to be featured!";

    const settings = {
        dots: false, // Show navigation dots
        infinite: true, // Enable infinite loop
        speed: 1300, // Transition speed in milliseconds
        slidesToShow: 5, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll per step
        prevArrow: <CustomArrowPrev />,
        nextArrow: <CustomArrowNext />,
        autoplay: true,
        autoplaySpeed: 1200,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="neopost">
            <HomeSectionHeader title={title} text={text} />
            {/* <div className="neopost__gallery">
                <div className="image-container">
                    <img className="neopost__gallery__img" src={g1} alt="" />
                    <div className="gradient-overlay-1"></div>
                </div>
                <img className="neopost__gallery__img" src={g2} alt="" />
                <img className="neopost__gallery__img" src={g3} alt="" />
                <img className="neopost__gallery__img" src={g4} alt="" />
                <img className="neopost__gallery__img" src={g5} alt="" />
                <div className="image-container">
                    <img className="neopost__gallery__img" src={g6} alt="" />
                    <div className="gradient-overlay-2"></div>
                </div>
            </div> */}
            {/* <div className="home-carousel"> */}
            {/* <Slider {...settings}>
                <div>
                    <img
                        src={g1}
                        alt=""
                        className="neopost__carousel-img"
                        height="100px"
                        width="100px"
                    />
                </div>
                <div>
                    <img
                        src={g2}
                        alt=""
                        className="neopost__carousel-img"
                        height="100px"
                        width="100px"
                    />
                </div>
                <div>
                    <img
                        src={g3}
                        alt=""
                        className="neopost__carousel-img"
                        height="100px"
                        width="100px"
                    />
                </div>
                <div>
                    <img
                        src={g4}
                        alt=""
                        className="neopost__carousel-img"
                        height="100px"
                        width="100px"
                    />
                </div>
            </Slider> */}

            <div>
                <Slider {...settings}>
                    <div>
                        <img
                            src={g1}
                            alt=""
                            className="neopost__carousel-img"
                        />
                    </div>
                    <div>
                        <img
                            src={g2}
                            alt=""
                            className="neopost__carousel-img"
                        />
                    </div>
                    <div>
                        <img
                            src={g3}
                            alt=""
                            className="neopost__carousel-img"
                        />
                    </div>
                    <div>
                        <img
                            src={g4}
                            alt=""
                            className="neopost__carousel-img"
                        />
                    </div>
                    <div>
                        <img
                            src={g5}
                            alt=""
                            className="neopost__carousel-img"
                        />
                    </div>
                    <div>
                        <img
                            src={g6}
                            alt=""
                            className="neopost__carousel-img"
                        />
                    </div>
                </Slider>
            </div>
        </div>
        // </div>
    );
};

export default NeoPost;
