import * as React from 'react'
import './FadeInSection.scss'

type Props = {
    children: React.ReactNode,
    translateY: number
}

const FadeInSection: React.FC<Props> = (props) => {
  const [isVisible, setVisible] = React.useState<boolean>(false)
  const domRef = React.useRef<any>()

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting))
    })
    observer.observe(domRef.current)
    return () => observer.unobserve(domRef.current)
  }, [])

  return (
    <div
      style={{transform: isVisible ? `translateY(-${props.translateY}vh)` : 'none'}}  
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  )
}

export default FadeInSection