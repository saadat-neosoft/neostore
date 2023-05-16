import { useEffect } from "react";
import Header from "../layout/Header";

const Login = () => {
    useEffect(() => {
        document.title = "Login | Neostore";

        const favicon = document.createElement("link");
        favicon.rel = "icon";
        favicon.href = "https://be.1-thing.in/favicon.png";
        document.head.appendChild(favicon);
    }, []);

    return <Header />;
};

export default Login;
