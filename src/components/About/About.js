import React from 'react'
import './About.scss'
import Logos from '../Logos/Logos'

const About = () => (
  <div className='about'>
    <div className='about__container'>
    <div className='padding'>
      <div className='about__container__info text'>
        <div className='about__container__info__title'>Sobre</div>
        <div className='about__container__info__text'>
          Somos uma equipe multidisciplinar de alta qualidade com pessoas de distintas habilidades e além disso abrange diversos parceiros estratégicos com muita experiência em construção de negócios, análise de dados, visualizações, análise preditiva, planejamento por pesquisa de mercado, entre outros. Contamos com profissionais dispostos a encontrar as melhores soluções através dos dados, buscando performance e otimização. Temos uma visão de como os atuais modelos de negócio funcionam e também pensamos por uma cultura data-driven.
          <br></br>
          <br></br>
          No momento nós temos parceiros estratégicos distribuídos por regiões percorrendo o Brasil.
          <br></br>
          <br></br>
          Buscamos gerar valor através de cada detalhe de forma minuciosa para a satisfação do cliente.
          <br></br>
          <br></br>
          Entre em contato conosco e nos conte um pouco sobre o seu problema de negócio e como podemos te ajudar.
        </div>
      </div>
    </div>
    <div className='padding'>
      <div className='about__container__info'>
        <div className='about__container__info__title-logo'>Nós trabalhamos com as ferramentas</div>
        <Logos />
      </div>
    </div>
    </div>
  </div>  
)

export default About