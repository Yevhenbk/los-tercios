import { AiFillStar } from 'react-icons/ai';

type Props = {
    img: string,
    name: string,
    rating: number,
    text: string
}

const Card: React.FC<Props> = (props) => {
  return (
    <div className='op__card'>
      <div className='op__cards__first'>
        <div className='in__between'>
          <img src={props.img} style={{width: '3rem', height: '3rem'}} className='op__card__img' />
          <div className='op__card__first__holder'>
            <p className='op__card__name'>{props.name}</p>
            <div className='op__rating'>
              {Array(props.rating)
                .fill(<AiFillStar className='star__op' />)
                .map((_, i) => (
                  <AiFillStar key={i} className='star__op' />
                ))}
            </div>
          </div>
        </div>
        <div className='google__img' />
      </div>
      <div className='op__text__holder'>
        <p className='op__text'>{props.text}</p>
      </div>
    </div>
  )
}

export default Card