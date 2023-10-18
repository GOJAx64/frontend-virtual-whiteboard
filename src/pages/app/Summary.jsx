import { useParams } from "react-router-dom";
import { Header, MemberCard, OptionsBar } from "../../components";
import { useClassrooms } from "../../hooks";
import ReactHtmlParser from 'react-html-parser';
import { useEffect } from "react";
import { Activities } from "./Activities";

export const Summary = () => {
  const { getClassroom, classroom, members, classrooms } = useClassrooms();
  const params = useParams();

  useEffect(() => {
    getClassroom(params.id)
  }, [params.id]);
  
  return (
    <>
      <Header />
      <div className="flex">
        <div className='flex h-app_screen p-2 w-full'>
          <div className='w-8/12 p-2 rounded-md ' >
            <h2 className="text-slate-500 uppercase text-lg font-semibold">{ classroom.name }</h2>
            <hr className='border border-slate-200 mb-3'/>
            <div className="h-standard_content overflow-y-auto scrollbar-hide">
              <div className="mb-2 p-3 text-slate-500 text-sm">{ ReactHtmlParser(classroom.description) }</div>
              {/* <hr className='border border-slate-200 mb-3'/>
              <div className="text-slate-500 py-1 px-3 text-sm">{ ReactHtmlParser(classroom.summary) }</div> */}
              <Activities/>
            </div>
          </div>
          <div className=' border-slate-300 p-4 w-4/12'>
            <p className='text-center text-slate-500 uppercase text-sm font-semibold'>miembros</p>
            <hr className='border border-slate-200 mb-2'/>
            <div className="h-standard_content overflow-y-auto scrollbar-hide">
              {
                members?.length > 0 ? members.map( member =>  <MemberCard key={ member.id} member={ member } isInformative={ true }/> ) 
                                            : <p className="text-slate-500 text-center">No hay miembros</p>
              }
            </div>
          </div>
        </div>
        <OptionsBar/>
      </div>
    </>
  )
}
