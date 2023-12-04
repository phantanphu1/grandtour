import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBars,
  faCartArrowDown,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";

import "./style.scss";
import React, { useState } from "react";

const Header = ({ isColor }) => {
  const navMenu = [
    {
      title: "home",
      children: [
        {
          title: "home 1 - background image ",
          href: "/",
          icon: faCaretRight,
        },
        {
          title: "home 2 - youtube video ",
          href: "/",
          icon: faCaretRight,
        },
        {
          title: "home 3 - google inspired ",
          href: "/",
          icon: faCaretRight,
        },
        {
          title: "home 4 - travel site ",
          href: "/",
          icon: faCaretRight,
        },
      ],
    },
    {
      title: "tours",
      children: [
        {
          title: "tour classic fullwidth",
          href: "/",
          icon: faCaretRight,
          subMenu: [
            {
              title: "2 columns ",
              href: "/",
              icon: faCaretRight,
            },
            {
              title: "3 columns ",
              href: "/",
              icon: faCaretRight,
            },
            {
              title: "4 columns ",
              href: "/",
              icon: faCaretRight,
            },
          ],
        },
        {
          title: "tour classic sidebar",
          href: "/",
          icon: faCaretRight,
          subMenu: [
            {
              title: "right sidebar ",
              href: "/",
              icon: faCaretRight,
            },
            {
              title: "left sidebar ",
              href: "/",
              icon: faCaretRight,
            },
          ],
        },
        {
          title: "tour grid fullwidth",
          href: "/",
          icon: faCaretRight,
          subMenu: [
            {
              title: "2 columns ",
              href: "/",
              icon: faCaretRight,
            },
            {
              title: "3 columns ",
              href: "/",
              icon: faCaretRight,
            },
            {
              title: "4 columns ",
              href: "/",
              icon: faCaretRight,
            },
          ],
        },
        {
          title: "tour girl sidebar",
          href: "/",
          icon: faCaretRight,
          subMenu: [
            {
              title: "moutains ",
              href: "/",
              icon: faCaretRight,
            },
            {
              title: "snow & ice ",
              href: "/",
              icon: faCaretRight,
            },
          ],
        },
        {
          title: "tour list sidebar",
          href: "/",
          icon: faCaretRight,
          subMenu: [
            {
              title: "moutains ",
              href: "/",
              icon: faCaretRight,
            },
            {
              title: "snow & ice ",
              href: "/",
              icon: faCaretRight,
            },
          ],
        },
      ],
    },
    {
      title: "booking",
      children: [
        {
          title: "online payment for booking ",
          href: "/",
          icon: faCaretRight,
          subMenu: [
            {
              title: "variable tour pricing ",
              href: "/",
              icon: faCaretRight,
            },
            {
              title: "simple tour pricing ",
              href: "/",
              icon: faCaretRight,
            },
          ],
        },
        {
          title: "online payment for booking 2 ",
          href: "/",
          icon: faCaretRight,
          subMenu: [
            {
              title: "variable tour pricing 2 ",
              href: "/",
              icon: faCaretRight,
            },
            {
              title: "simple tour pricing  2",
              href: "/",
              icon: faCaretRight,
            },
          ],
        },
        {
          title: "online payment for booking 3",
          href: "/",
          icon: faCaretRight,
          subMenu: [
            {
              title: "variable tour pricing 3",
              href: "/",
              icon: faCaretRight,
            },
            {
              title: "simple tour pricing 3",
              href: "/",
              icon: faCaretRight,
            },
          ],
        },
        {
          title: "online payment for booking ",
          href: "/",
          icon: faCaretRight,
          subMenu: [
            {
              title: "variable tour pricing ",
              href: "/",
              icon: faCaretRight,
            },
            {
              title: "simple tour pricing ",
              href: "/",
              icon: faCaretRight,
            },
          ],
        },
        {
          title: "online payment for booking 2 ",
          href: "/",
          icon: faCaretRight,
          subMenu: [
            {
              title: "variable tour pricing 2 ",
              href: "/",
              icon: faCaretRight,
            },
            {
              title: "simple tour pricing  2",
              href: "/",
              icon: faCaretRight,
            },
          ],
        },
        {
          title: "online payment for booking 3",
          href: "/",
          icon: faCaretRight,
          subMenu: [
            {
              title: "variable tour pricing 3",
              href: "/",
              icon: faCaretRight,
            },
            {
              title: "simple tour pricing 3",
              href: "/",
              icon: faCaretRight,
            },
          ],
        },
      ],
    },
    {
      title: "destinations",
      children: [
        {
          title: "destinations ",
          href: "/",
          icon: faCaretRight,
        },
        {
          title: "destinations 2",
          href: "/",
          icon: faCaretRight,
        },
        {
          title: "destinations 3",
          href: "/",
          icon: faCaretRight,
        },
        {
          title: "destinations 4",
          href: "/",
          icon: faCaretRight,
        },
      ],
    },
    {
      title: "pages",
      children: [
        {
          title: "page 1 ",
          href: "/",
          icon: faCaretRight,
        },
        {
          title: "page 2  ",
          href: "/",
          icon: faCaretRight,
        },
        {
          title: "page 3  ",
          href: "/",
          icon: faCaretRight,
        },
      ],
    },
    {
      title: "blog",
      children: [
        {
          title: "blog 1 ",
          href: "/",
          icon: faCaretRight,
        },
        {
          title: "blog 2 ",
          href: "/",
          icon: faCaretRight,
        },
        {
          title: "blog 3 ",
          href: "/",
          icon: faCaretRight,
        },
        {
          title: "blog 4 ",
          href: "/",
          icon: faCaretRight,
        },
        {
          title: "blog 5 ",
          href: "/",
          icon: faCaretRight,
        },
      ],
    },
    {
      title: "shortcodes",
      children: [
        {
          title: "shortcodes 1",
          href: "/",
          icon: faCaretRight,
        },
        {
          title: "shortcodes 2",
          href: "/",
          icon: faCaretRight,
        },
        {
          title: "shortcodes 3",
          href: "/",
          icon: faCaretRight,
        },
        {
          title: "shortcodes 4",
          href: "/",
          icon: faCaretRight,
        },
        {
          title: "shortcodes 5",
          href: "/",
          icon: faCaretRight,
        },
      ],
    },
    {
      title: "shop",
      children: [
        {
          title: "shop fullwidth ",
          href: "/",
          icon: faCaretRight,
        },
        {
          title: "shop fullwidth ",
          href: "/",
          icon: faCaretRight,
        },
        {
          title: "shop fullwidth ",
          href: "/",
          icon: faCaretRight,
        },
        {
          title: "shop fullwidth ",
          href: "/",
          icon: faCaretRight,
        },
      ],
    },
  ];

  const [activeIcon, setActiveIcon] = useState(false);
  const handleClickShow = () => {
    setActiveIcon(!activeIcon);
  };
  const handleClickShow1 = () => {
    setActiveIcon(false);
  };
  return (
    <div className={`container-xl header ${isColor && "color"}`}>
      <div className="header__logo">
        <a href="/grandtour/demo/home-2">
          <img
            src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x_white.png"
            alt="logo"
          />
        </a>
      </div>
      <div className="header__menu__wrapper">
        <ul className="header__menu">
          {navMenu.map((item, index) => {
            return (
              <li className="menu__item" key={index}>
                <span className="menu__title">{item.title}</span>
                {item.children && (
                  <span>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="menu__icon"
                    />
                  </span>
                )}

                {/* menu children */}
                {item.children && (
                  <div className="menu__children">
                    <ul>
                      {item.children.map((item, index) => {
                        return (
                          <li key={index}>
                            <a
                              href={item.href}
                              className="menu__children__title"
                            >
                              {item.title}
                            </a>
                            {item.subMenu && (
                              <span>
                                <FontAwesomeIcon
                                  icon={faCaretRight}
                                  className="menu__children__icon"
                                />
                              </span>
                            )}

                            {/* sub menu */}
                            {item.subMenu && (
                              <div className="menu__sub">
                                <ul>
                                  {item.subMenu.map((item, index) => {
                                    return (
                                      <li key={index}>
                                        <a
                                          href={item.href}
                                          className="menu__sub__title"
                                        >
                                          {item.title}{" "}
                                        </a>
                                        {item.children && (
                                          <span>
                                            <FontAwesomeIcon
                                              icon={faCaretRight}
                                              className="menu__sub__icon"
                                            />
                                          </span>
                                        )}
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        <div className="header__icon__nav">
          <span>
            <FontAwesomeIcon
              icon={faBars}
              className="icon_nav"
              onClick={handleClickShow}
            />
          </span>
          <span>
            <FontAwesomeIcon icon={faCartArrowDown} className="icon_nav" />
          </span>
        </div>
        {/* menu */}
      </div>
      {/* {activeIcon ? (
        <div className="container_menu">
            <div onClick={handleClickShow}>
                <h1>đ</h1>
            </div>
        </div>
      ):null} */}
    </div>
  );
};

export default Header;
