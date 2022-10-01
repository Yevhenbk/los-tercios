import { Link } from "react-router-dom";
import "./SliderButton.scss";

const SliderButton: React.FC = () => {
  return (
    <div>
      <Link to="/contact" className="thar-three">
          Solicitar clase gratis
      </Link>
    </div>
  )
}

export default SliderButton