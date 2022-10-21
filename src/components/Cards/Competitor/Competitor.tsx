import './Competitor.scss'
const Slide: any = require("react-reveal/Slide")

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
    <Slide bottom duration={500}>
    <div className='competitor__card' key={props.key}>
      <img src={props.src} style={{width: '20rem', height: '33rem'}} className='competitor__img' alt='competitor__img'/>
      <div className='box__rel'/> 
      <div>
        <section className='competitor__data'>
          <div className='c-name__holder'>
            <p>{props.name}</p>
          </div>
          <span className='c-data__wrapper'>
            <p className='se-prop__c'>{props.snatch} kg</p>
            <p className='se-title__c'>Arrancada:</p>  
          </span>
          <span className='c-data__wrapper'>
            <p className='se-prop__c'>{props.cj} kg</p>
            <p className='se-title__c'>DT:</p>  
          </span>
          <span className='c-data__wrapper'>
            <p className='se-prop__c'>{props.category} kg</p>
            <p className='se-title__c'>Categoría:</p>
          </span>
          <span className='c-data__wrapper'>
            <p className='se-prop__c'>{Total(props.cj, props.snatch)} kg</p>
            <p className='se-title__c'>Total:</p>  
          </span>
        </section>
      </div>  
    </div>
    </Slide>
  )
}

export default Competitor