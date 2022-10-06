import './Product.scss'

type Props = {
    key: number,
    product: string,
    price: string,
    img: string
}

const Product: React.FC<Props> = (props) => {

  return (
    <div className='product__card' key={props.key}>
      <img src={props.img} className='product__img' alt='product__img'/>
      <div>
        <h3 className='product__name'>{props.product}</h3>
        <section className='product__data'>
          <p>Precio: <span>{props.price} €</span></p>  
        </section>
        <input type='button' value='Comprar' className='product__button'/>
      </div>  
    </div>
  )
}

export default Product