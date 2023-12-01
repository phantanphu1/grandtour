import { useNavigate } from 'react-router-dom';

import "./Destinations.scss"

const Destinations = () => {
    const navigate = useNavigate();
    const handleNavigate = (index) => {
        navigate(index);
      };
    const images = [
        { id: 1, title: 'tokyo', url: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg' },
        { id: 2, title: 'seoul', url: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg' },
        { id: 3, title: 'paris', url: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg' },
        { id: 4, title: 'london', url: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg' },
      ];
    
      return (
        <div className="destinations-wrapper container">
          {images.map((image) => (
            <div key={image.id} className="destinations__item" onClick={()=>handleNavigate(`${image.title}`)}>
              <img src={image.url} alt={image.title} />
              <h2>{image.title}</h2>
            </div>
          ))}
        </div>
      );
}

export default Destinations