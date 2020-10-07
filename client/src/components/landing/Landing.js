import React from 'react'
import './landing.css'
import { Link } from 'react-router-dom'
import phoneBG from '../../assets/landing_phone.png'

const Landing = () => {
  return (
    <section className='landing'>
      <div className='landing-container'>
        <div className='landing-phone'>
          <img src={phoneBG} alt='Phone BG' />
        </div>
        <div className='landing-content'>
          <div className='landing-box'>
            <h1 className='scholar-text'>InstaDev</h1>
            <h3>Insta... mais pour devs ?!</h3>
            <Link className='landing-links' to='/login'>
              Se connecter
            </Link>
            <Link className='landing-links' to='/register'>
              S'inscrire
            </Link>
          </div>
          <div className='landing-dev'>
            <p>Site développé par Julien Delusseau</p>
            <a
              className='cta-link'
              href='https://www.linkedin.com/in/julien-delusseau-06b795130'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin-in'></i> Profil Linkedin
            </a>
            <a className='cta-link' href='https://www.juliendelusseau.fr' target='_blank' rel='noopener noreferrer'>
              <i className='fas fa-external-link-alt'></i> Site Web
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
