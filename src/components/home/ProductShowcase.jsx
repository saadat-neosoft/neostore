import whiteSofa from "../../assets/sofa-white.png";
import beddingSet from "../../assets/bedding-sets.png";
import diningChair from "../../assets/dining-chair.png";
import livingSet from "../../assets/living-set.png";
import outdoorSet from "../../assets/outdoor-set.png";

import sticker from "../../assets/sticker.svg";

import "../../styles/components/productShowcase.scss";
import { Link } from "react-router-dom";

const ProductShowcase = () => {
    return (
        <div className="container">
            <div className="showcase">
                <div className="showcase__left">
                    <img src={whiteSofa} alt="" height="700px" />
                    <img
                        className="showcase__left__sticker"
                        src={sticker}
                        alt=""
                    />
                    <span className="showcase__left__sticker-info">
                        <span className="showcase__left__sticker-info__title">
                            SOFA & CHAIRS
                        </span>
                        <span className="showcase__left__sticker-info__highlight">
                            Need it fast?
                        </span>
                        <span className="showcase__left__sticker-info__stock">
                            See what's in stock!
                        </span>
                        <Link className="showcase__left__sticker-info__btn">
                            Shop now
                        </Link>
                    </span>
                </div>
                <div className="showcase__right">
                    <div className="showcase__right__item">
                        <img
                            src={beddingSet}
                            alt=""
                            // height="290px"
                            // width="290px"
                        />
                        <span className="showcase__right__item-title">
                            Bedding Sets
                        </span>
                        <span className="showcase__right__item-description">
                            Floral Tales Collection
                        </span>
                        <span className="showcase__right__item-discount">
                            20% OFF
                        </span>
                    </div>
                    <div className="showcase__right__item">
                        <img
                            src={diningChair}
                            alt=""
                            // height="290px"
                            // width="290px"
                        />
                        <span className="showcase__right__item-title">
                            Soleil Dining Chair
                        </span>
                        <span className="showcase__right__item-description">
                            lightweight chair
                        </span>
                        <span className="showcase__right__item-discount">
                            20% OFF
                        </span>
                    </div>
                    <div className="showcase__right__item">
                        <img
                            src={livingSet}
                            alt=""
                            // height="290px"
                            // width="290px"
                        />
                        <span className="showcase__right__item-title">
                            Living Sets
                        </span>
                        <span className="showcase__right__item-description">
                            Easy-to-match shade of beige.
                        </span>
                        <span className="showcase__right__item-discount">
                            20% OFF
                        </span>
                    </div>
                    <div className="showcase__right__item">
                        <img
                            src={outdoorSet}
                            alt=""
                            // height="290px"
                            // width="290px"
                        />
                        <span className="showcase__right__item-title">
                            Outdoor Sets
                        </span>
                        <span className="showcase__right__item-description">
                            Simplest design solutions
                        </span>
                        <span className="showcase__right__item-discount">
                            20% OFF
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductShowcase;
