import React, { Component } from 'react'
import './Contact.scss'
import FormErrors from '../FormErrors/FormErrors'
import '../FormErrors/FormErrors.scss'

class Contact extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    formErrors: {name: '', email: '', subject: '', message: ''},
    nameValid: false,
    emailValid: false,
    subjectValid: false,
    comantariosValid: false,
    formValid: false
  }

  handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, 
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let subjectValid = this.state.subjectValid;
    let messageValid = this.state.messageValid;
  
    switch(fieldName) {
      case 'name':
        nameValid = value.length >= 4;
        fieldValidationErrors.name = nameValid ? '' : ' <- está incompleto. Complete corretamente o campo.';
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' <- está incompleto. Complete corretamente o campo.';
        break;
      case 'subject':
        subjectValid = value.length >= 3;
        fieldValidationErrors.subject = subjectValid ? '': ' <- está incompleto. Complete corretamente o campo.';
        break;
        case 'message':
        messageValid = value.length >= 5;
        fieldValidationErrors.message = messageValid ? '': ' <- está incompleto. Complete corretamente o campo.';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    nameValid: nameValid,
                    emailValid: emailValid,
                    subjectValid: subjectValid,
                    messageValid: messageValid,
                  }, this.validateForm);
  }
  
  validateForm() {
    this.setState({formValid:
      this.state.nameValid &&
      this.state.emailValid &&
      this.state.subjectValid &&
      this.state.messageValid
    });
  }
  render() {
    return (
      <div className='contact'>
        <div className='contact__container'>
          <div className='contact__container__form'>
            <form className='col s12' action="http://formmail.kinghost.net/formmail.cgi" method="POST">
              <div className='row'>
                <input type="hidden" name="recipient" value="contato.johntor@gmail.com" />
                <input type="hidden" name="redirect" value='https://jonathanmagliano.github.io/johntor/#/contato/sucesso' />
                <input type="hidden" name="subject" value="subject" />
                <input type="hidden" name="email" value="contato.johntor@gmail.com" />
                <input type="text" name="_gotcha" className='gotcha' />
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <input
                    type="text"
                    size="30"
                    name="name"
                    value={this.state.name}
                    onChange={(event) => this.handleUserInput(event)}
                  />
                  <label>Nome</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <input
                    type="text"
                    size="30"
                    name="email"
                    value={this.state.email}
                    onChange={(event) => this.handleUserInput(event)}
                  />
                  <label>e-mail</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <input
                    type="text"
                    name="subject"
                    value={this.state.subject}
                    onChange={(event) => this.handleUserInput(event)}
                  />
                  <label>Assunto</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <textarea
                    className='materialize-textarea'
                    type="text"
                    size="35"
                    name="message"
                    value={this.state.message}
                    onChange={(event) => this.handleUserInput(event)}>
                  </textarea>
                  <labe>Mensagem</labe>
                </div>
                <div className='panel panel-default'>
                  <FormErrors formErrors={this.state.formErrors} />
                </div>
              </div>
              <div className='row'>
                <div className="col s12">
                  <div className='input-field inline'>
                    <input
                      id="email_inline"
                      className='btn contact__container__form__btn'
                      type="submit"
                      name="BTEnvia"
                      value="Enviar"
                      disabled={!this.state.formValid}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact