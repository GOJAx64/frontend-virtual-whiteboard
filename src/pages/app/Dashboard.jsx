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
        <p className='text-slate-400'>
          Selecciona o crea una aula para comenzar a interactuar
        </p>
        <div className="flex items-center justify-center">
            { alert.msg && (
                <div className="w-1/2 my-4">
                    <Alert alert={ alert }/>
                </div>
            )}
        </div>
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
      </div>
    </>
  )
}
