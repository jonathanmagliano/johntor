import React from 'react'
import './Portfolio.scss'

const portfolioItems = [
    {
      key: 1,
      title: 'Desenvolvimentos de Softwares',
      text: 'Dashboards, Desenvolvimentos de Softwares, Bancos de dados, Análises de Dados +',
      img: 'https://blogs-images.forbes.com/louiscolumbus/files/2018/12/Big-Data-Analytics-Adoption-Soared-In-The-Enterprise-In-2018.jpg',
      link: 'https://portfolio-johntor.onrender.com/'
    },
    {
      key: 2,
      title: 'Desenvolvimento web',
      text: 'Landing page, sites institucionais e websites e-commerce',
      img: 'https://cdn.pixabay.com/photo/2018/05/04/20/01/website-3374825_1280.jpg',
      link: 'mailto:contato.johntor@gmail.com'
    }
]

const Portfolio = () => (
  <div className='portfolio'>
    <div className='portfolio__container'>
      <div className='padding'>
        <div className='portfolio__container__info text'>
          <div className='portfolio__container__info__title'>Portfolio</div>
          <div className='portfolio__container__info__text'>
            Temos uma equipe multidisciplinar de alta qualidade com pessoas de distintas habilidades e juntamos parcerias com muita experiência em construção de negócios, análise de dados, visualizações, análise preditiva, planejamento por pesquisa de mercado, entre outros. Contamos com profissionais dispostos a encontrar as melhores soluções através dos dados. Temos uma visão de como os atuais modelos de negócio funcionam e também pensamos por uma cultura data-driven.
            <br></br>
          </div>
        </div>
      </div>
      <div className='portfolio__cards row'>
        {portfolioItems.map(item => (
          <div className='col s12 m6' key={item.key}>
            <div className='portfolio__cards__item card large'>
              <div className='portfolio__cards__item__img card-image'>
                <a href={item.link} target='_blank' rel='noopener noreferrer'>
                <img src={item.img} alt={item.title} />
                </a>
              </div>
              <div className='portfolio__cards__item__text card-content'>
                <span className='portfolio__cards__item__title'>{item.title}</span>
                <p>{item.text}</p>
              </div>
              <div className='card-action portfolio__cards__item__link'>
                <a className='portfolio__cards__item__link__a' href={item.link} target='_blank' rel='noopener noreferrer'>Mais informações</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Portfolio