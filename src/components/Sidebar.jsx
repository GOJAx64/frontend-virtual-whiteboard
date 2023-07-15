import { useEffect } from 'react'
import { useClassrooms } from '../hooks'
import { Card, Searcher } from './'

export const Sidebar = () => {

  const { getClassroomsFromUser, classrooms, memberships } = useClassrooms()
  
  useEffect(() => {
    getClassroomsFromUser()
  }, [])
  
  return (
    <aside className='bg-slate-200 border-r border-slate-400 md:w-1/3 lg:w-2/5 xl:w-2/12 py-5 px-3 shadow-lg'>
        <Searcher/>
        <p className=' text-slate-500 text-sm mt-3'>Administras</p>
        <hr className='border border-slate-300'/>
        <div className='overflow-y-auto scrollbar-hide'>
          {
            classrooms.length > 0 ? classrooms.map( classroom => <Card key={ classroom.id } classroom={ classroom }/> ) 
                                  : <p className='text-slate-400 text-sm'>No administras ningun aula</p>
          }
        </div>
        <p className=' text-slate-500 text-sm'>Participas</p>
        <hr className='border border-slate-300'/>
        <div className='overflow-y-auto scrollbar-hide'>
          {
            memberships.length > 0 ? memberships.map( membership => <Card key={ membership.id } classroom={ membership }/> ) 
                                  : <p className='text-slate-400 text-sm'>No participas en ningun aula</p>
          }
        </div>
    </aside>
  )
}
