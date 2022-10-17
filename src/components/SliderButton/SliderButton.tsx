import { Link } from 'react-router-dom';
import './SliderButton.scss';

type Props = {
  value: string,
  children?: React.ReactNode
  link?: any,
  onClick?: any 
}

const SliderButton: React.FC<Props> = (props) => {
  return (
    <div>
      <Link to={props.link} className='thar-three' onClick={props.onClick}>
          {props.value} {props.children}
      </Link>
    </div>
  )
}

export default SliderButton