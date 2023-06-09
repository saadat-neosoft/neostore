import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";

import SwiperVertical from "./pages/SwiperVertical";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/product" element={<Product />} />
                <Route path="/product-detail" element={<ProductDetail />} />
                <Route path="/swiper" element={<SwiperVertical />} />
            </Routes>
        </>
    );
}

export default App;
