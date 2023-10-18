import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { useAdmin, useClassrooms } from '../hooks';
import { ModalProfile } from './modals';

import Profile   from '../assets/profile.svg';
import Add       from '../assets/add.svg';
import Home      from '../assets/home.svg';
import Dashboard from '../assets/dashboard.svg'
import Message   from '../assets/msg.svg'
import Note      from '../assets/note.svg'
import Board     from '../assets/board.svg'
import Settings  from '../assets/settings.svg'

export const OptionsBar = () => {
  const { showModalProfile, setShowModalProfile, classroom, setClassroom } = useClassrooms();
  const { id } = classroom;
  const isAdmin = useAdmin();

  return (
    <aside className='bg-slate-200 border-l border-slate-300 md:w-10 py-5 shadow-lg h-options_bar' >
        <Link to="/dashboard">
          <img src={ Dashboard } alt='Dashboard' onClick={  () => setClassroom({}) } className='mx-auto mb-6 h-5'/>
        </Link>
        <>
          <img onClick={ () => setShowModalProfile(true) } src={ Profile } alt='Perfil' className='mx-auto mb-6 h-5 hover:cursor-pointer'/>
          { showModalProfile && createPortal( <ModalProfile/>, document.body) }
        </>
        <Link to="/dashboard/new_classroom">
          <img src={ Add } alt='Add' className='mx-auto mb-6 h-5'/>
        </Link>
        <hr className='border border-transparent my-14'/>
        { classroom.id && (
          <div>
            <Link to={`/dashboard/home/${id}`}>
              <img src={ Home } alt='Home' className='mx-auto mb-6 h-5'/>
            </Link>
            <Link to={`/dashboard/chat/${id}`}>
              <img src={ Message } alt='Messages' className='mx-auto mb-6 h-5'/>
            </Link>
            <Link to={`/dashboard/notes/${id}`}>
              <img src={ Note } alt='Notes' className='mx-auto mb-6 h-5'/>
            </Link>
            { isAdmin &&
              <Link to={`/dashboard/board/${id}`}>
                <img src={ Board } alt='Board' className='mx-auto mb-6 h-5'/>
              </Link>
            }
            { isAdmin && 
              <Link to={`/dashboard/settings/${id}`}>
                <img src={ Settings } alt='Settings' className='mx-auto mb-6 h-5'/>
              </Link>
            }
          </div>
        )}
    </aside>
  )
}