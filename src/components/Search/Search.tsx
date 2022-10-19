import * as React from 'react'
import './Search.scss'
const Fade: any = require("react-reveal/Fade")

type Props = {
    children: React.ReactNode,
    onChange: React.ChangeEventHandler,
    placeholder: string,
    value: string
}

const Search: React.FC<Props> = (props) => {
  return (
    <form className='search__bar-holder'>
      <Fade big>
      <div className='search__wrapper'>
        <input type='text' className='search__bar' onChange={props.onChange} placeholder={props.placeholder} value={props.value}/>
        {props.children}  
      </div>
      </Fade>
    </form>
  )
}

export default Search