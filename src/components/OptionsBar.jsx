import Gesture from '../assets/gesture.svg';
import Symbols from '../assets/symbol.svg';
import Profile from '../assets/profile.svg';
import Add from '../assets/add2.svg';
import Dashboard from '../assets/d1.svg';

export const OptionsBar = () => {
  return (
    <aside className=' h-screen bg-slate-800 border-l border-t border-slate-800 md:w-12 py-5 shadow-lg' >
        <img src={ Dashboard } alt='Dashboard' className='mx-auto mb-6 h-4'/>
        <img src={ Gesture } alt='Gestures'    className='mx-auto my-6 h-8'/>
        <img src={ Symbols } alt='Symbols'     className='mx-auto my-6 h-5'/>
        <img src={ Profile } alt='Profile'     className='mx-auto my-6 h-6'/>
        <img src={ Add } alt='Profile'         className='mx-auto my-6 h-7'/>
    </aside>
  )
}