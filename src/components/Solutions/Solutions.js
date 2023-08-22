import React from 'react'
import { Route } from 'react-router'
import './Solutions.scss'
import ApplicationsCard from '../ApplicationsCard/ApplicationsCard'
import IndustriesCard from '../IndustriesCard/IndustriesCard'

const Solutions = () => (
  <div className='solutions'>
      <Route exact path='/solucoes' component={ApplicationsCard} />
      <Route exact path='/solucoes/setores' component={IndustriesCard} />
  </div>
)

export default Solutions