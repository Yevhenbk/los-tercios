import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import ClassTable from '../components/ClassTable/ClassTable'
import SmoothScroll from '../components/SmoothScrolling/SmoothScrolling'
import FetchedClasses from '../components/FetchedClasses/FetchedClasses'

const Classes: React.FC = () => {
  return (
    <div style={{ background: `var(--primary)` }}>
      <Navbar/>
      <SmoothScroll>
        <Header header='Clases de Halterofilia'/>
        <ClassTable/>
        <FetchedClasses/>
        <Footer/>
      </SmoothScroll>
    </div>
  )
}

export default Classes