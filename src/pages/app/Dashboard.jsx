import { useEffect } from "react";
import { Alert, Card, Header, OptionsBar, Searcher } from "../../components"
import { useClassrooms } from "../../hooks";

export const Dashboard = () => {
  const { alert, getClassroomsFromUser, searchedClasses } = useClassrooms();
  const { managedClasses, membershipClasses } = searchedClasses;

  useEffect(() => {
    getClassroomsFromUser()
  }, [])

  return (
    <>
      <Header/>
      <div className="flex">
        <div className='p-6 w-full'>
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
              managedClasses.length > 0 ? managedClasses.map( classroom => <Card key={ classroom.id } classroom={ classroom }/> ) 
                                    : <p className='text-slate-400 text-sm'>No administras ningun aula</p>
            }
          </div>
          <p className='mt-2 text-slate-300 text-sm'>Participas</p>
          <hr className='border border-slate-200'/>
          <div className='overflow-y-auto scrollbar-hide grid grid-cols-4 space-x-1'>
            {
              membershipClasses.length > 0 ? membershipClasses.map( membership => <Card key={ membership.id } classroom={ membership }/> ) 
                                    : <p className='text-slate-400 text-sm'>No participas en ningun aula</p>
            }
          </div>
        </div>
        <OptionsBar/>
      </div>
    </>
  )
}
