import React from 'react';
import '../stylesheets/CallToAction.css';

const CallToAction = ( {enlace, texto, color} ) => {
  return (
    <a href={enlace} className={color ? 'button amarillo' : 'button negro'}>{texto}</a>
  )
}

export default CallToAction
