import React, { useEffect } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import HomeCarousel from "../components/home/HomeCarousel";
import HomeSectionDepartment from "../layout/HomeSectionDepartment";
import HomeSectionTrending from "../layout/HomeSectionTrending";
import HomeSectionSpecialOffer from "../layout/HomeSectionSpecialOffer";
import ProductShowcase from "../components/home/ProductShowcase";
import HomeSectionFurniture from "../layout/HomeSectionFurniture";
import HomeSectionBestSellers from "../layout/HomeSectionBestSellers";
import HomeNewArrivals from "../layout/HomeNewArrivals";
import HomeSectionBlog from "../layout/HomeSectionBlog";
import NeoPost from "../layout/NeoPost";
import HomeSectionSignUp from "../layout/HomeSectionSignUp";

const Home = () => {
    useEffect(() => {
        document.title = "Home | Neostore";
        const favicon = document.createElement("link");
        favicon.rel = "icon";
        favicon.href = "https://be.1-thing.in/favicon.png";
        document.head.appendChild(favicon);
    }, []);

    return (
        <>
            <Header />
            <HomeCarousel />
            <HomeSectionDepartment />
            <HomeSectionTrending />
            <HomeSectionSpecialOffer />
            <ProductShowcase />
            <HomeSectionFurniture />
            <HomeSectionBestSellers />
            <HomeNewArrivals />
            <HomeSectionBlog />
            <NeoPost />
            <HomeSectionSignUp />
            <Footer />
        </>
    );
};

export default Home;

// neopost furniture
// signup container input
// deal ends in section
