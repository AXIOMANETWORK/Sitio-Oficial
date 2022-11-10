import React,{useRef,useState}  from 'react'
import data from '../api/ourTeam.json'

const OurTeam = () => {

  const slideContainer = useRef(null);
  const [control,setControl] = useState(0)

  const carrusell = (position) =>{
      let valor =  -1 * ( position *  slideContainer.current.offsetWidth);
      console.log(valor);
      slideContainer.current.style.transform = `translate(${valor}px)`;
      setControl(position)
  }

  return (
        <section className='OurTeam'>
            <div className='OurTeam-container'>
              <div className='OurTeam-title'>
                <h3 className='OurTeam-h3'>Our Team</h3>
                <h4 className='OurTeam-h4'>Team of Designers and Developers</h4>
              </div>

              <div className='OurTeam-Cards'>

                <div className='OurTeam-containerCards' ref={slideContainer}>

                    {
                        data.map(
                          item =>{
                            return(
                                <div className='OurTeam-card' key={item.id}>
                                  <img src={ item.img } alt="" />
                                  <div className='OurTeam-cardInfo'>
                                      <h3>{item.name}</h3>
                                      <h5>{item.role}</h5>
                                  </div>
                              </div>
                            )
                          }
                        )
                    }
                  
                </div>

                <div className='OurTeam-controlCards'>
                  {
                    data.map(
                      item => {
                        return (
                          <div className={ control === item.id ? `OurTeam-control isActive` : `OurTeam-control`} onClick={()=>carrusell(item.id)} key={ item.id }></div>
                        )
                      }
                    )
                  }                  
                </div>

              </div>
            </div>
        </section>
    
  )
}

export default OurTeam