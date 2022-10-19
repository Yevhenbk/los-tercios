import { Link } from 'react-router-dom';
import './SliderButton.scss';
const Slide: any = require("react-reveal/Slide")

type Props = {
  value: string,
  children?: React.ReactNode
  link?: any,
  onClick?: any 
}

const SliderButton: React.FC<Props> = (props) => {
  return (
    <Slide left duration={400}>
    <div>
      <Link to={props.link} className='thar-three' onClick={props.onClick}>
          {props.value} {props.children}
      </Link>
    </div>
    </Slide>
  )
}

export default SliderButton