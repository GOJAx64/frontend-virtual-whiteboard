import Gesture from '../assets/gesture.svg';
import Symbols from '../assets/symbol.svg';
import Profile from '../assets/profile.svg';
import Add from '../assets/add2.svg';
import Dashboard  from '../assets/home.svg';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { useClassrooms } from '../hooks';
import { ModalGestures, ModalProfile, ModalSymbols, ModalNewClassroom } from './modals';

export const OptionsBar = () => {
  const { showModal, setShowModal } = useClassrooms();

  return (
    <aside className=' h-screen bg-slate-200 border-l border-t border-slate-300 md:w-12 py-5 shadow-lg' >
        {/* dark:bg-slate-800 dark:border-slate-800 */}
        <Link to="/dashboard">
          <img src={ Dashboard } alt='Dashboard' className='mx-auto mb-6 h-6'/>
        </Link>
        {/* <>
          <img onClick={ () => setShowModal(true) } src={ Gesture } alt='Gestos' className='mx-auto mb-6 h-6'/>
          { showModal && createPortal( <ModalNewClassroom/>, document.body) }
        </>
        <>
          <img onClick={ () => setShowModal(true) } src={ Symbols } alt='Símbolos' className='mx-auto mb-6 h-6'/>
          { showModal && createPortal( <ModalNewClassroom/>, document.body) }
        </>
        <>
          <img onClick={ () => setShowModal(true) } src={ Profile } alt='Perfil' className='mx-auto mb-6 h-6'/>
          { showModal && createPortal( <ModalNewClassroom/>, document.body) }
        </> */}
        <>
          <img onClick={ () => setShowModal(true) } src={ Add } alt='Nueva Aula' className='mx-auto mb-6 h-6'/>
          { showModal && createPortal( <ModalNewClassroom/>, document.body) }
        </>
    </aside>
  )
}