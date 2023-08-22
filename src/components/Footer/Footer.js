import React from 'react'
import './Footer.scss'

const Footer = () => (
    <footer className="footer page-footer">
        <div className="container">
            <div className="row">
                <div className="nav social-icons justify-content-end">
                    <a className="nav-link" href="mailto:contato.johntor@gmail.com" target="_blank" title="Email" rel="noopener noreferrer">
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a className="nav-link" href="https://wa.me/21991366859?text=Olá, JohnTor!%20gostaria%20de%20entrar%20em%20contato." target="_blank" title="WhatsApp" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                    <a className="nav-link" href="https://www.linkedin.com/in/jonathanmagliano" target="_blank" title="Linkedin" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="container">
                <a className="company">
                    JOHNTOR SOLUÇÕES EM TECNOLOGIA - XX.XXX.XXX/XXXX-XX
                </a>
                <a className='creator'>
                    © 2023 developed by JohnTor 
                </a>
            </div>
        </div>
    </footer>
)

export default Footer