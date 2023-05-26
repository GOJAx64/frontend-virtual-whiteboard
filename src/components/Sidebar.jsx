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
    <aside className='bg-slate-200 border-r border-slate-400 md:w-1/3 lg:w-2/5 xl:w-2/12 py-5 px-3 shadow-lg'>
        <p className=' text-slate-500'>Tus Aulas</p>
        <hr className='border border-slate-300'/>
        {
          classrooms.length > 0 ? classrooms.map( classroom => <Card key={ classroom.id } classroom={ classroom }/> ) 
                                : <p>No hay aulas registradas</p>
        }
    </aside>
  )
}
