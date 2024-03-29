import { useParams } from "react-router-dom";
import { CreateActivity, Header, MemberCard, ModalInfoClassroom, ModalUpdateActivity, OptionsBar, ShowInfoClassroom } from "../../components";
import { useAdmin, useClassrooms } from "../../hooks";
import ReactHtmlParser from 'react-html-parser';
import { useEffect } from "react";
import { Activities } from "./Activities";
import { createPortal } from "react-dom";

export const Summary = () => {
  const { getClassroom, classroom, members, showModalUpdateActivity, showModalInfoClassroom, getActivities } = useClassrooms();
  const params = useParams();
  const isAdmin = useAdmin();

  useEffect(() => {
    getClassroom(params.id)
  }, [params.id]);
  
  useEffect(() => {
    getActivities();
  }, [classroom.id]);

  return (
    <>
      <Header />
      <div className="flex">
        <div className='flex h-app_screen p-2 w-full'>
          <div className='w-8/12 p-2 rounded-md ' >
            <div className="flex items-center justify-between">
              <div className="flex">
                <h2 className="text-slate-500 uppercase text-lg font-semibold">{ classroom.name }</h2>
                <ShowInfoClassroom/>
              </div>
              { isAdmin && <CreateActivity/> }
              { showModalUpdateActivity && createPortal( <ModalUpdateActivity/>, document.body) }
              { showModalInfoClassroom && createPortal( <ModalInfoClassroom/>, document.body) }
            </div>
            <hr className='border border-slate-200 my-2'/>
            <div className="h-standard_content overflow-y-auto scrollbar-hide">
              <div className="mb-2 p-3 text-slate-500 text-sm">{ ReactHtmlParser(classroom.description) }</div>
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
