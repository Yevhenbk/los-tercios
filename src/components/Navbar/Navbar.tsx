import * as React from 'react'
import logo from '../../static/img/rsz_logo__yellow.png'
import { AiFillInstagram } from 'react-icons/ai'
import Navbarmenu from '../Navbarmenu/Navbarmenu'
import './Navbar.scss'

const Navbar: React.FC = () => {

  const [navbar, setNavbar] = React.useState<boolean>(false)

  const showColor = () => {
    if (window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', showColor)

  return (
    <div
    className={
        navbar ? 'luc__nav active__nav fixed-top' : 'luc__nav fixed-top'
    }
    >
      <img src={logo} className='logo__navbar' />
      <div className='luc__nav__icons'>
          <AiFillInstagram className='icon__small' />
          <div className='menu__grand'>
          <Navbarmenu />
          </div>
      </div>
    </div>
  )
}

export default Navbar