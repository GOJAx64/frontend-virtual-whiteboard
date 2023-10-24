import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(true);

    const onClickButton = () => {
        setToggleMenu(!toggleMenu);
    }

    return (
        <nav className="flex items-center justify-between flex-wrap  mx-auto p-6 w-full">
            
            <div className="flex items-center flex-shrink-0 mr-6">
                <p className="uppercase text-grayishBlue text-lg md:text-xl tracking-widest ">
                    Aulas <span className='text-blue-700'>Virtuales</span>
                </p>
            </div>

            <div className="block lg:hidden">
                <button onClick={ onClickButton } className="flex items-center px-3 py-2 border border-blue-500 rounded text-white hover:text-white hover:border-blue-500">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>

            <div id='menuNavbar' className={ `w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center lg:text-right uppercase text-grayishBlue ${ toggleMenu ? 'hidden' : '' }`}>
                <div className="lg:flex-grow lg:space-x-7">
                    {/* <a onClick={ onClickButton } href="#features"     className="mt-4 lg:mt-0 tracking-widest hover:text-softRed block lg:inline-block">Características</a>
                    <a onClick={ onClickButton } href="#technologies" className="mt-4 lg:mt-0 tracking-widest hover:text-softRed block lg:inline-block">Tecnologías</a>
                    <a onClick={ onClickButton } href="#faq"          className="mt-4 lg:mt-0 tracking-widest hover:text-softRed block lg:inline-block">FAQ</a> */}
                    <Link to="/login"    className="mt-4 lg:mt-0 px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md  hover:bg-red-400 block lg:inline-block">Iniciar Sesión</Link>
                    <Link to="/register" className="mt-4 lg:mt-0 px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md  hover:bg-red-400 block lg:inline-block">Registrarse</Link>
                </div>
            </div>
        </nav>
    )
}