import * as React from 'react'
import { Link } from 'react-router-dom'
import './Tariffs.scss'
import { MdDone } from 'react-icons/md'
import { GrClose } from 'react-icons/gr'
import { FaRegDotCircle } from 'react-icons/fa'
import { AiOutlineForm } from 'react-icons/ai'

const Tariffs: React.FC = () => {

  const [ tariff, setTariff ] = React.useState<boolean>(true) 

  return (
    <div className='tariffs'>
      <div>
        <h2>Let's get started!</h2>
        <p className='tariffs__par'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis iure veritatis ver.</p>
      </div>
    <div className='tarrifs__holder'>
      <section className='tariffs__section-one'>
        <div className="tariffs__wrapper">
          <div className={tariff ? 'tariff__active' : 'tariffs__card'} onClick={() => setTariff(true)}>
            <div><FaRegDotCircle className='dot_tar'/><p>Beyound the limits</p></div>
            <h5>€59.99</h5>  
          </div>
          <div className={!tariff ? 'tariff__active' : 'tariffs__card'} onClick={() => setTariff(false)}>
            <div><FaRegDotCircle className='dot_tar'/><p>Unnecessary waste</p>  </div>
            <h5>€39.99</h5>  
          </div>
        </div>
      </section>
      <div className='vertical__br'/>
      <section className="tariffs__section-two">
        <ul className='tariffs__list'>
          <li><MdDone className='done__icon'/>{tariff ? <span>7 days per week</span> : <span>2 days per week</span>}</li>
          <li><MdDone className='done__icon'/><span>Unlimited machine usage</span></li>
          <li>{tariff ? <><MdDone className='done__icon'/> <span>Open box</span></> : <><GrClose className='close__icon'/><span className='line__through'>Open box</span></>}</li>
          <li>{tariff ? <><MdDone className='done__icon'/> <span>Whatever</span></> : <><GrClose className='close__icon'/><span className='line__through'>Whatever</span></>}</li>
          <li>{tariff ? <><MdDone className='done__icon'/> <span>Whatever</span></> : <><GrClose className='close__icon'/><span className='line__through'>Whatever</span></>}</li>
          <li><MdDone className='done__icon'/><span>Whatever</span></li>
          <li>{tariff ? <><MdDone className='done__icon'/> <span>Whatever</span></> : <><GrClose className='close__icon'/><span className='line__through'>Whatever</span></>}</li>
        </ul>
      </section>
    </div>
    <section className='contact__tariffs'>
      <Link to='/contact'>
      <div className='tariffs__button-contact'>
        <div className='button-tar__holder'>
          <AiOutlineForm className='outline__form'/>
          <p>Contáctanos</p>
        </div>
      </div>
      </Link>
      {/* <div className='data__tariffs-holder'>
        <p>Email : halterofilialostercios@gmail.com</p>
        <p>WhatsApp : +3466666666 / +3466666666</p>
      </div> */}
    </section>
    </div>
  )
}

export default Tariffs