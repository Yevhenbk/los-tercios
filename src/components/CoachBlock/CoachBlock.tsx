import noimage from '../../static/img/noimage.jpg'
import './CoachBlock.scss'

function CoachBlock() {
  return (
    <div className='coach__block-holder'>
      <div className='sup'>
        <div className='coach-tr' />
        <img src={noimage} className='coach-img' alt='toni__torres'/>
        <div className='coach-br' />
      </div>
    </div>
  )
}

export default CoachBlock