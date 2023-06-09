import React from 'react'
import cardLayoutStyle from './information.module.css'

function CardLayout({children}) {
  return (
    <div className={cardLayoutStyle.informationLayout}>
      {children}
    </div>
  )
}

export default CardLayout