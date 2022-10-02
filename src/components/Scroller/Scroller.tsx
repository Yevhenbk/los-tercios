import * as React from 'react'

type Props = {
    offset: number,
    rotate: number,
    className?: string,
    isNegative: boolean,
    children: React.ReactNode
}

const Scroller: React.FC<Props> = (props) => {
  const [offsetY, setOffsetY] = React.useState<number>(0)
  const [isNegative] = React.useState<boolean>(props.isNegative)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  React.useEffect(() => {

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div 
      className={props.className}  
      style={{
      transform: isNegative ? `translateY(-${offsetY * props.offset}px) rotate(${props.rotate}deg)` 
      : `translateY(${offsetY * props.offset}px) rotate(${props.rotate}deg)`,
    }}>
      {props.children}
    </div>
  )
}

export default Scroller