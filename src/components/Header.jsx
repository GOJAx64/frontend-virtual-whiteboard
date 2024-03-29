import { useState } from 'react';
import { useAuth, useClassrooms } from '../hooks';

export const Header = () => {
    const { auth, logoutAuth } = useAuth();
    const { clearAppStates, classroom } = useClassrooms();
    const [toggleMenu, setToggleMenu] = useState(true);

    const onClickButton = () => setToggleMenu(!toggleMenu);

    const handleLogout = () => {
        logoutAuth();
        clearAppStates();
        localStorage.removeItem('token')
    }

    return (
        <nav className="flex items-center justify-between flex-wrap bg-slate-900 mx-auto px-6 py-3 w-full  "> 
            <div className="flex items-center flex-shrink-0 mr-6">
                <p className="uppercase text-slate-50 text-xl tracking-widest ">
                    Aulas <span className='text-blue-600'>Virtuales </span>
                </p>
                {classroom.id && ( <p className='text-slate-300 ml-4 uppercase'>{ classroom.name }</p> )}
            </div>
            <div className="block lg:hidden">
                <button onClick={ onClickButton } className="flex items-center px-3 py-2 border border-blue-500 rounded text-white hover:text-white hover:border-blue-500">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div id='menuNavbar' className={ `w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center lg:text-right uppercase text-grayishBlue ${ toggleMenu ? 'hidden' : '' }`}>
                <div className="lg:flex-grow lg:space-x-7">
                    <p className='lg:inline-block tracking-widest text-sm text-slate-50'>{ auth.name }</p>
                    <button onClick={ handleLogout } className="uppercase w-full md:w-auto text-sm px-4 py-1 text-white bg-blue-700 border-2 border-blue-700 rounded-lg shadow-md  hover:bg-softBlue block lg:inline-block">Salir</button>
                </div>
            </div>
        </nav>
    )
}