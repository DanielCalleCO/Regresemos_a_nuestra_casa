import React, { useEffect, useRef } from 'react'
// import img1 from '../../src/img/1.jpg'
// import img2 from '../../src/img/2.jpg'
// import img3 from '../../src/img/3.jpg'
// import img4 from '../../src/img/4.jpg'
import "./Carousel.css";
import CarouselItem1 from "../../molecules/carouselItem1/CarouselItem1";
import CarouselItem2 from "../../molecules/carouselItem2/CarouselItem2";
import CarouselItem3 from "../../molecules/carouselItem3/CarouselItem3";

// import { ReactComponent as FlechaIzquierda} from '../img/iconmonstr-angel-left-thin.svg'
// import { ReactComponent as FlechaDerecha } from '../img/iconmonstr-angel-right-thin.svg'

// import styled from 'styled-components'
import './Slideshow.css'


const Slideshow = () => {
    const slideshow = useRef(null);
    const intervalSlideshow = useRef(null);
   
    const siguiente = ()=>{
    // console.log(slideshow.current)
    //Comprobamos que slideshow tenga elementos
        if (slideshow.current.children.length > 0) {
            console.log('siguiente')

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
        console.log('anterior')
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
                
            }, 30);
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
      slideshow.current.addEventListener('clickenter',()=>{
        clearInterval(intervalSlideshow.current)
      })
      slideshow.current.addEventListener('clickleave',()=>{
        intervalSlideshow.current = setInterval(() => {
            siguiente()
        }, 8000);
      })
    }, [])
    

  return (
    <>
        <div className="contenedorPrincipal">
                <div className="contenedorSlideShow" ref={slideshow}>
                   <div className="slide"> <CarouselItem1 /></div>
                   <div className="slide"><CarouselItem2 /></div>
                   <div className="slide"><CarouselItem3 /></div>
                </div>
             
                
        </div>
        <div className="buttonSlide">

            <button className="botonSlideShow" onClick={anterior}>
                    anterior
                </button>
                <button className='botonSlideShow' onClick={siguiente}>
                    siguiente
                </button>
        </div>
    </> 
       
  )
  }
{/* }

const ContenedorPrincipal = styled.div`
    position:relative;
`;
const ContenerdorSlideShow = styled.div`
    display:flex;
    flex-wrap: nowrap;
`;
const Slide = styled.div`
    min-width:100%;
    overflow:hiden;
    transition: .3s ease all;
    z-index: 10;
    max-heigth: 500px;
    position:  relative;
    img{
        width:100%;
        vertical-align:top;
    }
`;
const TextoSlide =styled.div`
    background: rgba(0,0,0,.5);
    color:#fff;
    width:100%;
    padding: 10px 60px;
    text-align:center;
    position: absolute;
    bottom:0;

    @media screen and ( max-width: 700px){
        position: relative;
        background: #000;
    }
`;

const Controles = styled.div`
    position: absolute;
    top:0;
    z-index: 20;
    width:100%;
    height: 100%;
    pointer-events: none;
`
const Boton = styled.button`
    pointer-events:all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: .3s ease all;
    &:hover{
        background: rgba(0,0,0,.2);
        path{
            fill: #fff
        }
    }
    path{
        filter: ${props => props.derecho ? 'drop-shadow( -2px 0px 0px #fff)' :  'drop-shadow( 2px 0px 0px #fff)'}
    }

    ${props => props.derecho ? 'right:0' : 'left:0'}
` */}
export default Slideshow