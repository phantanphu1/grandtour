import React, { useState, useEffect } from "react";
import { FaBookOpen, FaShoppingCart, FaCog, FaRegHeart } from "react-icons/fa";
import "./style.scss";
const FixedMenu = () => {
  const [top, setTop] = useState(200);
  const [activeIcon, setActiveIcon] = useState(true);
  const [hideIcon, setShowHideIcon] = useState(false);

  const handleClickShow = () => {
    setActiveIcon(false);
    setShowHideIcon(true);
  };
  const handleIcon = () => {
    setActiveIcon(false);
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
      <div className="info">
        {/* <span onClick={handleClickShow}>k</span> */}
      </div>
    </div>
  );
};

export default FixedMenu;
