import React from 'react'
import { Link } from 'react-router-dom'
import './IndustriesCard.scss'
import dashboardsImg from '../../img/dashboards.png'
import retailImg from '../../img/retail.jpg'
import ecommerceImg from '../../img/ecommerce.jpg'
import accountabilityTaxesImg from '../../img/accountability-taxes.jpg'
import technologyImg from '../../img/technology.png'
import biologyImg from '../../img/biology.jpg'

const industriesItems = [
    {
        key: 1,
        title: 'Tecnologia',
        img: technologyImg
    },
    {
        key: 2,
        title: 'Serviços financeiros',
        img: dashboardsImg
    },
    {
        key: 3,
        title: 'Ciências Biológicas',
        img: biologyImg
    },
    {
        key: 4,
        title: 'Responsabilidade Fiscal e Taxas',
        img: accountabilityTaxesImg
    },
    {
        key: 5,
        title: 'Marketing Analytics',
        img: retailImg
    },
    {
        key: 6,
        title: 'e-Commerce e Vendas',
        img: ecommerceImg
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
        Empresas por todo o planeta estão utilizando e se beneficiando da Inteligência Artificial (IA) seja para aumentar os seus lucros ou aumentar de modo geral a sua receita, reduzindo as despesas, levando mais dinâmica aos seus processos e entendendo melhor os seus clientes e, com isso, ganhando algumas vantagens competitivas. Essas empresas estão melhorando os seus modelos de negócio, diante disso tomam decisões com mais qualidade baseadas em dados.
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