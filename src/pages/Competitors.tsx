import FetchedCompetitors from '../components/FetchedCompetitors/FetchedCompetitors'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import SmoothScroll from '../components/SmoothScrolling/SmoothScrolling'

const Competitors: React.FC = () => {
  return (
    <div style={{ background: `var(--primary)` }}>
      <Navbar/>
      <SmoothScroll>
        <Header header='Equípo de competición'/>
        <FetchedCompetitors/>
        <Footer/>
      </SmoothScroll>
    </div>
  )
}

export default Competitors