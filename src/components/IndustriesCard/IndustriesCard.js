import React from 'react'
import { Link } from 'react-router-dom'
import './IndustriesCard.scss'
import finacialServicesImg from '../../img/finacial-services.jpg'
import telecomImg from '../../img/telecom.jpg'
import insuranceImg from '../../img/insurance.jpg'
import retailImg from '../../img/retail.jpg'
import ecommerceImg from '../../img/ecommerce.jpg'
import accountabilityTaxesImg from '../../img/accountability-taxes.jpg'
import technologyImg from '../../img/technology.jpg'

const industriesItems = [
    {
        key: 1,
        title: 'Financial Services',
        img: finacialServicesImg
    },
    {
        key: 2,
        title: 'Technology',
        img: technologyImg
    },
    {
        key: 3,
        title: 'Insurance',
        img: insuranceImg
    },
    {
        key: 4,
        title: 'Retail',
        img: retailImg
    },
    {
        key: 5,
        title: 'Ecommerce',
        img: ecommerceImg
    },
    {
        key: 6,
        title: 'Accountability and Taxes',
        img: accountabilityTaxesImg
    },
    {
        key: 7,
        title: 'Telecom',
        img: telecomImg
    }

]

const IndustriesCard = () => (
    <div className="industries">
        <ul className='solutions__links'>
            <li className='solutions__links__item'>
                <Link to='/solucoes'>Aplicações</Link>
            </li>
            <li className='solutions__links__item active'>
                <Link to='/solucoes/setores'>Setores</Link>
            </li>
        </ul>
        <div className='industries__info'>
        Empresas por todo o planeta estão utilizando e se beneficiando da Inteligência Artificial (IA) seja para aumentar os seus lucros ou aumentar de modo geral a sua receita, reduzindo as despesas, levando mais dinâmica aos seus processos e entendendo melhor os seus clientes e, com isso, ganhando algumas vantagens competitivas. Essas empresas estão melhorando os seus modelos de negócio, diante disso tomam decisões com mais qualidade baseadas em dados. A parte de maior valor assim sendo é a aplicação da ciência de dados aos negócios de tal forma que se obtém percepções mais rápidas e melhores.
        </div>
        <h4 className='industries__title'>Setores que estamos conectados</h4>
        <div className="industries__cards row">
        {industriesItems.map(item =>
          <div key={item.key} className="">
            <div className="industries__cards__item card">
              <div className="industries__cards__item__img card-image">
                <img src={item.img} alt='finacial' />
              </div>
              <div className="industries__cards__item__title card-content">
                <span>{item.title}</span>
              </div>    
            </div>
          </div>
        )}
        </div>
    </div> 
)

export default IndustriesCard