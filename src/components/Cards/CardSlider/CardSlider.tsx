import * as React from 'react'
import { Link } from 'react-router-dom'
import HoverVideoPlayer from 'react-hover-video-player'
import katti from '../../../static/img/rsz_12katti__focused.jpg'
import './CardSlider.scss'

type Props = {
    style?: any,
    videoSrc?: string,
    imgSrc: string,
    title: string,
    text: string,
    link: string
}

const CardSlider: React.FC<Props> = (props) => {
  const [shown, setShown] = React.useState<boolean>(false)

  return (
    <Link to={props.link}>
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
            src={katti}
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
    </Link>
  )
}

export default CardSlider