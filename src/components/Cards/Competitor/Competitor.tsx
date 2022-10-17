import './Competitor.scss'
import { IoIosArrowUp } from 'react-icons/io'
import { HiOutlineMinus } from 'react-icons/hi'

type Props = {
    key: number,
    src: string,
    name: string,
    snatch: number,
    cj: number,
    category: number
}

const Competitor: React.FC<Props> = (props) => {

  var string = props.name

  function Total(cj: number, snatch: number) {
    const total = cj + snatch
    return total
  }  
  return (
    <div className='competitor__card' key={props.key}>
      <img src={props.src} style={{width: '20rem', height: '33rem'}} className='competitor__img' alt='competitor__img'/>
      <div>
        <section className='competitor__title'>
          <span className='c-name__icon'>
            <p className='ri-share'>{string.charAt(0)}</p>
          </span>
          <span className='title-name__wrapper'>
            <h3 className='competitor__name'>{props.name}</h3>
          </span>
        </section>
        <span className='icon__up'><IoIosArrowUp className='up'/><HiOutlineMinus className='h__line'/></span>
        <section className='competitor__data'>
          <span className='c-data__wrapper'>
            <p>{props.snatch} kg</p>
            <h4 className='se-title__c'>Arrancada</h4>  
          </span>
          <span className='c-data__wrapper'>
            <p>{props.cj} kg</p>
            <h4 className='se-title__c'>Dos Tiempos</h4>  
          </span>
          <span className='c-data__wrapper'>
            <p>{props.category} kg</p>
            <h4 className='se-title__c'>Categoría</h4>
          </span>
          <span className='c-data__wrapper'>
            <p>{Total(props.cj, props.snatch)} kg</p>
            <h4 className='se-title__c'>Total</h4>  
          </span>
        </section>
      </div>  
    </div>
  )
}

export default Competitor