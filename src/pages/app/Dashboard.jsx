import { useEffect } from "react";
import { Alert, Card, Header, Searcher } from "../../components"
import { useClassrooms } from "../../hooks";

export const Dashboard = () => {
  const { alert, getClassroomsFromUser, classrooms, memberships } = useClassrooms();
  
  useEffect(() => {
    getClassroomsFromUser()
  }, [])

  return (
    <>
      <Header/>
      <div className='p-6'>
        <div className="flex items-center justify-center">
            { alert.msg && (
                <div className="w-1/2 my-4">
                    <Alert alert={ alert }/>
                </div>
            )}
        </div>
        <div className="text-center">
          <Searcher/>
        </div>
        <p className=' text-slate-300 text-sm mt-3'>Administras</p>
        <hr className='border border-slate-200'/>
        <div className='overflow-y-auto scrollbar-hide grid grid-cols-4 space-x-1'>
          {
            classrooms.length > 0 ? classrooms.map( classroom => <Card key={ classroom.id } classroom={ classroom }/> ) 
                                  : <p className='text-slate-400 text-sm'>No administras ningun aula</p>
          }
        </div>
        <p className='mt-2 text-slate-300 text-sm'>Participas</p>
        <hr className='border border-slate-200'/>
        <div className='overflow-y-auto scrollbar-hide grid grid-cols-4 space-x-1'>
          {
            memberships.length > 0 ? memberships.map( membership => <Card key={ membership.id } classroom={ membership }/> ) 
                                  : <p className='text-slate-400 text-sm'>No participas en ningun aula</p>
          }
        </div>
      </div>
    </>
  )
}
