import "./Header.css"

export default function Header() {
    return(
        <header className="headerHome">
            <img src="https://i.ibb.co/0sXKWB8/Logo11.png" alt="logo generacion desafiante" className="logoGeneracionDesHeader"/>
            <div className="sesionButtonHeader">
                <button className="btnHeaderSesion inicioSesion" > INICIAR SESION</button>
                <button className="btnHeaderSesion crearCuenta" > CREAR CUENTA</button>
            </div>
        </header>
    )
} 