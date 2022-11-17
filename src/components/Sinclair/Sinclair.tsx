import * as React from 'react'
import { FaRegDotCircle } from 'react-icons/fa'
import './Sinclair.scss'

const Sinclair: React.FC = () => {
  const [values, setValues] = React.useState({total: 0, bodyweight: 0, isMale: true})
  const [answer, setAnswer] = React.useState<number>(0)

  function SinclairFormula(total: any, bodyweight: any, isMale?: boolean) {
    let output
    
    if(isMale === true) {
        output = total*(10**(0.751945030*((Math.log10(bodyweight/175.508))**2)))
    } else {
        output = total*(10**(0.783497476*((Math.log10(bodyweight/153.655))**2)))
    } return setAnswer(output)

  }

  const changeHandler = (e: any) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <form className='sinclair'>
      <div className={values.isMale ? 'sinclair__check' : 'sinclair__active'} onClick={() => setValues({...values, isMale: true})}><FaRegDotCircle className='dot_tar'/><p>Male</p></div>
      <div className={!values.isMale ? 'sinclair__check' : 'sinclair__active'}  onClick={() => setValues({...values, isMale: false})}><FaRegDotCircle className='dot_tar'/><p>Female</p></div>
      <input type='number' name='total' id="total" placeholder='Total' className='sinclair__input' onChange={changeHandler}/>
      <input type='number' name='bodyweight' id="bodyweight" placeholder='Peso corporal' className='sinclair__input' onChange={changeHandler}/>
      <input type='button' value='Calculate' className='sinclair__button' onClick={() => {SinclairFormula(values.total, values.bodyweight, values.isMale)}} disabled={values.bodyweight && values.total !== 0 ? false : true} />
      <p className='sinclair__total'>Sinclair total : {answer.toString().slice(0, 5)}</p>
    </form>
  )
}

export default Sinclair