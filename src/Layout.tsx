import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomCursor from './components/CustomCursor/CustomCursor'
import SmoothScroll from './components/SmoothScrolling/SmoothScrolling'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Competitors from './pages/Competitors'
import Contact from './pages/Contact'
import Products from './pages/Products'
import About from './pages/About'

const Layout = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <SmoothScroll>
    {/* <CustomCursor/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/competitors' element={<Competitors/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </SmoothScroll>
    </BrowserRouter>
  )
}

export default Layout;
