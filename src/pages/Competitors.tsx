import FetchedCompetitors from '../components/FetchedCompetitors/FetchedCompetitors'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import SmoothScroll from '../components/SmoothScrolling/SmoothScrolling'

const Competitors: React.FC = () => {
  return (
    <div style={{ background: `var(--primary)` }}>
      <Navbar/>
      <SmoothScroll>
        <FetchedCompetitors/>
        <Footer/>
      </SmoothScroll>
    </div>
  )
}

export default Competitors