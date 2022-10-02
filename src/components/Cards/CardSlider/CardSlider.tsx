import * as React from 'react'
import HoverVideoPlayer from 'react-hover-video-player'
import './CardSlider.scss'

type Props = {
    style?: any,
    src: string,
    title: string,
    text: string
}

const CardSlider: React.FC<Props> = (props) => {
  const [shown, setShown] = React.useState<boolean>(false)

  return (
    <div
      className='card__slider'
      style={props.style}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <HoverVideoPlayer
        className='slider__video'
        crossOrigin='anonymous'
        restartOnPaused
        videoSrc='https://res.cloudinary.com/yevhenbk/video/upload/v1662131838/testingmedia_eCSYjCI7_m6lqyj.mp4'
        pausedOverlay={
          <img
            src='https://regymenfitness.com/wp-content/uploads/2021/12/Sportive-serious-people-liftin-1080x675.jpg'
            alt=''
            className='slider__image'
          />
        }
      />
      <div id='rssBlock'>
        {shown && <p className='example-left'>{props.title}</p>}
        {!shown && (
          <div className='right-holder'>
            <p className='example-right'>{props.text}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CardSlider