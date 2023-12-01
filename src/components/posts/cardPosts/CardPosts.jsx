import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./CardPosts.scss";

const CardPosts = ({ imageSrc, title, description, url, day }) => {
  const navigate = useNavigate();
  const handleNavigate = (index) => {
    navigate(index);
  };

  return (
    <div className="card card__posts" onClick={() => handleNavigate(url)}>
      <div className="card__content">
        <div className="card__img__wrapper">
          <img src={imageSrc} alt={title} />
        </div>
        <div className="card__day">{day}</div>
        <h2 className="card__title"> {title}</h2>
        <p className="card__des">{description}</p>
        <div className="card__footer">
          <span>read more</span>
          <span className="card__icon">
            {" "}
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardPosts;
