
import CardPosts from './cardPosts/CardPosts';
import CardGridComponent from '../cardGridComponent/CardGridComponent';

const Posts = () => {

  const images = [
    { id: 1, title: 'Memorial Day to Someone Told Me to Travel', urlImg: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg', des:'CLorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa',day: 'DECEMBER 10, 2016', url:'post1' },
    { id: 2, title: '7 Tips For Nomads On A Budget Trips', urlImg: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg', des:'CLorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa', day: 'DECEMBER 10, 2016',url:'post2' },
    { id: 3, title: 'Taking A Travel Blog Victory Lap', urlImg: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg',des:'CLorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa', day: 'DECEMBER 10, 2016',url:'post3'},

  ];

  return (
    <CardGridComponent >
      {images.map((image, index) => (
        <CardPosts key={index} imageSrc={image.urlImg} title={image.title} description={image.des}  url={image.url} day={image.day}/>
      ))}
    </CardGridComponent>

  );
}

export default Posts