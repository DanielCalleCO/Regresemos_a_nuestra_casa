import "./CarouselItem2.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export default function CarouselItem2() {
    return(
        <section className="section-two">
            <div className="conteiner-img-component-two">
                <img className="img-component-two" src="https://i.ibb.co/Kz0Yfzb/Image-8.png"  alt="img" />
            </div>
            <div className="continer-text-component-two">

                <div className="div-one div-container-text">
                    <span></span>
                    <h1 className="title-div-one">ENCUNTRA LA LUZ</h1>
                    <p>La palabra De Dios ilumina nuestros pasos ¡Encuentra el camino a la luz de la verdad!</p>
                </div>
                <span className="span-spacing"></span>
                <div className="div-two div-container-text">
                    {/* <span> <FavoriteBorderIcon/> </span> */}
                    <h1>CONÉCTATE CON TU FE</h1>
                    <p>Si tú no conoces a tu pareja ¿como sabes que la estás amandocorrectamente? ¡lo mismo pasa con nuestro Dios! Amemoslo como Él desea</p>
                </div>
            </div>
        
    </section>
    )
}