import Slider from '../components/Slider/Slider'
import Opinions from '../components/Opinions/Opinions'
import Info from '../components/Info/Info'
import CoachSide from '../components/CoachSide/CoachSide'
import SemiCards from '../components/SemiCards/SemiCards'
import Installs from '../components/Installs/Installs'

const Home: React.FC = () => {
  return (
    <div>
      <Slider/>
      <Opinions/>
      <Info/>
      <CoachSide/>
      <SemiCards/>
      <Installs/>
    </div>
  )
}

export default Home