import * as React from 'react'
import './ClassTable.scss'
const Slide: any = require("react-reveal/Slide")

const ClassTable: React.FC = () => {

  return (
    <div className='class__table_two'>
      <Slide left cascade duration={400}>
        <div className='class__table-section-two'>
          <h1>Clases de Halterofilia</h1>
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
      </Slide>  
    </div>
  )
}

export default ClassTable