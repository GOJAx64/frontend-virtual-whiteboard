import { Link } from 'react-router-dom'
import { useAuth } from '../hooks'

export const Sidebar = () => {

  const { auth } = useAuth()

  return (
    <aside className='m-3 h-screen bg-slate-200 border border-slate-300 md:w-1/3 lg:w-2/5 xl:w-3/12 px-5 py-10 rounded-lg' >
        <p className='text-xl font-bold'>Hola: { auth.name } aqui estan tus pizarrones</p>

        <Link
            to="create-virtual-board"
            className='bg-sky-600 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg'
        >Nuevo Pizarron</Link>
    </aside>
  )
}
