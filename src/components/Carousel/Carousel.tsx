import { Carousel } from 'react-bootstrap'
import './Carousel.scss';
const Fade: any = require("react-reveal/Fade")

type Props = {
  slider_1: any,
  slider_2: any,
  slider_3: any,
}

const Tcarousel: React.FC<Props> = (props) => {
  return (
    <Fade big duration={1000} cascade>
    <Carousel fade>
      <Carousel.Item interval={5000}>
        <img className="carouselImage" style={{height: '100vh', width: 'auto'}} src={props.slider_1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="carouselImage" style={{height: '100vh', width: 'auto'}} src={props.slider_2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="carouselImage" style={{height: '100vh', width: 'auto'}} src={props.slider_3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
    </Fade>
  );
};

export default Tcarousel;