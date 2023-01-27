import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks';
// import useProyectos from '../hooks/useProyectos'
// import useAuth from '../hooks/useAuth'
// import Busqueda from './Busqueda'

export const Header = () => {
    const { auth } = useAuth();
    // const { handleBuscador, cerrarSesionProyectos } = useProyectos()
    // const { cerrarSesionAuth } = useAuth()

    const [toggleMenu, setToggleMenu] = useState(true);

    const onClickButton = () => {
        setToggleMenu(!toggleMenu);
    }

    const handleCerrarSesion = () => {
        console.log('han')
        // cerrarSesionAuth()
        // cerrarSesionProyectos()
        // localStorage.removeItem('token')
    }


  return (
    <nav className="flex items-center justify-between flex-wrap bg-black mx-auto px-6 py-5 w-full shadow-sm">      
        <div className="flex items-center flex-shrink-0 mr-6">
            <p className="uppercase text-grayishBlue text-lg md:text-xl tracking-widest ">
                Aulas <span className='text-softRed'>Virtuales</span>
            </p>
        </div>

        <div className="block lg:hidden">
            <button onClick={ onClickButton } className="flex items-center px-3 py-2 border border-blue-500 rounded text-white hover:text-white hover:border-blue-500">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>

        <div id='menuNavbar' className={ `w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center lg:text-right uppercase text-grayishBlue ${ toggleMenu ? 'hidden' : '' }`}>
            <div className="lg:flex-grow lg:space-x-7">
                <p className='lg:inline-block tracking-widest'>{ auth.name }</p>
                <button onClick={ onClickButton } to="/login" className="uppercase w-full md:w-auto mt-4 lg:mt-0 px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md  hover:bg-red-400 block lg:inline-block">Cerrar Sesión</button>
            </div>
        </div>
    </nav>
  )
}