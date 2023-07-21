import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { useClassrooms } from '../hooks';
import { ModalProfile, ModalSymbols } from './modals';

import Calendar   from '../assets/calendar.svg';
import Symbols   from '../assets/symbol.svg';
import Profile   from '../assets/profile.svg';
import Add       from '../assets/add.svg';
import Dashboard from '../assets/home.svg';

export const OptionsBar = () => {
  const { showModalSymbols, setShowModalSymbols, showModalProfile, setShowModalProfile } = useClassrooms();

  return (
    <aside className='bg-slate-200 border-l border-slate-400 md:w-10 py-5 shadow-lg' >
        {/* dark:bg-slate-800 dark:border-slate-800 */}
        <Link to="/dashboard">
          <img src={ Dashboard } alt='Dashboard' className='mx-auto mb-6 h-5'/>
        </Link>
        <>
          <img onClick={ () => setShowModalSymbols(true) } src={ Symbols } alt='Símbolos' className='mx-auto mb-6 h-5 hover:cursor-pointer'/>
          { showModalSymbols && createPortal( <ModalSymbols/>, document.body) }
        </>
        <>
          <img onClick={ () => setShowModalProfile(true) } src={ Profile } alt='Perfil' className='mx-auto mb-6 h-5 hover:cursor-pointer'/>
          { showModalProfile && createPortal( <ModalProfile/>, document.body) }
        </>
        <Link to="new_classroom">
          <img src={ Add } alt='Add' className='mx-auto mb-6 h-5'/>
        </Link>
        <Link to="calendar">
          <img src={ Calendar } alt='TODO' className='mx-auto mb-6 h-5'/>
        </Link>
    </aside>
  )
}