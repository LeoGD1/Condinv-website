import React from 'react'
import '../stylesheets/Element.css'

const Elements = ({ opacidad, texto }) => {
  return (
    <li className={opacidad ? 'li color-on' : 'li color-off'}>
      {texto}
    </li>
  )
}

export default Elements
