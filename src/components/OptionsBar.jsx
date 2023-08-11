import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { useClassrooms } from '../hooks';
import { ModalProfile, ModalSymbols } from './modals';

import Calendar   from '../assets/calendar.svg';
import Symbols   from '../assets/symbol.svg';
import Profile   from '../assets/profile.svg';
import Add       from '../assets/add.svg';
import Home from '../assets/home.svg';
import Dashboard from '../assets/dashboard.svg'
import Task from '../assets/task.svg'
import Message from '../assets/msg.svg'
import Note from '../assets/note.svg'
import Board from '../assets/board.svg'

export const OptionsBar = () => {
  const { showModalSymbols, setShowModalSymbols, showModalProfile, setShowModalProfile, classroom } = useClassrooms();
  const { id } = classroom;

  return (
    <aside className='bg-slate-100 border-l border-slate-200 md:w-10 py-5 shadow-lg h-screen' >
        {/* dark:bg-slate-800 dark:border-slate-800 */}
        <Link to="/dashboard">
          <img src={ Dashboard } alt='Dashboard' className='mx-auto mb-6 h-5'/>
        </Link>
        <hr className='border border-transparent my-20'/>
        { classroom.id && (
          <div>
            <Link to={`/dashboard/home/${id}`}>
              <img src={ Home } alt='Home' className='mx-auto mb-6 h-5'/>
            </Link>
            <Link to={`/dashboard/tasks/${id}`}>
              <img src={ Task } alt='Tasks' className='mx-auto mb-6 h-5'/>
            </Link>
            <Link to={`/dashboard/chat/${id}`}>
              <img src={ Message } alt='Messages' className='mx-auto mb-6 h-5'/>
            </Link>
            <Link to={`/dashboard/notes/${id}`}>
              <img src={ Note } alt='Notes' className='mx-auto mb-6 h-5'/>
            </Link>
            <Link to={`/dashboard/board/${id}`}>
              <img src={ Board } alt='Board' className='mx-auto mb-6 h-5'/>
            </Link>
            <Link to="calendar">
              <img src={ Calendar } alt='Calendar' className='mx-auto mb-6 h-5'/>
            </Link>
          </div>
        )}
        <hr className='border border-transparent mt-40'/>
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
    </aside>
  )
}