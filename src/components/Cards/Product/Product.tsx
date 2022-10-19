import './Product.scss'
import { IoIosArrowUp } from 'react-icons/io'
import { HiOutlineMinus } from 'react-icons/hi'
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
      <div className='full__product'>
        <section className='product__title'>
          <h3 className='product__name'>{props.product}</h3>
          <p><span>€</span>{props.price}</p>  
        </section>
        <span className='icon__up'><IoIosArrowUp className='up'/><HiOutlineMinus className='h__line'/></span>
        <section className='product__size'>
          <h4>Size</h4>
          <div>
            {props.size.map((item: any) => (
              <p>{item}</p>
            ))}
          </div>
        </section>
        <section className='product__data'>
          <AiOutlineInfoCircle className='info__circle'/>
          <p>In order to be able to buy this product you have to contact us</p>
        </section>
        <input type='button' value='Consultar disponibilidad' className='product__button'/>
      </div>  
    </div>
    </Slide>
  )
}

export default Product