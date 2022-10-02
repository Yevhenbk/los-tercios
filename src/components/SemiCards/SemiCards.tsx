import * as React from 'react'
import Scroller from '../Scroller/Scroller'
import CardSlider from '../Cards/CardSlider/CardSlider'
import './SemiCards.scss'

const SemiCards: React.FC = () => {

  return (
      <div className='semi'>
        <div className='hor__brake-holder'>
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad,
            libero, possimus obcaecati.
          </p>
        </div>
        <div className='background__text'>
          <div className='card__slider-holder'>
            <Scroller isNegative={true} offset={0.14} rotate={0}>
            <CardSlider
              style={{
                position: `relative`,
                top: `200px`,
              }}
              title='clases clases clases clases clases clases clases clases clases
              clases clases clases clases clases clases clases clases clases'
              src='https://5scontent.com/app/uploads/2020/02/5S-COUNTDOWN_02.mp4'
              text='clases'
            />
            </Scroller>
            <Scroller isNegative={true} offset={0.24} rotate={0}>
            <CardSlider
              style={{
                position: `relative`,
                top: `200px`,
                right: `100px`,
              }}
              title='equipo equipo equipo equipo equipo equipo equipo equipo equipo
              equipo equipo equipo equipo equipo equipo equipo equipo equipo'
              src='https://5scontent.com/app/uploads/2020/02/5S-COUNTDOWN_02.mp4'
              text='equipo'
            />
            </Scroller>
            <Scroller isNegative={true} offset={0.44} rotate={0}>
            <CardSlider
              style={{
                position: `relative`,
                top: `1000px`,
                left: `100px`,
              }}
              title='productos productos productos productos productos productos productos productos productos
              productos productos productos productos productos productos productos productos productos'
              src='https://5scontent.com/app/uploads/2020/02/5S-COUNTDOWN_02.mp4'
              text='productos'
            />
            </Scroller>
            <CardSlider
              title='blog blog blog blog blog blog blog blog blog
            blog blog blog blog blog blog blog blog blog'
              src='https://5scontent.com/app/uploads/2020/02/5S-COUNTDOWN_02.mp4'
              text='blog'
            />
          </div>
          <div className='card__slider-second-holder'>
            <CardSlider
              title='clases clases clases clases clases clases clases clases clases
              clases clases clases clases clases clases clases clases clases'
              src='https://5scontent.com/app/uploads/2020/02/5S-COUNTDOWN_02.mp4'
              text='clases'
            />
            <CardSlider
              title='equipo equipo equipo equipo equipo equipo equipo equipo equipo
              equipo equipo equipo equipo equipo equipo equipo equipo equipo'
              src='https://5scontent.com/app/uploads/2020/02/5S-COUNTDOWN_02.mp4'
              text='equipo'
            />
            <CardSlider
              title='productos productos productos productos productos productos productos productos productos
              productos productos productos productos productos productos productos productos productos'
              src='https://5scontent.com/app/uploads/2020/02/5S-COUNTDOWN_02.mp4'
              text='productos'
            />
            <CardSlider
              title='blog blog blog blog blog blog blog blog blog
            blog blog blog blog blog blog blog blog blog'
              src='https://5scontent.com/app/uploads/2020/02/5S-COUNTDOWN_02.mp4'
              text='blog'
            />
          </div>
        </div>
      </div>
  )
}

export default SemiCards