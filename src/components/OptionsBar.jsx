import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { useClassrooms } from '../hooks';
import { ModalGestures, ModalProfile, ModalSymbols } from './modals';

import Gesture   from '../assets/gesture.svg';
import Symbols   from '../assets/symbol.svg';
import Profile   from '../assets/profile.svg';
import Add       from '../assets/add2.svg';
import Dashboard from '../assets/home.svg';

export const OptionsBar = () => {
  const { showModalGestures, setShowModalGestures, showModalSymbols, setShowModalSymbols, showModalProfile, setShowModalProfile } = useClassrooms();

  return (
    <aside className=' h-screen bg-slate-200 border-l border-t border-slate-300 md:w-12 py-5 shadow-lg' >
        {/* dark:bg-slate-800 dark:border-slate-800 */}
        <Link to="/dashboard">
          <img src={ Dashboard } alt='Dashboard' className='mx-auto mb-6 h-6'/>
        </Link>
        <>
          <img onClick={ () => setShowModalGestures(true) } src={ Gesture } alt='Gestos' className='mx-auto mb-6 h-6 hover:cursor-pointer'/>
          { showModalGestures && createPortal( <ModalGestures/>, document.body) }
        </>
        <>
          <img onClick={ () => setShowModalSymbols(true) } src={ Symbols } alt='Símbolos' className='mx-auto mb-6 h-6 hover:cursor-pointer'/>
          { showModalSymbols && createPortal( <ModalSymbols/>, document.body) }
        </>
        <>
          <img onClick={ () => setShowModalProfile(true) } src={ Profile } alt='Perfil' className='mx-auto mb-6 h-6 hover:cursor-pointer'/>
          { showModalProfile && createPortal( <ModalProfile/>, document.body) }
        </>
        <Link to="new_classroom">
          <img src={ Add } alt='Add' className='mx-auto mb-6 h-6'/>
        </Link>
    </aside>
  )
}