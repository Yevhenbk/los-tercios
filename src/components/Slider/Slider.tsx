import Tcarousel from '../Carousel/Carousel'
import SliderButton from '../SliderButton/SliderButton'
import slide1 from '../../static/img/slider_1.jpg'
import slide2 from '../../static/img/slider_3.jpg'
import slide3 from '../../static/img/slider_2.jpg'
import './Slider.scss'
const Slide: any = require("react-reveal/Slide")

const Slider: React.FC = () => {

  return (
    <div className='luc__slider'>
      <div
        className='slider__section_one'
      >
        <Slide left cascade duration={400}>
        <div className='inner__holder'>
          <h1 className='header__one'>
            Lorem ipsum dolor sit amet consectetur adip.
          </h1>
          <p className='slider__paragraph'>
            Deporte con una historia milenaria. El levantamiento de pesas es
            historia viva del ser humano, sin importar la civilización o el pais
            de origen. El pesista es un atleta fuerte, rápido, con una condición
            física suprema y una gran capacidad de concentración.
          </p>
          <SliderButton value='Solicitar clase gratuita' link='/contact' />
        </div>
        </Slide>
      </div>
      <div className='slider__section_two'>
        <Tcarousel slider_1={slide1} slider_2={slide2} slider_3={slide3}/>
      </div>
    </div>
  )
}

export default Slider