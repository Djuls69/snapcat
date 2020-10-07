import React from 'react'
import './register.css'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import phoneBG from '../../assets/landing_phone.png'
import CustomInput from '../customInput/CustomInput'

const Register = ({ handleSubmit }) => {
  return (
    <section className='landing'>
      <div className='landing-container'>
        <div className='landing-phone'>
          <img src={phoneBG} alt='Phone BG' />
        </div>
        <div className='landing-content'>
          <div className='landing-box'>
            <h1 className='scholar-text'>InstaDev</h1>
            <h3 style={{ color: '#978b84' }}>Inscrivez-vous pour voir des photos ... de devs</h3>
            <form noValidate className='register-form' onSubmit={e => e.preventDefault()}>
              <Field type='email' name='email' placeholder='Votre email' component={CustomInput} />
              <Field type='text' name='fullName' placeholder='Nom complet' component={CustomInput} />
              <Field type='text' name='pseudo' placeholder="Nom d'utilisateur" component={CustomInput} />
              <Field type='text' name='password' placeholder='Mot de passe' component={CustomInput} />
              <button type='submit'>Suivant</button>
            </form>
            <p className='register-copy'>
              En vous inscrivant, vous acceptez nos Conditions générales. Découvrez comment nous recueillons, utilisons
              et partageons vos données en lisant notre Politique d’utilisation des données et comment nous utilisons
              les cookies et autres technologies similaires en consultant notre Politique d’utilisation des cookies.
            </p>
          </div>

          <div className='landing-box'>
            <p>
              Vous avez un compte ?{' '}
              <Link className='landing-links' to='/login'>
                Connectez-vous
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default reduxForm({ form: 'register' })(Register)
