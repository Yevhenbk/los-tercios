import * as React from 'react'
import Scroller from '../Scroller/Scroller'
import CardSlider from '../Cards/CardSlider/CardSlider'
import './SemiCards.scss'
const Fade: any = require("react-reveal/Fade")

const SemiCards: React.FC = () => {

  return (
      <div className='semi'>
        <Fade bottom cascade>
        <div className='hor__brake-holder'>
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad,
            libero, possimus obcaecati.
          </p>
        </div>
        </Fade>
        <div className='background__text'>
          <div className='card__slider-holder'>
            <Scroller isNegative={true} offset={0.14} rotate={0}>
            <CardSlider
              link='/classes'
              style={{
                position: `relative`,
                top: `200px`,
              }}
              title='clases clases clases clases clases clases clases clases clases
              clases clases clases clases clases clases clases clases clases'
              imgSrc='https://res.cloudinary.com/yevhenbk/image/upload/v1664721928/photo_5807741867159304757_y_1_k80k1i.jpg'
              text='clases'
            />
            </Scroller>
            <Scroller isNegative={true} offset={0.24} rotate={0}>
            <CardSlider
              link='/competitors'
              style={{
                position: `relative`,
                top: `200px`,
                right: `100px`,
              }}
              title='equipo equipo equipo equipo equipo equipo equipo equipo equipo
              equipo equipo equipo equipo equipo equipo equipo equipo equipo'
              imgSrc='https://res.cloudinary.com/yevhenbk/image/upload/v1664722004/katti__focused_gd1kcb.jpg'
              text='equipo'
            />
            </Scroller>
            <Scroller isNegative={true} offset={0.44} rotate={0}>
            <CardSlider
              link='/products'
              style={{
                position: `relative`,
                top: `1000px`,
                left: `100px`,
              }}
              title='productos productos productos productos productos productos productos productos productos
              productos productos productos productos productos productos productos productos productos'
              imgSrc='https://5scontent.com/app/uploads/2020/02/5S-COUNTDOWN_02.mp4'
              text='productos'
            />
            </Scroller>
            <CardSlider
              link='/contact'
              title='blog blog blog blog blog blog blog blog blog
            blog blog blog blog blog blog blog blog blog'
              imgSrc='https://5scontent.com/app/uploads/2020/02/5S-COUNTDOWN_02.mp4'
              text='blog'
            />
          </div>
          <div className='card__slider-second-holder'>
            <CardSlider
              link='/classes'
              title='clases clases clases clases clases clases clases clases clases
              clases clases clases clases clases clases clases clases clases'
              imgSrc='https://5scontent.com/app/uploads/2020/02/5S-COUNTDOWN_02.mp4'
              text='clases'
            />
            <CardSlider
              link='/competitors'
              title='equipo equipo equipo equipo equipo equipo equipo equipo equipo
              equipo equipo equipo equipo equipo equipo equipo equipo equipo'
              imgSrc='https://5scontent.com/app/uploads/2020/02/5S-COUNTDOWN_02.mp4'
              text='equipo'
            />
            <CardSlider
              link='/products'
              title='productos productos productos productos productos productos productos productos productos
              productos productos productos productos productos productos productos productos productos'
              imgSrc='https://5scontent.com/app/uploads/2020/02/5S-COUNTDOWN_02.mp4'
              text='productos'
            />
            <CardSlider
              link='/contact'
              title='blog blog blog blog blog blog blog blog blog
            blog blog blog blog blog blog blog blog blog'
              imgSrc='https://5scontent.com/app/uploads/2020/02/5S-COUNTDOWN_02.mp4'
              text='blog'
            />
          </div>
        </div>
      </div>
  )
}

export default SemiCards