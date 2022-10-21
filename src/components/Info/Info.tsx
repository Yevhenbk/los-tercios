import * as React from 'react'
import { GiStrongMan } from 'react-icons/gi'
import Scroller from '../Scroller/Scroller'
import { IoMdMan } from 'react-icons/io'
import { GiWeightLiftingUp } from 'react-icons/gi'
import cardFirst from '../../static/img/rsz_1katti__recover-min_.jpg'
import cardSecond from '../../static/img/info_2.jpg'
import './Info.scss'
const Fade: any = require("react-reveal/Fade")

const Info: React.FC = () => {

  return (
    <div className='info__holder'>
      <div className='info'>
        <div className='info__states'>
          <Fade cascade>
          <div className='info__state'>
            <IoMdMan className='state__icon' />
            <h3>Mejora de la capacidad de concentración</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              repellendus aliquam.
            </p>
          </div>
          <div className='info__state'>
            <GiWeightLiftingUp className='state__icon' />
            <h3>Aprendizaje y perfeccionamiento técnico</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              repellendus aliquam.
            </p>
          </div>
          <div className='info__state'>
            <GiStrongMan className='state__icon' />
            <h3>Mejora de potencia y fuerza muscular</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              repellendus aliquam.
            </p>
          </div>
          </Fade>
        </div>
        <div className='block__wrapper'>
        <div className='info__block'>
            <Scroller isNegative={false} offset={0.07} rotate={-3}>
            <img
              className='block__img__one'
              src={cardFirst}
              alt='katti__img'
            ></img>
            </Scroller>
            <Scroller isNegative={true} offset={0.1} rotate={3}>
            <img
              className='block__img__two'
              src={cardSecond}
              alt='oleh__img'
            ></img>
            </Scroller>
        </div>
          <Fade>
          <div className='info__par'>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              molestiae, necessitatibus dolorum?
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              repellendus aliquam in ea eius animi voluptates temporibus non
              sunt recusandae architecto minus nam voluptatibus inventore atque,
              fugiat deserunt nemo doloribus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dicta, ratione fugiat! Esse iste
              obcaecati facilis, dolore qui dolores odio quidem, nemo nobis
              perspiciatis ducimus quaerat? Laudantium necessitatibus voluptates
              exercitationem laboriosam.
            </p>
          </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Info