import React, { useEffect, useRef } from 'react'
// import img1 from '../../src/img/1.jpg'
// import img2 from '../../src/img/2.jpg'
// import img3 from '../../src/img/3.jpg'
// import img4 from '../../src/img/4.jpg'
import "./Carousel.css";
import CarouselItem1 from "../../molecules/carouselItem1/CarouselItem1";
import CarouselItem2 from "../../molecules/carouselItem2/CarouselItem2";
import CarouselItem3 from "../../molecules/carouselItem3/CarouselItem3";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { ReactComponent as FlechaIzquierda} from '../img/iconmonstr-angel-left-thin.svg'
// import { ReactComponent as FlechaDerecha } from '../img/iconmonstr-angel-right-thin.svg'

// import styled from 'styled-components'
import './Slideshow.css'


const Slideshow = () => {
    const slideshow = useRef(null);
    const   intervalSlideshow = useRef(null);
   console.log(slideshow)
    const siguiente = ()=>{
    // console.log(slideshow.current)
    //Comprobamos que slideshow tenga elementos
        if (slideshow.current.children.length > 0) {
            // console.log('siguiente')

            //* obtenemos el primere elemento del slideshow
            const primerElemento =  slideshow.current.children[0];

            //* Establecemos la transicion para el slideshow
            slideshow.current.style.transition = `500ms ease-out all`

            const tamañoSlide = slideshow.current.children[0].offsetWidth

            //* movemos el slideshow
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`

            const transicion = () =>{
                //* reiniciamos la posicion del slideshow
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`
                //* Tomamos el primer elemento y lo mandamos al final
                slideshow.current.appendChild(primerElemento)
                //* para que cuando se ejecute el cod deje de escuchar el evento
                slideshow.current.removeEventListener('transitionend', transicion)
            }
            //* evenlistener para cuando termina la animacion
            slideshow.current.addEventListener('transitionend', transicion)

        }
    }

    const anterior = ()=>{
        // console.log('anterior')
        if (slideshow.current.children.length > 0 ) {
            //* Obtener el ultimo elemento del slideshow
            const index = slideshow.current.children.length - 1;
            const ultimoElemento = slideshow.current.children[index]
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild)

            slideshow.current.style.transition ='none';

            const tamañoSlide = slideshow.current.children[0].offsetWidth
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`
            
            setTimeout(() => {
            slideshow.current.style.transition ='500ms ease-out all';

            slideshow.current.style.transform = `translateX(0)`
                
            }, 1);
         }
    }

    useEffect(() => {
    //   const intervalo = setInterval(()=> {
    //     siguiente()
    //   },2000)
        intervalSlideshow.current = setInterval(() => {
                siguiente()
        }, 8000);
      //* eliminamos los intervalos
    //   slideshow.current.addEventListener('mouseenter',()=>{
    //     clearInterval(intervalSlideshow.current)
    //   })
    //   slideshow.current.addEventListener('mouseleave',()=>{
    //     intervalSlideshow.current = setInterval(() => {
    //         siguiente()
    //     }, 8000);
    //   })
    }, [])
    

  return (
    <>
        <div className="contenedorPrincipal">
                <div className="contenedorSlideShow" ref={slideshow}>
                   <div className="slide"> <CarouselItem1 /></div>
                   <div className="slide"><CarouselItem2 /></div>
                   <div className="slide"><CarouselItem3 /></div>
                </div>
             
                <div className="controles">
                    <button className="botonSlideShow start" onClick={anterior} >
                           <ArrowBackIosIcon fontSize="large"  />
                    </button>
                    <button className='botonSlideShow  endboton' onClick={siguiente}>
                            <ArrowForwardIosIcon fontSize="large"/>
                    </button>
                </div>
        </div>
      
    </> 
       
  )
  }
export default Slideshow