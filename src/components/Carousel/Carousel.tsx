import { Carousel } from 'react-bootstrap'
import slide1 from '../../static/img/slider_1.jpg'
import slide2 from '../../static/img/slider_3.jpg'
import slide3 from '../../static/img/slider_2.jpg'
import './Carousel.scss';

const Tcarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item interval={5000}>
        <img className="carouselImage" style={{height: '100vh', width: 'auto'}} src={slide1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="carouselImage" style={{height: '100vh', width: 'auto'}} src={slide2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="carouselImage" style={{height: '100vh', width: 'auto'}} src={slide3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Tcarousel;