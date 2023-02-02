import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useClassrooms } from '../hooks'
import { Card } from './'

export const Sidebar = () => {

  const { getClassroomsFromUser, classrooms } = useClassrooms()
  
  useEffect(() => {
    getClassroomsFromUser()
  }, [])
  
  return (
    <aside className='h-screen bg-slate-200 border-r border-t border-slate-300 md:w-1/3 lg:w-2/5 xl:w-2/12 py-5 px-3 shadow-lg'>
        {/* dark:bg-slate-800 dark:border-slate-800 */}
        <p className=' text-slate-400'>Tus Aulas</p>
        <hr className='border border-slate-300'/>
        {/* dark:border-slate-700 */}
        {
          classrooms.length > 0 ? classrooms.map( classroom => <Card key={ classroom.id } classroom={ classroom }/> ) 
                                : <p>No hay aulas registradas</p>
        }
    </aside>
  )
}
