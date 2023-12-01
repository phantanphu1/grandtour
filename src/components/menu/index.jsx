import React, { useState, useEffect } from "react";
import { FaBookOpen, FaShoppingCart, FaCog, FaRegHeart } from "react-icons/fa";
import "./style.scss";
const FixedMenu = () => {
  const [top, setTop] = useState(200);
  const [activeIcon, setActiveIcon] = useState(false);
  const handleClick = (icon) => {
    setActiveIcon(true);
  };
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setTop(scrollTop + 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed-menu" style={{ top: top, right: "0px" }}>
      <div>
        <div
          className={`menu-icon ${activeIcon === "youtube" ? "active" : ""}`}
          onClick={() => handleClick("youtube")}
        >
          <FaCog />
        </div>
        <div>
          <FaRegHeart />
        </div>
        <div>
          <FaBookOpen />
        </div>
        <div>
          <FaShoppingCart />
        </div>
      </div>
      <div className="info">
        {activeIcon && (
          <div className="info-content">
          </div>
        )}
      </div>
    </div>
  );
};

export default FixedMenu;
