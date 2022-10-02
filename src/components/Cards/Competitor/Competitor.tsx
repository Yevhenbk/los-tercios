import './Competitor.scss'

type Props = {
    src: string,
    name: string,
    snatch: string,
    cj: string,
    category: string
}

const Competitor: React.FC<Props> = (props) => {

  function Total(cj: string, snatch: string) {
    const total = parseInt(cj) + parseInt(snatch)
    return total
  }  
  return (
    <div className='competitor__card'>
      <img src={props.src} className='competitor__img' alt='competitor__img'/>
      <div>
        <h3 className='competitor__name'>{props.name}</h3>
        <section className='competitor__data'>
          <p>Category: <span>{props.category} kg</span></p>  
          <p>Snatch: <span>{props.snatch} kg</span></p>  
          <p>C&J: <span>{props.cj} kg</span></p>  
          <p>Total: <span>{Total(props.cj, props.snatch)} kg</span></p>  
        </section>
      </div>  
    </div>
  )
}

export default Competitor