import React from "react";
import "../../styles/components/browseNow.scss";
const BrowseNow = () => {
    return (
        <div className="container">
            <div className="browse-now">
                <div className="browse-now__title">
                    SAVE YOUR FAVOURITE ITEMS
                </div>
                <div className="browse-now__description">
                    <span>Want to save the items that you love? </span>

                    <span>
                        Just click on the heart symbol beside the item and it
                        will show up here.
                    </span>
                </div>
                <button className="browse-now__btn">Browse now</button>
            </div>
        </div>
    );
};

export default BrowseNow;
