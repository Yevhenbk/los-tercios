import * as React from 'react'
import './Tariffs.scss'
import { MdDone } from 'react-icons/md'
const Fade: any = require("react-reveal/Fade")

const Tariffs: React.FC = () => {

  return (
    <div style={{ background: `var(--primary)`}}>
    <Fade cascade>
    <div className='tariffs'>
      <div  className='feo_p'>
        <h2>Let's get started!</h2>
        <p className='tariffs__par'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis iure veritatis ver.</p>
      </div>
      <div className='tarrifs__holder'>
      <div className='tariffs__one'>
        <div className='t-one__header'>
          <h5>Beyound the limits</h5>
          <h5>59.99€</h5>
        </div>
        <p>Includes the following :</p>
        <ul>
          <li><MdDone className='md__done'/> Some info</li>
          <li><MdDone className='md__done'/> Some info</li>
          <li><MdDone className='md__done'/> Some info</li>
          <li><MdDone className='md__done'/> Some info</li>
          <li><MdDone className='md__done'/> Some info</li>
        </ul>
      </div>
      <div className='tariffs__one'>
        <div className='t-one__header'>
          <h5>Unnecessary waste</h5>
          <h5>35.99€</h5>
        </div>
        <p>Includes the following :</p>
        <ul>
          <li><MdDone className='md__done'/> Some info</li>
          <li><MdDone className='md__done'/> Some info</li>
          <li><MdDone className='md__done'/> Some info</li>
          <li><MdDone className='md__done'/> Some info</li>
          <li><MdDone className='md__done'/> Some info</li>
        </ul>
      </div>
    </div>
    <p className='class__table-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem corrupti veritatis facere repellat dignissimos aspernatur
    sapiente nisi itaque maxime recusandae beatae, ut aliquid, inventore pariatur suscipit, ad esse quis. Voluptatem! Lorem ipsum dolor sit amet, consectetur 
    adipisicing elit. Incidunt deserunt doloribus harum, cum facilis velit tenetur ex enim. Molestiae fugiat quaerat repudiandae maxime consectetur vero, 
    corrupti illum soluta at nesciunt!</p>
    </div>
    </Fade>
    </div>
  )
}

export default Tariffs