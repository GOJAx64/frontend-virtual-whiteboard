import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';
import { CreateActivity, AccordionElement, Header, ModalUpdateActivity } from '../../components/';
import { useAdmin, useClassrooms } from '../../hooks';


export const Activities = () => {
  const isAdmin = useAdmin();
  const params = useParams();
  const { showModalUpdateActivity, getActivities, classroom, activities, getClassroom } = useClassrooms();
  
  useEffect(() => {
    getClassroom(params.id)
  }, [params.id]);

  useEffect(() => {
    getActivities();
  }, [classroom.id]);
  
  return (
    <>
      <Header />
      <div className='h-app_screen p-2'>
        <div className={`${ isAdmin ? "h-accordion" : "h-activities_page"} px-8 overflow-y-auto scrollbar-hide`}>
          { activities?.length > 0 ? activities.map( activity =>  <AccordionElement key={ activity.id }  activity={ activity }/> ) 
                                  : <p className="text-slate-500 text-center">No hay actividades o anuncios guardadas</p>
          }
        </div>
        { isAdmin && <CreateActivity/> }
        { showModalUpdateActivity && createPortal( <ModalUpdateActivity/>, document.body) }
      </div>
    </>
  )
}
