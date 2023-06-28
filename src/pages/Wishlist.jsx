import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import FurnitureList from "../components/product/FurnitureList";
import Footer from "../layout/Footer";
import BrowseNow from "../components/wishlist/BrowseNow";
import WishlistItems from "../components/wishlist/WishlistItems";

const Wishlist = () => {
    useEffect(() => {
        document.title = "Wishlist | Neostore";
        const favicon = document.createElement("link");
        favicon.rel = "icon";
        favicon.href = "https://be.1-thing.in/favicon.png";
        document.head.appendChild(favicon);
    }, []);

    const [isWishListEmpty, setIsWishListEmpty] = useState(false);

    return (
        <div>
            <Header />
            <FurnitureList />
            {isWishListEmpty ? <BrowseNow /> : <WishlistItems />}
            <Footer />
        </div>
    );
};

export default Wishlist;
