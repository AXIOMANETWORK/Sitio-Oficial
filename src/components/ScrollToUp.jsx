import React,{useState} from 'react'

const ScrollToUp = () => {
    const [isActive,setIsActive] = useState(false);
    
    window.addEventListener('scroll',() =>{
        const scroll = document.documentElement.scrollTop;
        if(scroll > 300){
            setIsActive(true);
        }else{
            setIsActive(false)
        }
        
    })

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