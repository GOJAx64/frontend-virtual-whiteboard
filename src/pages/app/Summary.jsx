import { useClassrooms } from "../../hooks";

export const Summary = () => {
  const { classroom } = useClassrooms();
  const { members } = classroom;

  return (
    <div className='flex space-x-3 h-card mt-5'>
      <div className='w-3/4 p-4 border rounded-lg border-slate-400'>
        Resumen
      </div>
      <div className='border rounded-lg border-slate-400 bg-slate-50 p-4 w-1/4'>
        <p className='text-center text-slate-600 uppercase text-sm font-semibold'>miembros</p>
        <hr className='border border-slate-300 mb-3'/>
        {
          members?.length > 0 ? members.map( member =>  <p key={ member.id } className="text-slate-500">- { member.name }</p> ) 
                                       : <p className="text-slate-500 text-center">No hay miembros</p>
        }
      </div>
    </div>
  )
}
