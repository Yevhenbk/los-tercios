import './ContactButton.scss'
import { Link } from 'react-router-dom'
import { RiMessage2Line } from 'react-icons/ri'

const ContactButton: React.FC = () => {
  return (
    <Link to='/contact' target='_top'>
    <div className='contact__icon-holder'>
      <RiMessage2Line className='contact__icon'/>  
    </div>
    </Link>
  )
}

export default ContactButton