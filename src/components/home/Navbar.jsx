import { Link } from "react-router-dom";
import "../../styles/components/navbar.scss";
import NavLinks from "./NavLinks";
import NavSearchBar from "./NavSearchBar";
import NavIcons from "./NavIcons";
import { useEffect, useState } from "react";

import closeIcon from "../../assets/icon-close.svg";

const Navbar = () => {
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
    // console.log(isFilterVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      // if (window.innerWidth > 1200) {
      //     setNavVisible(true);
      // }
      //  else if (window.innerWidth < 1200) {
      //     setNavVisible(false);
      // }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="stick">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo">
            NeoSTORE
          </Link>
          {/* <input className="nav-input" type="checkbox" id="toggle" /> */}
          <span className="toggler-container" onClick={toggleNav}>
            <label className="navbar-toggler" for="toggle">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </label>
          </span>
          <div
            className="navlist"
            style={{
              // transform: `translateX(${
              //     isNavVisible ? "150%" : "250%"
              // })`,
              // display: isNavVisible ? "flex" : "none",
              right: isNavVisible ? "0px" : "-700px",
            }}
          >
            {isNavVisible && (
              <button className="navlist__close-btn" onClick={toggleNav}>
                <img src={closeIcon} alt="" />
              </button>
            )}
            <NavLinks />
            <NavSearchBar />
            <NavIcons />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
