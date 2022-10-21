import { Link } from 'react-router-dom';
import './SliderButton.scss';
const Fade: any = require("react-reveal/Fade")

type Props = {
  value: string,
  children?: React.ReactNode
  link?: any,
  onClick?: any 
}

const SliderButton: React.FC<Props> = (props) => {
  return (
    <Fade left duration={500}>
    <div>
      <Link to={props.link} className='thar-three' onClick={props.onClick}>
          {props.value} {props.children}
      </Link>
    </div>
    </Fade>
  )
}

export default SliderButton