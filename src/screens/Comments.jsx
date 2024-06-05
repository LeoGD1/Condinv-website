import React, { Component } from 'react';
import Slider from "react-slick";
import '../stylesheets/Comments.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import comUno from '../assets/comment-1.png';
import comDos from '../assets/comment-2.png';
import comTres from '../assets/comment-3.png';
import Comment from '../components/Comment';

const comentarios = [
    {
        id: 1,
        foto: comDos,
        nombre: 'Jennifer Isayuri.',
        comentario: '¡A mi y a mis invtiados les gustó demasiado!, le recomendaré con mis conocidos.'
    },
    {
        id: 2,
        foto: comUno,
        nombre: 'Nadia Yolanda.',
        comentario: 'Mi invitación quedó perfecta, me gustó la atención que le ponen a cada detalle.'
    },
    {
        id: 3,
        foto: comTres,
        nombre: 'Elisa Mondragón.',
        comentario: 'Me encantó que mi invitación quedara tal y como la pedí,¡Muchas gracias!'
    }
];


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", filter: "brightness(0%)", transform: "translateX(-20px)" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", filter: "brightness(0%)", transform: "translateX(20px)"}}
        onClick={onClick}
      />
    );
  }

const Comments = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

  return (
    <section className='comments'>
        <h2 className='comments__h2'>Nuestros clientes</h2>
        <div className='slider-container'>
                <Slider {...settings}>
                    {
                        comentarios.map(comentario => (
                            <Comment 
                                key={comentario.id}
                                imagen={comentario.foto}
                                nombre={comentario.nombre}
                                texto={comentario.comentario} />
                        ))
                    }
                </Slider>
            </div>
    </section>
  )
}

export default Comments
