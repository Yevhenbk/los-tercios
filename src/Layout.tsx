import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Competitors from './pages/Competitors'
import Contact from './pages/Contact'
import Products from './pages/Products'
import About from './pages/About'
import injectContext from './store/appContext'

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/competitors' element={<Competitors/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default injectContext(Layout)
