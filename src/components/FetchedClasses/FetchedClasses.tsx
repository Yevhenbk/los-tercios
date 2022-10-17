import * as React from 'react'
import { Context } from '../../store/appContext'
import './FetchedClasses.scss'

const FetchedClasses: React.FC = () => {

  const { store } = React.useContext(Context)    

  return (
    <div className='class__table-holder' id='tariffs'>
      <h4>Horarios & Tarifas</h4> 
      <section className='class__table'>
        <div className='class__day'>
          <h5>Lunes</h5>
            {store.classes
              .filter((c: any) => c.monday === true)
              .map((c: any) => (
                <div className="class__holder">
                  <p>{c.start_hour}</p>
                  <span>-</span>
                  <p>{c.end_hour}</p>
                </div>
              ))}  
        </div>
        <div className='class__day'>
          <h5>Martes</h5>
            {store.classes
              .filter((c: any) => c.tuesday === true)
              .map((c: any) => (
                <div className="class__holder">
                  <p>{c.start_hour}</p>
                  <span>-</span>
                  <p>{c.end_hour}</p>
                </div>
              ))}  
        </div>
        <div className='class__day'>
          <h5>Miercoles</h5>
            {store.classes
              .filter((c: any) => c.wednesday === true)
              .map((c: any) => (
                <div className="class__holder">
                  <p>{c.start_hour}</p>
                  <span>-</span>
                  <p>{c.end_hour}</p>
                </div>
              ))}  
        </div>
        <div className='class__day'>
          <h5>Jueves</h5>
            {store.classes
              .filter((c: any) => c.thursday === true)
              .map((c: any) => (
                <div className="class__holder">
                  <p>{c.start_hour}</p>
                  <span>-</span>
                  <p>{c.end_hour}</p>
                </div>
              ))}  
        </div>
        <div className='class__day'>
          <h5>Viernes</h5>
            {store.classes
              .filter((c: any) => c.friday === true)
              .map((c: any) => (
                <div className="class__holder">
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