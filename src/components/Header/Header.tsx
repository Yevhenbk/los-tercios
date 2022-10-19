import './Header.scss'
const Fade: any = require("react-reveal/Fade")

type Props = {
    header: string
}

const Header: React.FC<Props> = (props) => {
  return (
    <div className='header__title'>
      <Fade big>
        <h1>{props.header}</h1>
      </Fade>
    </div>
  )
}

export default Header