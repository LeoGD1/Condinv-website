import React from 'react';
import '../stylesheets/Comment.css';
import comillas from '../assets/comillas.svg';

const Comment = ( {imagen, nombre, texto} ) => {
  return (
    <article className='comment'>
        <img className='comment__comillas' src={comillas} alt='comillas' />
        <img className='comment__foto' src={imagen} alt={`invitacion digital web de ${nombre}`} />
        <h4 className='comment__nombre'>{nombre}</h4>
        <p className="comment__comentario">{texto}</p>
    </article>
  )
}

export default Comment
