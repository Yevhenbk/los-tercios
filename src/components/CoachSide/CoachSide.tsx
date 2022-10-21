import CoachBlock from '../CoachBlock/CoachBlock'
import './CoachSide.scss'
const Fade: any = require("react-reveal/Fade")

const CoachSide: React.FC = () => {
  return (
    <div className='coach-side'>
      <div className='hor__br-k' />
      <div className='luc__cc'>
        <div className='coach-img__background'>
          <div className='o__quarter' />
          <div className='i__quarter'>
            <CoachBlock />
            <Fade right duration={500} cascade>
            <div className='coach__info'>
              <h1>Introducing your coach, Antonio Torres</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Laboriosam quidem tenetur explicabo laudantium ullam quis.
                Aperiam voluptate molestiae nostrum, praesentium deleniti.
              </p>
            </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className='hor__br' />
    </div>
  )
}

export default CoachSide