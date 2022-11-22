import './App.css';
// import Example from './components/organims/carousel/Carousel';
import Slideshow from './components/organims/carousel/Slideshow';
import {Header} from './components/organims/header/navbar/Header'

export const  App =() =>{
  return (
    <div className="App">
      <Header/>
      {/* <Example/> */}
      <Slideshow/>
    </div>
  );
}


