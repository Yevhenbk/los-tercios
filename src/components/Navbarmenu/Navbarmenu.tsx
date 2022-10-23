import * as React from "react";
import { Link } from "react-router-dom";
import "./Navbarmenu.scss";

const Navbarmenu: React.FC = () => {
    
  return (
    <div className="menu__body">
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu__btn">
        <span />
      </label>
      <label htmlFor="active" className="close" />
      <div className="wrapper">
        <ul>
          <li>
            <Link to="/" className="menu__href" target='_top'>
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" className="menu__href" target='_top'>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/classes" className="menu__href" target='_top'>
              Clases y Tarifas
            </Link>
          </li>
          <li>
            <Link to="/competitors" className="menu__href" target='_top'>
              Equipo de competicion
            </Link>
          </li>
          <li>
            <Link to="/calculator" className="menu__href" target='_top'>
              Calculadora
            </Link>
          </li>
          <li>
            <Link to="/products" className="menu__href" target='_top'>
              Productos
            </Link>
          </li>
          <li>
            <Link to="/contact" className="menu__href" target='_top'>
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbarmenu