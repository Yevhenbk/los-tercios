import Tcarousel from '../Carousel/Carousel'
import SliderButton from '../SliderButton/SliderButton'
import './Slider.scss'

const Slider: React.FC = () => {

  return (
    <div className='luc__slider'>
      <div
        className='slider__section_one'
      >
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
          <SliderButton />
        </div>
      </div>
      <div className='slider__section_two'>
        <Tcarousel />
      </div>
    </div>
  )
}

export default Slider