import * as React from 'react'
import classimg from '../../static/img/sara__img.jpg'
import Tcarousel from '../Carousel/Carousel'
import slide1 from '../../static/img/slider_1.jpg'
import slide2 from '../../static/img/slider_3.jpg'
import slide3 from '../../static/img/slider_2.jpg'
import './ClassTable.scss'
const Slide: any = require("react-reveal/Slide")
const Fade: any = require("react-reveal/Fade")

const ClassTable: React.FC = () => {

  return (
    <>
    <div className='class__table_'>
      <div className="table__sec-one">
        <Slide left cascade duration={400}>
        <div className='class__table-section'>
          <h1>Halterofilia</h1>
          <p className='class__table-par'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate fugit obcaecati maxime magnam iusto commodi, voluptate eveniet harum totam at exercitationem! Dolore odit nesciunt autem officiis totam nemo ullam porro.</p>
          <p className='class__table-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptate dolore! A ex deserunt ullam voluptas! Itaque numquam facere cupiditate quas velit expedita id deleniti ad iste repellendus! Magni, earum?</p>
          <div className='class__button-holder'>
          </div>
        </div> 
        </Slide>
      </div>
      <div className="slider__section_two">
         <Tcarousel slider_1={slide1} slider_2={slide2} slider_3={slide3}/>
      </div>
    </div>
    <div className='class__table_two'>
        <div className='class__table-section-two'>
          <h1>Clases</h1>
          <p className='class__table-p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate fugit obcaecati maxime magnam iusto commodi, voluptate eveniet harum totam at exercitationem! Dolore odit nesciunt autem officiis totam nemo ullam porro.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt alias aliquam a dolore nam consequatur earum assumenda accusamus, nobis porro facere fugit obcaecati similique consequuntur repellat, animi quas quod odit?</p>
          <ul>
            <li>Squat</li>
            <li>Deadlift</li>
            <li>Press Over Head</li>
            <li>Whatever</li>
          </ul>
          <p className='class__table-p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate fugit obcaecati maxime magnam iusto commodi, voluptate eveniet harum totam at exercitationem! Dolore odit nesciunt autem officiis totam nemo ullam porro.</p>
      </div>
    </div>
    </>
  )
}

export default ClassTable