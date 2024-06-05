import React from 'react';
import '../stylesheets/Work.css';

const Work = ( {captura, enlace} ) => {
  return (
    <a  href={enlace} className='work' target='_blank'>
      <img src={captura} alt="captura de invitación deigital" className='work__captura' />
    </a>
  )
}

export default Work
