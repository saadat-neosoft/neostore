import HomeSectionHeader from "../components/home/HomeSectionHeader";
import blog1 from "../assets/blog-1.png";
import blog2 from "../assets/blog-2.png";
import blog3 from "../assets/blog-3.png";
import { Link } from "react-router-dom";

import "../styles/components/blogSection.scss";

const HomeSectionBlog = () => {
    const title = "FROM OUR BLOG";

    const text =
        "See how our customers have styled davici products in their home";
    return (
        <div className="blog-section">
            <HomeSectionHeader title={title} text={text} />
            <div className="blog-cards">
                <div className="blog-cards__card">
                    <div className="blog-cards__card__img-container">
                        <img src={blog1} alt="" />
                        <span className="blog-cards__card__img-container__date">
                            <span className="blog-cards__card__img-container__date__day">
                                28
                            </span>
                            <span className="blog-cards__card__img-container__date__month">
                                NOV
                            </span>
                        </span>
                    </div>
                    <div className="blog-cards__card__topic-container">
                        <span className="blog-cards__card__topic-container__category">
                            BEDROOM CHAIR
                        </span>
                        <span className="blog-cards__card__topic-container__title">
                            Perfect Bedroom Corner Chair
                        </span>
                    </div>
                    <div className="blog-cards__card__description-container">
                        <span className="blog-cards__card__description-container__description">
                            An accent chair is a great focal point, adds
                            contrast, and complements the room’s decor.
                        </span>
                        <Link className="blog-cards__card__description-container__btn">
                            READ MORE
                        </Link>
                    </div>
                </div>
                <div className="blog-cards__card">
                    <div className="blog-cards__card__img-container">
                        <img src={blog2} alt="" />
                        <span className="blog-cards__card__img-container__date">
                            <span className="blog-cards__card__img-container__date__day">
                                28
                            </span>
                            <span className="blog-cards__card__img-container__date__month">
                                NOV
                            </span>
                        </span>
                    </div>
                    <div className="blog-cards__card__topic-container">
                        <span className="blog-cards__card__topic-container__category">
                            FURNITURE
                        </span>
                        <span className="blog-cards__card__topic-container__title">
                            A Beautiful Sunday Morning
                        </span>
                    </div>
                    <div className="blog-cards__card__description-container">
                        <span className="blog-cards__card__description-container__description">
                            Color sets the tone for any space and dramatically
                            impacts the room’s atmosphere.
                        </span>
                        <Link className="blog-cards__card__description-container__btn">
                            READ MORE
                        </Link>
                    </div>
                </div>
                <div className="blog-cards__card">
                    <div className="blog-cards__card__img-container">
                        <img src={blog3} alt="" />
                        <span className="blog-cards__card__img-container__date">
                            <span className="blog-cards__card__img-container__date__day">
                                28
                            </span>
                            <span className="blog-cards__card__img-container__date__month">
                                NOV
                            </span>
                        </span>
                    </div>
                    <div className="blog-cards__card__topic-container">
                        <span className="blog-cards__card__topic-container__category">
                            DINING CHAIR
                        </span>
                        <span className="blog-cards__card__topic-container__title">
                            Maximalism Design Style
                        </span>
                    </div>
                    <div className="blog-cards__card__description-container">
                        <span className="blog-cards__card__description-container__description">
                            A maximalist space is interesting to look at.
                            Contrast and color are everything.
                        </span>
                        <Link className="blog-cards__card__description-container__btn">
                            READ MORE
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSectionBlog;
