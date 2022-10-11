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
      <div className='full__product'>
        <section className='product__title'>
          <h3 className='product__name'>{props.product}: {props.price} €</h3>
          <p>{props.price} €</p>  
        </section>
        <section className='product__data'>
          <p>In order to be able to buy this product you have to contact us</p>
        </section>
        <input type='button' value='Comprar' className='product__button'/>
      </div>  
    </div>
  )
}

export default Product