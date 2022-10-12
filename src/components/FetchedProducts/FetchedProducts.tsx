import * as React from 'react'
import Product from '../Cards/Product/Product'
import { Context } from '../../store/appContext'
import './FetchedProducts.scss'

const FetchedProducts: React.FC = () => {

    const { store } = React.useContext(Context)

    return (
      <div className='fetched__products'>
        {store.products.map((p: any) => (
            <Product key={p.id} img={p.img} product={p.product} size={p.size} price={p.price} />
        ))}
      </div>
    )
}

export default FetchedProducts