
import CardBestTrips from './cardBestTrips/CardBestTrips';
import CardGridComponent from '../cardGridComponent/CardGridComponent';

const BestTrips = () => {

  const images = [
    { id: 1, title: 'French Autumn', urlImg: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg', des:'City Tours, Urban',duration: '5', point: 3 , sale: 0, price:2000,url:"besttrip/french" },
    { id: 2, title: 'Grand Switzerland', urlImg: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg', des:'Shopping, Mountain, Snow & Ice',duration: '6',point: 4,sale: 0, price:2000, url:"besttrip/switzerland"  },
    { id: 3, title: 'Discover Japan', urlImg: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg',des:'City Tours, Iconic',duration: '6',point: 1, sale: 10 , price:2000,url:"besttrip/japan"  },

  ];

  return (
    <CardGridComponent >
      {images.map((image, index) => (
        <CardBestTrips key={index} imageSrc={image.urlImg} title={image.title} description={image.des} duration={image.duration} point={image.point} sale={image.sale} price={image.price}  url={image.url}/>
      ))}
    </CardGridComponent>
  );
}

export default BestTrips