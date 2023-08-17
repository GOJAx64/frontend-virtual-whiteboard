import { useParams } from "react-router-dom";
import { Header, MemberCard } from "../../components";
import { useClassrooms } from "../../hooks";
import ReactHtmlParser from 'react-html-parser';
import { useEffect } from "react";

export const Summary = () => {
  const { getClassroom, classroom, members, classrooms } = useClassrooms();
  const params = useParams();

  useEffect(() => {
    getClassroom(params.id)
  }, [params.id]);
  
  return (
    <>
      <Header />
      <div className='flex space-x-3 h-app_screen p-2 mx-3'>
        <div className='w-2/3 p-2 rounded-md ' >
          <h2 className="text-slate-500 uppercase text-lg font-semibold">{ classroom.name }</h2>
          <hr className='border border-slate-200 mb-3'/>
          <div className="mb-2 p-3 text-slate-500 text-sm">{ ReactHtmlParser(classroom.description) }</div>
          <hr className='border border-slate-200 mb-3'/>
          <div className="text-slate-500 py-1 px-3 text-sm">{ ReactHtmlParser(classroom.summary) }</div>
        </div>
        <div className=' border-slate-300 p-4 w-1/3'>
          <p className='text-center text-slate-500 uppercase text-sm font-semibold'>miembros</p>
          <hr className='border border-slate-200 mb-3'/>
          {
            members?.length > 0 ? members.map( member =>  <MemberCard key={ member.id} member={ member } isInformative={ true }/> ) 
                                        : <p className="text-slate-500 text-center">No hay miembros</p>
          }
        </div>
      </div>
    </>
  )
}
