import React from 'react'

const HeaderSecundary = ( { title,info } ) => {
  return (
    <div className="HeaderSecundary">
        <nav className='HeaderSecundary-nav'></nav>
        <div className="HeaderSecundary-text">
            <div className="HeaderSecundary-title">{title}</div>
            <div className="HeaderSecundary-info">{info}</div>
        </div>
    </div>
  )
}

export default HeaderSecundary