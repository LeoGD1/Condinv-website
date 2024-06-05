import React from 'react';
import '../stylesheets/Benefit.css';

const Benefit = ( {titulo, imagen, texto} ) => {
  return (
    <article className='benefit'>
        <div className='benefit__clip'></div>
        <img className='benefit__imagen' src={imagen} alt={`icono de ${titulo}`} />
        <h4 className='benefit__h4'>{titulo}</h4>
        <p className="benefit__p">{texto}</p>
    </article>
  )
}

export default Benefit
