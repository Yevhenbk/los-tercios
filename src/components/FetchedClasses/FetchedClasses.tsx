import * as React from 'react'
import { Context } from '../../store/appContext'
import { BiTimeFive } from 'react-icons/bi'
import './FetchedClasses.scss'
const Fade: any = require("react-reveal/Fade")


const FetchedClasses: React.FC = () => {

  const { store } = React.useContext(Context)    

  return (
    <div style={{ background: `var(--primary)`}}>
    <Fade cascade>
    <div className='class__table-holder' id='tariffs'>
        <div>
        <h2>Horarios & Tarifas</h2>
        <p className='headers__par'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum rem aliquid. Accusamus eius nam nihil cumque.</p>
        </div>
      <div className='section__class'>
        <section className='class__table'>
        <div className='class__day'>
          <div className='time__class'><BiTimeFive className='time__icon'/><h5>Lunes</h5></div>
            {store.classes
              .filter((c: any) => c.monday === true)
              .map((c: any) => (
                <div className="class__holder">
                  <p>{c.start_hour}</p>
                  <span>-</span>
                  <p>{c.end_hour}h</p>
                </div>
              ))}  
        </div>
        <div className='class__day'>
        <div className='time__class'><BiTimeFive className='time__icon'/><h5>Martes</h5></div>
            {store.classes
              .filter((c: any) => c.tuesday === true)
              .map((c: any) => (
                <div className="class__holder">
                  <p>{c.start_hour}</p>
                  <span>-</span>
                  <p>{c.end_hour}h</p>
                </div>
              ))}  
        </div>
        <div className='class__day'>
        <div className='time__class'><BiTimeFive className='time__icon'/><h5>Miercoles</h5></div>
            {store.classes
              .filter((c: any) => c.wednesday === true)
              .map((c: any) => (
                <div className="class__holder">
                  <p>{c.start_hour}</p>
                  <span>-</span>
                  <p>{c.end_hour}h</p>
                </div>
              ))}  
        </div>
        <div className='class__day'>
        <div className='time__class'><BiTimeFive className='time__icon'/><h5>Jueves</h5></div>
            {store.classes
              .filter((c: any) => c.thursday === true)
              .map((c: any) => (
                <div className="class__holder">
                  <p>{c.start_hour}</p>
                  <span>-</span>
                  <p>{c.end_hour}h</p>
                </div>
              ))}  
        </div>
        <div className='class__day'>
        <div className='time__class'><BiTimeFive className='time__icon'/><h5>Viernes</h5></div>
            {store.classes
              .filter((c: any) => c.friday === true)
              .map((c: any) => (
                <div className="class__holder">
                  <p>{c.start_hour}</p>
                  <span>-</span>
                  <p>{c.end_hour}h</p>
                </div>
              ))}  
        </div>
      </section> 
      </div>
    </div>
    </Fade>
    </div>
  )
}

export default FetchedClasses