import Sinclair from '../Sinclair/Sinclair'
import './SliderCalculate.scss'
const Fade: any = require("react-reveal/Fade")

const SliderCalculate: React.FC = () => {
  return (
    <Fade cascade>
    <div className='slider__calculate'>
      <div className="calculate__text">
        <div>
          <h1>Sinclair Formula</h1>
          <p>The Sinclair Coefficients are a means to compare different weight classes in olympic weightlifting. The answer to the question "What would be the total of an athlete weighing x kg if he/she were an athlete in the heaviest class of the same level of ability?" is given by the formula:</p>
          <p><div><span>ACTUAL TOTAL × SINCLAIR COEFFICIENT = SINCLAIR TOTAL</span></div><br/> 
          To compare and rank the results, especially between bodyweight categories, the International Weightlifting Federation uses the Sinclair Coefficients which are derived statistically and calculated for one Olympic cycle (for four years, starting in the Spring of each Olympic year).</p>  
        </div>
      </div>
      <div className="calculator">
        <Sinclair/>
      </div>
    </div>
    </Fade>
  )
}

export default SliderCalculate