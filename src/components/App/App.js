import React from 'react'
import { Route, Switch as Routes } from 'react-router-dom'
import 'materialize-css/dist/js/materialize.min.js'
import './App.scss'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import About from '../About/About'
import Solutions from '../Solutions/Solutions'
import IndustriesCard from '../IndustriesCard/IndustriesCard'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import ContactSuccess from '../ContactSuccess/ContactSuccess'
import NotFound from '../NotFound/NotFound'


const App = () => (
  <>
    <Menu />
    <Routes>
      <Route exact path='/' component={Home} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route exact path='/solucoes' component={Solutions} />
      <Route exact path='/solucoes/setores' component={IndustriesCard} />
      <Route exact path='/sobre' component={About} />
      <Route exact path='/contato' component={Contact} />
      <Route exact path='/contato/sucesso' component={ContactSuccess} />
      <Route exact path='*' component={NotFound} />
    </Routes>
    <Footer />
  </>       
)

export default App