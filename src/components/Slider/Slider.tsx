import Tcarousel from '../Carousel/Carousel'
import SliderButton from '../SliderButton/SliderButton'
import slide1 from '../../static/img/slider_1.jpg'
import slide2 from '../../static/img/slider_3.jpg'
import slide3 from '../../static/img/slider_2.jpg'
import './Slider.scss'
const Fade: any = require("react-reveal/Fade")

const Slider: React.FC = () => {

  return (
    <div className='luc__slider'>
      <div
        className='slider__section_one'
      >
        <Fade left cascade duration={500}>
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
        </Fade>
      </div>
      <div className='slider__section_two'>
        <Tcarousel slider_1={slide1} slider_2={slide2} slider_3={slide3}/>
      </div>
    </div>
  )
}

export default Slider