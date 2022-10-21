import './Header.scss'
const Fade: any = require("react-reveal/Fade")

type Props = {
    header: string,
    description?: string
}

const Header: React.FC<Props> = (props) => {
  return (
    <Fade left duration={500} cascade>
    <div className='header__title'>
        <h1>{props.header}</h1>
        <p>{props.description}</p>
    </div>
    </Fade>
  )
}

export default Header