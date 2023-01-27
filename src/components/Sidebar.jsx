import { Link } from 'react-router-dom'
import { useAuth } from '../hooks'

export const Sidebar = () => {

  const { auth } = useAuth()

  return (
    <aside className='h-screen bg-slate-200 border-r border-slate-300 md:w-1/3 lg:w-2/5 xl:w-2/12 p-5 shadow-lg' >
        <p className='uppercase text-slate-500 font-light'>tus aulas</p>
        <hr className='border border-slate-200'/>
        <Link
            to="create-virtual-board"
            className='bg-slate-600 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg'
        >Nuevo Pizarron</Link>
    </aside>
  )
}
