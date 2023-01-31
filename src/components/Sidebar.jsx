import { Link } from 'react-router-dom'
import { useAuth } from '../hooks'
import { Card } from './Card'

export const Sidebar = () => {

  const { auth } = useAuth()

  return (
    <aside className='h-screen bg-slate-200 border-r border-t border-slate-300 md:w-1/3 lg:w-2/5 xl:w-2/12 py-5 px-3 shadow-lg'>
        {/* dark:bg-slate-800 dark:border-slate-800 */}
        <p className=' text-slate-400'>Tus Aulas</p>
        <hr className='border border-slate-300'/>
        {/* dark:border-slate-700 */}
        <Card/>
        <Card/>
        <Card/>
        <Card/>

    </aside>
  )
}
