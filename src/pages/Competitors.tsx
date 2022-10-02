import FetchedCompetitors from '../components/FetchedCompetitors/FetchedCompetitors'
import Header from '../components/Header/Header'

const Competitors: React.FC = () => {
  return (
    <div style={{ background: `var(--primary)` }}>
      <Header header='Equipo de competicion'/>
      <FetchedCompetitors/>
    </div>
  )
}

export default Competitors