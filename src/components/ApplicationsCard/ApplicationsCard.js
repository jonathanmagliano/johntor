import React from 'react'
import { Link } from 'react-router-dom'
import './ApplicationsCard.scss'

const instustriesItems = [
    {
        key: 1,
        icon: 'fas fa-chart-bar',
        title: 'Exploração, Visualização dos dados e Dashboards',
        text: 'Desenvolvimento de Dashboards. Desenvolvemos uma determinada visualização de dados que é a representação gráfica com as informações. Ao usar os elementos visuais como tabelas, gráficos ou mapas, as ferramentas de visualização de dados fornecem uma maneira acessível e simples de obtermos o entendimento do seu negócio em pequenos detalhes. Temos aqui os dados de forma bem evidente.'
    },
    {
        key: 2,
        icon: 'fas fa-chart-pie',
        title: 'Análise e Mineração de dados',
        text: 'A mineração de dados é o processo de extrair informações valiosas, padrões, conhecimentos e insights a partir de grandes conjuntos de dados (Big Data), muitas vezes usando métodos da interseção de aprendizado de máquina, estatísticas e sistemas de banco de dados. Podemos eliminar valores duplicados ou redundantes.'
    },
    {
        key: 3,
        icon: 'fas fa-search',
        title: 'Soluções ERP (Enterprise Resource Planning)',
        text: 'Realizamos pesquisas de mercado, analisamos o seu negócios e ajudamos no desenvolvimento competitivo através dos indicadores. Além disso, realizamos consultorias considerando os setores que atuamos.'
    },
    {
        key: 4,
        icon: 'fas fa-database',
        title: 'Database management',
        text: 'Profissional para bancos de dados relacional? Ajudamos na manutenção e gerenciamento de Databases e Tables.'
    },
    {
        key: 5,
        icon: 'fas fa-history',
        title: 'Otimização de Query',
        text: 'Uma consulta ineficiente pode sobrecarregar os recursos do banco de dados de produção e causar desempenho lento ou perda de serviço para outros usuários se a consulta contiver erros. Portanto, é importante otimizar suas consultas para um impacto mínimo no desempenho do banco de dados.'
    },
    {
        key: 6,
        icon: 'fas fa-robot',
        title: 'Softwares por inteligência artificial',
        text: 'Realizamos automações por RPA (exemplo: soluções Microsoft) ou utilizamos determinados métodos de automação de processos de negócios com base em softwares por inteligência artificial (IA).'
    },
    {
        key: 7,
        icon: 'fas fa-chart-line',
        title: 'Análises preditivas',
        text: 'Utilizamos algoritmos de aprendizado de máquina para analisar o comportamento do modelo de negócio para obter uma visão personalizada e diante disso com as mesmas aplicações de aprendizado de máquina conseguimos gerar uma análise preditiva, isto é, realização de previsões.'
    }
]

const ApplicationsCard = () => (
    <div className='applications'>
        <ul className='solutions__links'>
            <li className='solutions__links__item active'>
                <Link to='/solucoes'>Aplicações</Link>
            </li>
            <li className='solutions__links__item'>
                <Link to='/solucoes/setores'>Setores</Link>
            </li>
        </ul>
        <div className="row applications__list">
            {instustriesItems.map(item =>
                <div key={item.key} className="applications__list__item">
                    {/* <i className="applications__list__item__icon small material-icons">{item.icon}</i> */}
                    <i className={item.icon}></i>
                    <h3 className='applications__list__item__title'>{item.title}</h3>
                    <p className='applications__list__item__text'>{item.text}</p>
                </div>
            )}
        </div>
    </div>
)


export default ApplicationsCard