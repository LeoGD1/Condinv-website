import React from 'react'
import '../stylesheets/AboutUs.css';
import CallToAction from '../components/CallToAction';

const AboutUs = () => {
  return (
    <section className='AboutUs'>
        <div className='AboutUs__container-text'>
          <h2 className='AboutUs__h2'>Nuestro servicio</h2>
        </div>
        <div className='AboutUs__textos'>
            <p className='AboutUs__p'>Especializados en ofrecer una experiencia única y sin complicaciones para la creación de tus invitaciones digitales, con diseños elegantes y personalizados.</p>
            <CallToAction
              texto='¡Contactanos ya!'
              enlace='https://api.whatsapp.com/send?phone=+527227785391&text=%C2%A1Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20invitaciones%20digitales%20web!'
              color={false} />
        </div>
    </section>
  )
}

export default AboutUs
