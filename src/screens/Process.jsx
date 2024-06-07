import React from 'react'
import Activity from '../components/Activity'
import '../stylesheets/Process.css'


const actividades = [
    {
        id: 1,
        direccion: 'true',
        titulo: 'Recoleccion de datos.',
        parrafo: 'Te solicitaremos la información necesaria para comenzar con la elaboración de tu invitación.'
    },
    {
        id: 2,
        direccion: 'true',
        titulo: 'Desarrollo.',
        parrafo: 'Te brindaremos un enlace el cuál indicará que tu invitación se encuentra en desarrollo.'
    },
    {
        id: 3,
        direccion: 'true',
        titulo: 'Solicitud de cambios.',
        parrafo: 'Te enviaremos un video donde podrás previsualizar tu invitación y solicitar los cambios que requieras únicamente si es necesario.'
    },
    {
        id: 4,
        direccion: 'true',
        titulo: 'Despliegue.',
        parrafo: 'Realizadas las modificaciones necesarias se desplegará la invtiacion, la cual podrás ver desde el enlace proporcionado anteriormente.'
    }
];

const Process = () => {
  return (
    <section className='proceso'>
        <h2 className='proceso__h2'>Proceso</h2>

        <div className='proceso__actividades'>
            {   
                actividades.map(actividad => ( 
                    <Activity
                    key={actividad.id}
                    direction={actividad.direccion}
                    titulo={actividad.titulo}
                    parrafo={actividad.parrafo}/>
                ))
            }
        </div>
    </section>
  )
}

export default Process
