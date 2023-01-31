import Gesture from '../assets/gesture.svg';
import Symbols from '../assets/symbol.svg';
import Profile from '../assets/profile.svg';
import Add from '../assets/add2.svg';
import Dashboard from '../assets/d1.svg';
import { Link } from 'react-router-dom';

export const OptionsBar = () => {
  return (
    <aside className=' h-screen bg-slate-200 border-l border-t border-slate-300 md:w-12 py-5 shadow-lg' >
        {/* dark:bg-slate-800 dark:border-slate-800 */}
        <Link to="/dashboard">
          <img src={ Dashboard } alt='Dashboard' className='mx-auto mb-6 h-4'/>
        </Link>
        <Link to="gestures">
          <img src={ Gesture } alt='Gestures'    className='mx-auto my-6 h-8'/>
        </Link>
        <Link to="symbols">
          <img src={ Symbols } alt='Symbols'     className='mx-auto my-6 h-5'/>
        </Link>
        <Link to="profile">
          <img src={ Profile } alt='Profile'     className='mx-auto my-6 h-6'/>
        </Link>
        <Link to="new_classroom">
          <img src={ Add } alt='Profile' className='mx-auto my-6 h-7'/>
        </Link>
    </aside>
  )
}