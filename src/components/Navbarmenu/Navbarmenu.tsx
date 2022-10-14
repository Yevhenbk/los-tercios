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
            <Link to="/" className="menu__href">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="menu__href">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/classes" className="menu__href">
              Clases y Tarifas
            </Link>
          </li>
          <li>
            <Link to="/competitors" className="menu__href">
              Equipo de competicion
            </Link>
          </li>
          <li>
            <Link to="/products" className="menu__href">
              Productos
            </Link>
          </li>
          <li>
            <Link to="/blog" className="menu__href">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbarmenu