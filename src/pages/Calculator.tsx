import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import SmoothScroll from '../components/SmoothScrolling/SmoothScrolling'
import SliderCalculate from '../components/SliderCalculate/SliderCalculate'

const Classes: React.FC = () => {
  return (
    <div style={{ background: `var(--primary)` }}>
      <Navbar/>
      <SmoothScroll>
        <SliderCalculate/>
        <Footer/>
      </SmoothScroll>
    </div>
  )
}

export default Classes