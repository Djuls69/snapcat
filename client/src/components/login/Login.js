import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import CustomInput from '../customInput/CustomInput'

const Login = ({ handleSubmit }) => {
  return (
    <section className='landing'>
      <div className='landing-container'>
        <div className='landing-content'>
          <div className='landing-box'>
            <h1 className='scholar-text'>InstaDev</h1>
            <form noValidate className='register-form' onSubmit={e => e.preventDefault()}>
              <Field type='email' name='email' placeholder='Votre email' component={CustomInput} />
              <Field type='text' name='password' placeholder='Mot de passe' component={CustomInput} />
              <button type='submit'>Connexion</button>
            </form>
          </div>

          <div className='landing-box'>
            <p>
              Vous n'avez pas de compte ?{' '}
              <Link className='landing-links' to='/register'>
                Inscrivez-vous
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default reduxForm({ form: 'login' })(Login)
