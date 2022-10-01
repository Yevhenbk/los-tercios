import { AiFillStar } from 'react-icons/ai';

type Props = {
    img: string,
    name: string,
    rating: number,
    text: string
}

const CardFree: React.FC<Props> = (props) => {
  return (
    <div className='free__card'>
      <div className='free__text__holder'>
        <p className='free__text'>{props.text}</p>
      </div>
      <div className='free__cards__first'>
        <div className='in__between'>
          <img src={props.img} className='free__card__img' />
          <div className='free__card__first__holder'>
            <p className='free__card__name'>{props.name}</p>
            <div className='op__rating'>
              {Array(props.rating)
                .fill(<AiFillStar className='star__op' />)
                .map((_, i) => (
                  <AiFillStar key={i} className='star__op' />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardFree