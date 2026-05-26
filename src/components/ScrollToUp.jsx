import React, { useState, useEffect } from 'react'

const ScrollToUp = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsActive(document.documentElement.scrollTop > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const scrollToTop = () =>{
        window.scrollTo({
            top:0,
            behavior:'smooth' /*Comportamiento suave, la pagina sube lentamente con la propiedad smooth */
        })
    }

  return (
    
    <button className='btnScrollUp' onClick={scrollToTop}  style={ {display: isActive ? 'inline' : 'none'} }></button>
  )
}

export default ScrollToUp