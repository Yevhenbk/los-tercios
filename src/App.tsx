import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Competitors from './pages/Competitors'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Classes from './pages/Classes'
import About from './pages/About'
import injectContext from './store/appContext'
import ContactButton from './components/ContactButton/ContactButton'
import './static/globals.scss'
import { RaceBy } from '@uiball/loaders'
import logo from './static/img/logo__loader.png'

const App: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 800);
  }, [])

  return (
    <div className='app__container'>
      {loading ?
      <div className="loader-wrapper">
        {/* <img src={logo} className='logo__loader' /> */}
        <RaceBy size={100} color='#efa50e'/>
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
        <ContactButton/>
      </BrowserRouter>}
    </div>
  )
}

export default injectContext(App)
