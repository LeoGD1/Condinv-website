import React from 'react'
import '../stylesheets/AboutUs.css'

const AboutUs = () => {
  return (
    <section className='AboutUs'>
        <h2 className='AboutUs__h2'>Nuestro servicio</h2>
        <div className='AboutUs__textos'>
            <p className='AboutUs__p'>Especializados en ofrecer una experiencia única y sin complicaciones para la creación de tus invitaciones digitales, con diseños elegantes y personalizados.</p>
            <a href="#" className='AboutUs__a'>¡Contactar ya!.</a>
        </div>
    </section>
  )
}

export default AboutUs
