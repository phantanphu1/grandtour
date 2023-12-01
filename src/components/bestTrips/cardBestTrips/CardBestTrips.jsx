import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faStar,
  faStarOfDavid
} from "@fortawesome/free-solid-svg-icons";

import './CardBestTrip.scss';

const CardBestTrip = ({ imageSrc, title, description,duration,point,sale,price,url }) => {
  const salePice = price - price*sale/100 
  const roundedNumber = parseFloat(salePice.toFixed(1));
  const navigate = useNavigate();
    const handleNavigate = (index) => {
        navigate(index);
      };

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.round(point)) {
      stars.push(<FontAwesomeIcon key={i}
        icon={faStar}
      />); 
    } else {
      stars.push(<FontAwesomeIcon key={i}
        icon={faStarOfDavid}
      />); 
    }
  }
  
  return (
    <div className="card card__besttrip" onClick={()=>handleNavigate(url)}>
      <div className='card__content'>
      <div className='card__img__wrapper'>
        <img src={imageSrc} alt={title} />
        <div className='card__price'>
          <span className='card__initial__price'>{price !== roundedNumber && price }</span>
          <span className='card__reduced__price'>{roundedNumber}</span>
        </div>
        {price !== roundedNumber &&  <span className='card__sale'>sale</span> }
       
      </div>
     
      <h2 className='card__title'> {title}</h2>
      <p className='card__des'>{description}</p>
      <div className='card__footer'>
        <div className='card__review'>
          <span className='card__star__icon'>
         {stars}
          
          </span>
          <span >{point}{" "}reviews</span>
        </div>
        <div className='card__duration'>
          <span className='card__duration__icon'> <FontAwesomeIcon
            icon={faClock}
          /></span>
          <span>{duration}{" "}day</span>
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default CardBestTrip;
