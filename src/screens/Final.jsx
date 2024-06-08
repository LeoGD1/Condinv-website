import React from 'react';
import '../stylesheets/Final.css';
import CallToAction from '../components/CallToAction';

const Final = () => {
  return (
    <section className='final'>
        <h1 className='final__h1'>Haz que la experiencia de tu evento comience desde la invitacion</h1>
        <p className='final__p'>¡Contáctanos ahora!</p>
        <CallToAction
          texto='Contactar'
          enlace='https://api.whatsapp.com/send?phone=+527227785391&text=%C2%A1Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20invitaciones%20digitales%20web!'
          color={true} />
    </section>
  )
}

export default Final
