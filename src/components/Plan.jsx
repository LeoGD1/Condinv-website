import React, { Children } from 'react'
import '../stylesheets/Plan.css'
import ButtonPlan from './ButtonPlan'

const Plan = ({ tipoPlan, costo, children }) => {
  return (
    <article className='plan'>
        <div className='plan__top'>
            <div className='plan__nombre-contenedor'>
                <p className='plan__nombre'>{tipoPlan}</p>
            </div>
            <div className='plan__costo-contenedor'>
                <p className='plan__costo'>{costo}</p>
            </div>
        </div>
        <h4 className='plan__h4'>incluye</h4>
        <ul className=' plan__ul'>
            {children}
        </ul>
        <ButtonPlan
            enlace='https://api.whatsapp.com/send?phone=+527227785391&text=%C2%A1Hola%20CODINV!%20Quiero%20contratar%20un%20plan%20de%20invitaci%C3%B3n%20digital.' />
    </article>
  )
}

export default Plan
