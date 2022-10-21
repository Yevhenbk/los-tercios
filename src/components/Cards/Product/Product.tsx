import './Product.scss'
import { AiOutlineInfoCircle } from 'react-icons/ai'
const Slide: any = require("react-reveal/Slide")

type Props = {
    key: number,
    product: string,
    price: string,
    img: string,
    size: string[]
}

const Product: React.FC<Props> = (props) => {

  return (
    <Slide bottom duration={500}>
    <div className='product__card' key={props.key}>
      <img src={props.img} style={{height: '30rem', width: '100%'}} className='product__img' alt='product__img'/>
      <div className='box__rel'/> 
      <div className='full__product'>
        <section className='product__title'>
          <p className='product__name'>{props.product}</p>
          <p><span>€</span>{props.price}</p>  
        </section>
        <section className='product__size'>
          <p>Size</p>
          <div>
            {props.size.map((item: any) => (
              <p>{item}</p>
            ))}
          </div>
        </section>
        <section className='product__data'>
          <AiOutlineInfoCircle className='info__circle'/>
          <p>In order to be able to purchase this product you have to contact us</p>
        </section>
        <input type='button' value='Consultar disponibilidad' className='product__button'/>
      </div>  
    </div>
    </Slide>
  )
}

export default Product