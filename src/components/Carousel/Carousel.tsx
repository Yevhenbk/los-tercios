import { Carousel } from 'react-bootstrap'
import slide1 from '../../static/img/slider__alex_.jpg'
import slide2 from '../../static/img/katti__split-min_.jpg'
import slide3 from '../../static/img/toni__setup_.jpg'
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