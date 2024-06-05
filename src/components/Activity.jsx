import React from 'react'
import '../stylesheets/Activity.css'

const Activity = ( {direction, titulo, parrafo, circulo} ) => {
  return (
    <div className={direction ? 'actividad left' : 'actividad right'}>
      <div className='actividad__contenedor'>
        <span className='actividad__circulo'></span>
        <h3 className='actividad__h3'>{titulo}</h3>
      </div>
      <p className='actividad__p'>{parrafo}</p>
    </div>
  )
}

export default Activity
