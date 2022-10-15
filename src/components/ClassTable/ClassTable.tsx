import * as React from 'react'
import classimg from '../../static/img/sara__img.jpg'
import './ClassTable.scss'

const ClassTable: React.FC = () => {

  return (
    <>
    <div className='class__table_'>
      <div className="table__sec-one">
        <div className='class__table-section'>
          <h3>Halterofilia</h3>
          <p className='class__table-par'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate fugit obcaecati maxime magnam iusto commodi, voluptate eveniet harum totam at exercitationem! Dolore odit nesciunt autem officiis totam nemo ullam porro.</p>
          <p className='class__table-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptate dolore! A ex deserunt ullam voluptas! Itaque numquam facere cupiditate quas velit expedita id deleniti ad iste repellendus! Magni, earum?</p>
          <div className='class__button-holder'>
            <input type='button' className='class__table-button' value='Horarios & Tarifas'/>
            <input type='button' className='class__table-button' value='Clase gratuita'/>
          </div>
        </div> 
      </div>
      <div className="table__sec-two">
        <img style={{width: '60vw', height: 'auto'}} src={classimg} alt="lifting Sara" className="table__img" />
      </div>
    </div>
    <div className='class__table_two'>
        <div className='class__table-section-two'>
          <h3>Clases</h3>
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