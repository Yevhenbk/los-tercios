import noimage from '../../static/img/noimage.jpg'
import './CoachBlock.scss'

const CoachBlock: React.FC = () => {
  return (
    <div className='coach__block-holder'>
      <div className='sup'>
        <img src={noimage} className='coach-img' alt='toni__torres'/>
      </div>
    </div>
  )
}

export default CoachBlock