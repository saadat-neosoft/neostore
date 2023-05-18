import { useEffect } from "react";
import LoginHeader from "../layout/LoginHeader";
import Hero from "../layout/Hero";
import Footer from "../layout/Footer";

const Login = () => {
    useEffect(() => {
        document.title = "Login | Neostore";
        const favicon = document.createElement("link");
        favicon.rel = "icon";
        favicon.href = "https://be.1-thing.in/favicon.png";
        document.head.appendChild(favicon);
    }, []);

    return (
        <>
            <LoginHeader />
            <Hero />
            <Footer />
        </>
    );
};

export default Login;
