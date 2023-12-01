import CardGridComponent from "../../components/cardGridComponent/CardGridComponent";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreenButton,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import { FaFacebook, FaPinterest } from "react-icons/fa";
import { CiTwitter, CiYoutube, CiInstagram } from "react-icons/ci";
const Footer = () => {
  return (
    <div className="footer__wrapper">
      <CardGridComponent>
        <div className="Footer__item">
          <h4>Our Awards</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            earum tempora facilis ex enim, debitis at eveniet, veniam nam
            blanditiis qui beatae et ut, excepturi neque impedit quae illum
            dolores!
          </p>
          <div className="footer__award__img">
            <img
              src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png"
              alt=""
            />
          </div>
        </div>
        <div className="Footer__item">
          <h4>Contact Info</h4>
          <div className="footer__contact__item">
            <span>
              {" "}
              <FontAwesomeIcon icon={faMobileScreenButton} className="icon" />
            </span>
            <span>1-567-124-44227</span>
          </div>
          <div className="footer__contact__item">
            <span>
              {" "}
              <FontAwesomeIcon icon={faLocationDot} className="icon" />
            </span>
            <span>184 Main Street East Perl Habour 8007</span>
          </div>
          <div className="footer__contact__item">
            <span>
              {" "}
              <FontAwesomeIcon icon={faClock} className="icon" />
            </span>
            <span>Mon - Sat 8.00 - 18.00 Sunday CLOSED</span>
          </div>
          <div className="social__media">
            <span >
           <FaFacebook
                className="icon"
                style={{ color: "#2d5f9a",background:"#ffff"}}
                />
            </span>
            <span>
              {" "}
              <CiTwitter
                className="icon"
                style={{ color: "#ffff", backgroundColor: "#02c3f3" }}
              />
            </span>
            <span>
              {" "}
              <CiYoutube
                className="icon"
                style={{ color: "#ffff", backgroundColor: "#cc171f" }}
              />
            </span>
            <span>
              {" "}
              <FaPinterest className="icon" style={{ color: "#ffff",backgroundColor:"#cc171f" }} />
            </span>
            <span>
              {" "}
              <CiInstagram className="icon" style={{ color: "#ffff",backgroundColor:"#405de6" }} />
            </span>
          </div>
        </div>
        <div className="Footer__item">
          <h4>Recent Trips</h4>
          <CardGridComponent className={"footer__container"}>
            <a href="/" className="footer__img">
              <img
                src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg"
                alt=""
              />
            </a>
            <a href="/" className="footer__img">
              <img
                src="https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg"
                alt=""
              />
            </a>
            <a href="/" className="footer__img">
              <img
                src="https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg"
                alt=""
              />
            </a>
            <a href="/" className="footer__img">
              <img
                src="https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg"
                alt=""
              />
            </a>
            <a href="/" className="footer__img">
              <img
                src="https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg"
                alt=""
              />
            </a>
            <a href="/" className="footer__img">
              <img
                src="https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg"
                alt=""
              />
            </a>
          </CardGridComponent>
        </div>
      </CardGridComponent>
      <div className="footer__line"></div>
      <div className="footer__end container">
        <div className="End__title">
          © Copyright Grand Tour Theme Demo - Theme by ThemeGoods
        </div>
        <div className="footer__nav__menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Tours</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/"> Purchase Theme</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
