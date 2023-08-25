import React, { Component } from 'react'
import './ContactSuccess.scss'
import Contact from '../Contact/Contact'
import { Link } from 'react-router-dom';

class Modal extends Component {
      render() {
          return (
            <>
            <Contact />
            <div className='modal-success'>
              <section className="modal-main">
                Retornaremos a sua mensagem assim que possível.<span>Obrigado!</span>
                <Link to='/contato' className='close-btn'>
                  <i className="fas fa-times"></i>
                </Link>
              </section>
            </div>
            </>
          )
      }
}

export default Modal