import * as React from 'react'
import './Tariffs.scss'
import { MdDone } from 'react-icons/md'
import { GrClose } from 'react-icons/gr'
import SliderButton from '../SliderButton/SliderButton'
const Slide: any = require("react-reveal/Slide")

const Tariffs: React.FC = () => {

  const [ tariff, setTariff ] = React.useState<boolean>(true) 

  return (
    <div className='tariffs'>
    <h2>Let's get started!</h2>
    <p className='tariffs__par'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis iure veritatis ver.</p>
    <div className='tarrifs__holder'>
      <section className='tariffs__section-one'>
        <Slide left cascade duration={400}>
        <div className="tariffs__wrapper">
          <div className={tariff ? 'tariff__active' : 'tariffs__card'} onClick={() => setTariff(true)}>
            <p>Beyound the limits</p>  
            <h5>€59.99</h5>  
          </div>
          <div className={!tariff ? 'tariff__active' : 'tariffs__card'} onClick={() => setTariff(false)}>
            <p>Unnecessary waste</p>  
            <h5>€39.99</h5>  
          </div>
        </div>
        </Slide>
        <SliderButton value='Solicitar clase gratuita' link='/contact'/>
      </section>
      <div className='vertical__br'/>
      <section className="tariffs__section-two">
        <Slide right cascade duration={400}>
        <ul className='tariffs__list'>
          <li><MdDone className='done__icon'/>{tariff ? <span>7 days per week</span> : <span>2 days per week</span>}</li>
          <li><MdDone className='done__icon'/><span>Unlimited machine usage</span></li>
          <li>{tariff ? <><MdDone className='done__icon'/> <span>Open box</span></> : <><GrClose className='close__icon'/><span className='line__through'>Open box</span></>}</li>
          <li>{tariff ? <><MdDone className='done__icon'/> <span>Whatever</span></> : <><GrClose className='close__icon'/><span className='line__through'>Whatever</span></>}</li>
          <li>{tariff ? <><MdDone className='done__icon'/> <span>Whatever</span></> : <><GrClose className='close__icon'/><span className='line__through'>Whatever</span></>}</li>
          <li><MdDone className='done__icon'/><span>Whatever</span></li>
          <li>{tariff ? <><MdDone className='done__icon'/> <span>Whatever</span></> : <><GrClose className='close__icon'/><span className='line__through'>Whatever</span></>}</li>
        </ul>
        </Slide>
      </section>
    </div>
    </div>
  )
}

export default Tariffs