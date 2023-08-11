import { useEffect } from 'react';
import { CreateActivity, AccordionElement, Header } from '../../components/';
import { useAdmin, useClassrooms } from '../../hooks';
import { useParams } from 'react-router-dom';

export const Activities = () => {
  const isAdmin = useAdmin();
  const params = useParams();
  const { getActivities, classroom, activities, getClassroom } = useClassrooms();
  
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
        <div className={`${ isAdmin ? "h-accordion" : "h-card"} px-8 overflow-y-auto scrollbar-hide`}>
          { activities?.length > 0 ? activities.map( activity =>  <AccordionElement key={ activity.id }  activity={ activity }/> ) 
                                  : <p className="text-slate-500 text-center">No hay actividades o anuncios guardadas</p>
          }
        </div>
        { isAdmin && <CreateActivity/> }
      </div>
    </>
  )
}
