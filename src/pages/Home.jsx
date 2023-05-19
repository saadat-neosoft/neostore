import React, { useEffect } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import HomeCarousel from "../components/home/HomeCarousel";
import image1 from "../assets/heroHomePage.png";
import image2 from "../assets/pana.png";
// import image2 from "../assets/pana.png";

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
            <Footer />
        </>
    );
};

export default Home;
