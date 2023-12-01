
import CardSummary from './cardSummary/CardSummary';
import CardGridComponent from '../cardGridComponent/CardGridComponent';
const Summary = () => {

  const images = [
    { id: 1, title: 'Handpicked Hotels', urlImg: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png', des:'CLorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa' },
    { id: 2, title: 'World Class Service', urlImg: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png', des:'CLorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa',  },
    { id: 3, title: 'Best Price Guarantee', urlImg: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png',des:'CLorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa', },

  ];

  return (
    <CardGridComponent >
      {images.map((image, index) => (
        <CardSummary key={index} imageSrc={image.urlImg} title={image.title} description={image.des}/>
      ))}
    </CardGridComponent>
  );
}

export default Summary