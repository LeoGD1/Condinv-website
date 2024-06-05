import React from 'react';
import '../stylesheets/Benefits.css';
import iconoUno from '../assets/icon-1.svg';
import iconoDos from '../assets/icon-2.svg';
import iconoTres from '../assets/icon-3.svg';
import iconoCuatro from '../assets/icon-4.svg';
import iconoCinco from '../assets/icon-5.svg';
import iconoSeis from '../assets/icon-6.svg';
import Benefit from '../components/Benefit';

const beneficios = [
    {
        id: 1,
        icono: iconoUno,
        titulo: 'Personalización.',
        texto: 'Agrega detalles que consideres significativos para ti y quienes te acompañan.'
    },
    {
        id: 2,
        icono: iconoDos,
        titulo: 'Acceso 24/7.',
        texto: 'Tu invitación estará disponible cuando quieras y desde donde quieras.'
    },
    {
        id: 3,
        icono: iconoTres,
        titulo: 'Fácil de compartir.',
        texto: 'Puedes compartir el enlace de tu invitación por correo electrónico o cualquier otra red social.'
        
    },
    {
        id: 4,
        icono: iconoCuatro,
        titulo: 'Eco Amigable.',
        texto: 'Reduce el desperdicio de papel y cuida el medio ambiente.'
    },
    {
        id: 5,
        icono: iconoCinco,
        titulo: 'Interfaz intuitiva.',
        texto: 'Diseños sin complicaciones para tus invitados y fácil de navegar, ¡Sólo desliza hacia arriba!.'
    },
    {
        id: 6,
        icono: iconoSeis,
        titulo: 'Versatilidad.',
        texto: 'Perfecto para cualquier tipo de evento, desde bodas y bautizo hasta eventos corporativos.'
    },

];

const Benefits = () => {
  return (
    <section className='benefits'>
        <h2 className='benefits__h2'>¿Que ofrecemos?</h2>
        <div className='benefits__container'>
            {
                beneficios.map(beneficio => (
                    <Benefit 
                    key={beneficio.id}
                    imagen={beneficio.icono}
                    titulo={beneficio.titulo}
                    texto={beneficio.texto} />
                ))
            }
        </div>
    </section>
  )
}

export default Benefits
