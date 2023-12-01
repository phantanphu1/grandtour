

import './CardSummary.scss';

const CardSummary = ({ imageSrc, title, description}) => {
 
  
  return (
    <div className="card card__summary" >
      <div className='card__img__wrapper'>
        <img src={imageSrc} alt={title} />
      </div>
      <h2 className='card__title'> {title}</h2>
      <p className='card__des'>{description}</p>
    </div>
  );
};

export default CardSummary;
