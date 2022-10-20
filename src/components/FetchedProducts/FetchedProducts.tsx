import * as React from 'react'
import Product from '../Cards/Product/Product'
import { Context } from '../../store/appContext'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import Search from '../Search/Search'
import Header from '../Header/Header'
import './FetchedProducts.scss'


const FetchedProducts: React.FC = () => {

  const [ query, setQuery ] = React.useState<string>('') 
  const { store } = React.useContext(Context)

  return (
    <>
    <div className='display__header'>
        <Header header='Productos' description='Merch that was designed for athletes.'/> 
        <Search placeholder="Search by name..." value={query} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value.toLowerCase())}>
          {query.length === 0 ? <AiOutlineSearch className='search__icon'/> : <MdClose className='close__search' onClick={() => setQuery('')} />}
        </Search>
      </div>
    <div className='fetched__products'>
      {store.products.filter((p: any) => p.product.toLowerCase().includes(query)).map((p: any) => (
          <Product key={p.id} img={p.img} product={p.product} size={p.size} price={p.price} />
      ))}
    </div>
    </>
  )
}

export default FetchedProducts