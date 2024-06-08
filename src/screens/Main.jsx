import React from 'react'
import '../stylesheets/Main.css';
import CallToAction from '../components/CallToAction';

const Main = () => {
  return (
    <main className='main'>
        <h1 className='main__h1'>Tus eventos con un toque de elegancia digital</h1>
        <p className='main__p'>Invitaciones digitales web únicas para momentos inolvidables.</p>
        <CallToAction
          texto='¡Pide la tuya!'
          enlace='https://api.whatsapp.com/send?phone=+527227785391&text=%C2%A1Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20invitaciones%20digitales%20web!'
          color={true} />
    </main>
  )
}

export default Main
