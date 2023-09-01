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
                    <a className="nav-link" href="https://www.upwork.com/ab/flservices/workwith/johntor" target="_blank" title="Upwork" rel="noopener noreferrer">
                        <i className="fas fa-briefcase"></i>
                    </a>
                    <a className="nav-link" href="https://www.linkedin.com/in/jonathanmagliano" target="_blank" title="Linkedin" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
        <div className="footercopyright">
            <div className="container">
                <div className="company">
                    JOHNTOR SOLUÇÕES EM TECNOLOGIA - XX.XXX.XXX/XXXX-XX
                </div>
                <div className="creator">
                    © 2023 developed by JohnTor 
                </div>
            </div>
        </div>
    </footer>
)

export default Footer