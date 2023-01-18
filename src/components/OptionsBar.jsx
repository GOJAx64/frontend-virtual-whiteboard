import { Link } from 'react-router-dom'

export const OptionsBar = () => {

 

  return (
    <aside className='m-3 h-screen bg-slate-200 border border-slate-300 md:w-16 px-5 py-10 rounded-lg' >
        <p className='font-bold'>Hola</p>

        <Link
            to="create-virtual-board"
            className='bg-sky-600 w-full text-white uppercase font-bold block mt-5 text-center rounded-lg'
        >Nu</Link>
    </aside>
  )
}