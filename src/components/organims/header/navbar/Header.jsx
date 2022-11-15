import { Link, Link  as RouterLink} from 'react-router-dom'
import "./Header.css"

export const Header = () =>{
    return(
        <header className="headerHome">
            <img src="https://i.ibb.co/0sXKWB8/Logo11.png" alt="logo generacion desafiante" className="logoGeneracionDesHeader"/>
            <div className="sesionButtonHeader">
                <Link className="btnHeaderSesion inicioSesion" component={RouterLink}  to='/login'> INICIAR SESION</Link>
                <Link className="btnHeaderSesion crearCuenta" to='/register' > CREAR CUENTA</Link>
            </div>
        </header>
    )
} 