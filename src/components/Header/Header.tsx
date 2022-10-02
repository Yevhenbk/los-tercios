import './Header.scss'

type Props = {
    header: string
}

const Header: React.FC<Props> = (props) => {
  return (
    <div className='header__title'>
      <h1>{props.header}</h1>
      <div className='line__brake'/>  
    </div>
  )
}

export default Header