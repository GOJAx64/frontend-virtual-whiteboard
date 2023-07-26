import { MemberCard } from "../../components";
import { useClassrooms } from "../../hooks";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export const Summary = () => {
  const { classroom, members } = useClassrooms();
  
  return (
    <div className='flex space-x-3 h-card mt-5'>
      <div className='w-2/3 p-2 rounded-md ' >
        <h2 className="font-bold text-xl text-slate-800">{ classroom.name }</h2>
        <div className="mb-2 text-slate-700 text-sm">{ ReactHtmlParser(classroom.description) }</div>
        <hr className='border border-slate-200 mb-3'/>
        <div className="text-slate-700 text-sm">{ ReactHtmlParser(classroom.summary) }</div>
        
      </div>
      <div className='border rounded-lg border-slate-300 bg-slate-50 p-4 w-1/3'>
        <p className='text-center text-slate-600 uppercase text-sm font-semibold'>miembros</p>
        <hr className='border border-slate-300 mb-3'/>
        {
          members?.length > 0 ? members.map( member =>  <MemberCard key={ member.id} member={ member } isInformative={ true }/> ) 
                                       : <p className="text-slate-500 text-center">No hay miembros</p>
        }
      </div>
    </div>
  )
}
