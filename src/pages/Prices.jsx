import React from 'react'
import Plan from '../components/Plan'
import Elements from '../components/Elements'

import '../stylesheets/Prices.css'

const Prices = () => {
  return (
    <section className='Precios'>
      <div className='Precios__textos'>
        <h2 className='Precios__h2'>Precios</h2>
        <p>¡Consulta nuestros paquetes y elige el más conveniente para ti</p>
      </div>
      <div className="Precios__planes">
        <Plan tipoPlan='Básico' costo='$500.00 mxn'>
          <Elements 
            opacidad={true} 
            texto='Plantilla personalizable' />
          <Elements 
            opacidad={true} 
            texto='Pantalla de presentación + foto.' />
          <Elements 
            opacidad={true} 
            texto='Padres y padrinos.' />
          <Elements 
            opacidad={true} 
            texto='Frase especial.' />
          <Elements 
            opacidad={true} 
            texto='Ubicaciones y horarios.' />
          <Elements 
            opacidad={true} 
            texto='Código de vestimenta.' />
          <Elements 
            opacidad={true} 
            texto='Galería de fotos (3 fotos).' />
          <Elements 
            opacidad={true} 
            texto='Agradecimientos.' />
          <Elements 
            opacidad={false} 
            texto='Iitinerario de actividades.' />
          <Elements 
            opacidad={false} 
            texto='Confirmación de asistencia.' />
          <Elements 
            opacidad={false} 
            texto='Restricciones.' />
          <Elements 
            opacidad={false} 
            texto='Mesa de regalos.' />
          <Elements 
            opacidad={false} 
            texto='Canción personalizada.' />
          <Elements 
            opacidad={false} 
            texto='Pantalla de carga.' />
          <Elements 
            opacidad={false} 
            texto='Logo personalizado.' />
        </Plan>

        <Plan tipoPlan='Premium' costo='$1000.00 mxn'>
          <Elements 
            opacidad={true} 
            texto='Plantilla personalizable' />
          <Elements 
            opacidad={true} 
            texto='Pantalla de presentación + foto.' />
          <Elements 
            opacidad={true} 
            texto='Padres y padrinos.' />
          <Elements 
            opacidad={true} 
            texto='Frase especial.' />
          <Elements 
            opacidad={true} 
            texto='Ubicaciones y horarios.' />
          <Elements 
            opacidad={true} 
            texto='Código de vestimenta.' />
          <Elements 
            opacidad={true} 
            texto='Galería de fotos (3 fotos).' />
          <Elements 
            opacidad={true} 
            texto='Agradecimientos.' />
          <Elements 
            opacidad={true} 
            texto='Iitinerario de actividades.' />
          <Elements 
            opacidad={true} 
            texto='Confirmación de asistencia.' />
          <Elements 
            opacidad={true} 
            texto='Restricciones.' />
          <Elements 
            opacidad={true} 
            texto='Mesa de regalos.' />
          <Elements 
            opacidad={true} 
            texto='Canción personalizada.' />
          <Elements 
            opacidad={true} 
            texto='Pantalla de carga.' />
          <Elements 
            opacidad={true} 
            texto='Logo personalizado.' />
        </Plan>

        <Plan tipoPlan='Plus' costo='$800.00 mxn'>
          <Elements 
            opacidad={true} 
            texto='Plantilla personalizable' />
          <Elements 
            opacidad={true} 
            texto='Pantalla de presentación + foto.' />
          <Elements 
            opacidad={true} 
            texto='Padres y padrinos.' />
          <Elements 
            opacidad={true} 
            texto='Frase especial.' />
          <Elements 
            opacidad={true} 
            texto='Ubicaciones y horarios.' />
          <Elements 
            opacidad={true} 
            texto='Código de vestimenta.' />
          <Elements 
            opacidad={true} 
            texto='Galería de fotos (3 fotos).' />
          <Elements 
            opacidad={true} 
            texto='Agradecimientos.' />
          <Elements 
            opacidad={true} 
            texto='Iitinerario de actividades.' />
          <Elements 
            opacidad={true} 
            texto='Confirmación de asistencia.' />
          <Elements 
            opacidad={true} 
            texto='Restricciones.' />
          <Elements 
            opacidad={false} 
            texto='Mesa de regalos.' />
          <Elements 
            opacidad={false} 
            texto='Canción personalizada.' />
          <Elements 
            opacidad={false} 
            texto='Pantalla de carga.' />
          <Elements 
            opacidad={false} 
            texto='Logo personalizado.' />
        </Plan>
      </div>
    </section>
  )
}

export default Prices
