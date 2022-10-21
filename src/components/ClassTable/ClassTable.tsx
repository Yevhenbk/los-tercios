import * as React from 'react'
import './ClassTable.scss'
const Fade: any = require("react-reveal/Fade")

const ClassTable: React.FC = () => {

  return (
    <div className='class__table_two'>
      <Fade cascade>
        <div className='class__table-section-two'>
          <h1>Clases de Halterofilia</h1>
          <p className='class__table-p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate fugit obcaecati maxime magnam iusto commodi, voluptate eveniet harum totam at exercitationem! Dolore odit nesciunt autem officiis totam nemo ullam porro.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt alias aliquam a dolore nam consequatur earum assumenda accusamus, nobis porro facere fugit obcaecati similique consequuntur repellat, animi quas quod odit?</p>
          {/* <ul>
            <li>Squat</li>
            <li>Deadlift</li>
            <li>Press Over Head</li>
            <li>Whatever</li>
          </ul> */}
          <p className='class__table-p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate fugit obcaecati maxime magnam iusto commodi, voluptate eveniet harum totam at exercitationem! Dolore odit nesciunt autem officiis totam nemo ullam porro.</p>
          <p className='class__table-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptates officia! Temporibus sapiente iste architecto enim, explicabo optio nulla, ipsam suscipit asperiores eum ratione sed, rerum autem at voluptatibus facere?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perferendis esse illum consequuntur praesentium est doloribus delectus placeat quam, nulla accusamus dolor itaque? Laboriosam perspiciatis nulla ut rem, mollitia deserunt.</p>
        </div>
      </Fade>  
    </div>
  )
}

export default ClassTable