import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import ClassTable from '../components/ClassTable/ClassTable'
import SmoothScroll from '../components/SmoothScrolling/SmoothScrolling'
import FetchedClasses from '../components/FetchedClasses/FetchedClasses'
import Tariffs from '../components/Tariffs/Tariffs'

const Classes: React.FC = () => {
  return (
    <div style={{ background: `var(--primary)` }}>
      <Navbar/>
      <SmoothScroll>
        <ClassTable/>
        <FetchedClasses/>
        <Tariffs/>
        <Footer/>
      </SmoothScroll>
    </div>
  )
}

export default Classes