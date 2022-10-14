import * as React from 'react'
import { Context } from '../../store/appContext'
import './FetchedClasses.scss'

const FetchedClasses: React.FC = () => {

  const { store } = React.useContext(Context)    

  return (
    <div className='class__table-holder'>
      <h4>Horario de clases</h4> 
      <section className='class__table'>
        <div className='class__day'>
          <p>Lunes</p>
            {store.classes
              .filter((c: any) => c.monday === true)
              .map((c: any) => (
                <div className="get-class">
                  <p>{c.start_hour}</p>
                  <span>-</span>
                  <p>{c.end_hour}</p>
                </div>
              ))}  
        </div>
        <div className='class__day'>
          <p>Martes</p>
            {store.classes
              .filter((c: any) => c.tuesday === true)
              .map((c: any) => (
                <div className="get-class">
                  <p>{c.start_hour}</p>
                  <span>-</span>
                  <p>{c.end_hour}</p>
                </div>
              ))}  
        </div>
        <div className='class__day'>
          <p>Miercoles</p>
            {store.classes
              .filter((c: any) => c.wednesday === true)
              .map((c: any) => (
                <div className="get-class">
                  <p>{c.start_hour}</p>
                  <span>-</span>
                  <p>{c.end_hour}</p>
                </div>
              ))}  
        </div>
        <div className='class__day'>
          <p>Jueves</p>
            {store.classes
              .filter((c: any) => c.thursday === true)
              .map((c: any) => (
                <div className="get-class">
                  <p>{c.start_hour}</p>
                  <span>-</span>
                  <p>{c.end_hour}</p>
                </div>
              ))}  
        </div>
        <div className='class__day'>
          <p>Viernes</p>
            {store.classes
              .filter((c: any) => c.friday === true)
              .map((c: any) => (
                <div className="get-class">
                  <p>{c.start_hour}</p>
                  <span>-</span>
                  <p>{c.end_hour}</p>
                </div>
              ))}  
        </div>
      </section> 
    </div>
  )
}

export default FetchedClasses