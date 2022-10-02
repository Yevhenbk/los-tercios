import * as React from 'react'
import Product from '../Cards/Product/Product'
import './FetchedProducts.scss'

const FetchedProducts: React.FC = () => {

    const [data, setData] = React.useState([])

    const getData = () => {
        fetch('productos.json',
        {
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        })
        .then(function(response){
            // console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            // console.log(myJson);
            setData(myJson);
        });
    }

    React.useEffect(() => {
        getData()
    }, [])

    return (
      <div className='fetched__products'>
        {data.map((p: any) => (
            <Product key={p.id} img={p.img} product={p.product} price={p.price} />
        ))}
      </div>
    )
}

export default FetchedProducts