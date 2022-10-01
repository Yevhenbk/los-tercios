import * as React from 'react'

type Props = {
    offset: number,
    className: string,
    children: React.ReactNode
}

const Scroller: React.FC<Props> = (props) => {
  const [offsetY, setOffsetY] = React.useState<number>(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={props.className}  
      style={{
      transform: `translateY(-${offsetY * props.offset}px)`,
    }}>
      {props.children}
    </div>
  )
}

export default Scroller