import Slider from '../components/Slider/Slider'
import Opinions from '../components/Opinions/Opinions'
import Info from '../components/Info/Info'
import CoachSide from '../components/CoachSide/CoachSide'
import SemiCards from '../components/SemiCards/SemiCards'
import Installs from '../components/Installs/Installs'
import Navbar from '../components/Navbar/Navbar'
import SmoothScroll from '../components/SmoothScrolling/SmoothScrolling'
import Footer from '../components/Footer/Footer'

const Home: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <SmoothScroll>
      <Slider/>
      <Opinions/>
      <Info/>
      <CoachSide/>
      <SemiCards/>
      <Installs/>
      <Footer/>
      </SmoothScroll>
    </div>
  )
}

export default Home