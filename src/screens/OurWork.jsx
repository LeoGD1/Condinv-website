import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import'../stylesheets/OurWork.css';
import capturaUno from '../assets/cap-1.png';
import capturaDos from '../assets/cap-2.png';
import capturaTres from '../assets/cap-3.png';
import Work from '../components/Work';

const capturas = [
    {
        id: 1,
        captura: capturaUno,
        enlace: 'https://diegoyelisa-nuestraboda-codincy.netlify.app/',
    },
    {
        id: 2,
        captura: capturaDos,
        enlace: 'https://invitacion-a-mi-bautizo-ana-paula.netlify.app/',
    },
    {
        id: 3,
        captura: capturaTres,
        enlace: 'https://mis-xv-jennifer-isayuri.netlify.app/',
    },
];

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", filter: "brightness(0%)" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", filter: "brightness(0%)"}}
        onClick={onClick}
      />
    );
  }

const OurWork = () => {

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
        <section className='OurWork'>
            <h2 className='OurWork__h2'>Nuestro trabajo</h2>
            <div className='slider-container'>
                <Slider {...settings}>
                    {
                        capturas.map(captura => (
                            <Work 
                                key={captura.id}
                                captura={captura.captura}
                                enlace={captura.enlace} />
                        ))
                    }
                </Slider>
            </div>
        </section>
    )
}

export default OurWork
