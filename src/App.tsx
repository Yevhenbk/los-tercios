import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Competitors from './pages/Competitors'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Classes from './pages/Classes'
import About from './pages/About'
import injectContext from './store/appContext'
import './static/globals.scss'

const App: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500);
  }, [])

  return (
    <div className='app__container'>
      {loading ?
      <div className="loader-wrapper">
        <span className="loader"></span>
      </div> :
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/competitors' element={<Competitors/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/classes' element={<Classes/>} />
        </Routes>
      </BrowserRouter>}
    </div>
  )
}

export default injectContext(App)
