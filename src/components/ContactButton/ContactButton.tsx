import './ContactButton.scss'
import { Link } from 'react-router-dom'
import { RiMessage2Line } from 'react-icons/ri'
const Fade: any = require("react-reveal/Fade")

const ContactButton: React.FC = () => {
  return (
    <Link to='/contact' target='_top'>
      <Fade bottom>
        <div className='contact__icon-holder'>
          <RiMessage2Line className='contact__icon'/>  
        </div>
      </Fade>
    </Link>
    
  )
}

export default ContactButton