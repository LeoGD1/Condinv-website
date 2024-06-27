import React from 'react'
import '../stylesheets/ButtonPlan.css'

const ButtonPlan = ({ enlace }) => {
  return (
    <a className='btn-plan' href={enlace}>
        ¡Pedir ahora!
    </a>
  )
}

export default ButtonPlan
