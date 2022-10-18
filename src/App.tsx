import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Competitors from './pages/Competitors'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Classes from './pages/Classes'
import About from './pages/About'
import injectContext from './store/appContext'

const Layout = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/competitors' element={<Competitors/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/classes' element={<Classes/>} />
      </Routes>
    </HashRouter>
  )
}

export default injectContext(Layout)
