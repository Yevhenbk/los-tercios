import Header from '../components/Header/Header'
import FetchedProducts from '../components/FetchedProducts/FetchedProducts'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import SmoothScroll from '../components/SmoothScrolling/SmoothScrolling'

const Products: React.FC = () => {
  return (
    <div style={{ background: `var(--primary)` }}>
      <Navbar/>
      <SmoothScroll>
      <Header header='Productos'/>
      <FetchedProducts/>
      <Footer/>
      </SmoothScroll>
    </div>
  )
}

export default Products