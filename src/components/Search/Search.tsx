import * as React from 'react'
import './Search.scss'

type Props = {
    children: React.ReactNode,
    onChange: React.ChangeEventHandler,
    placeholder: string,
    value: string
}

const Search: React.FC<Props> = (props) => {
  return (
    <form className='search__bar-holder'>
      <div className='search__wrapper'>
        <input type='text' className='search__bar' onChange={props.onChange} placeholder={props.placeholder} value={props.value}/>
        {props.children}  
      </div>
    </form>
  )
}

export default Search