import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AccordionElement } from '../../components/';
import { useAdmin, useClassrooms } from '../../hooks';


export const Activities = () => {
  const isAdmin = useAdmin();
  const params = useParams();
  const { getActivities, classroom, activities, getClassroom } = useClassrooms();
  
  // useEffect(() => {
  //   getClassroom(params.id)
  // }, [params.id]);

  useEffect(() => {
    getActivities();
  }, [classroom.id]);
  
  return (
    <div className='w-full'>
      <div className={`${ isAdmin ? "h-accordion" : "h-activities_page"} px-8 overflow-y-auto scrollbar-hide mx-auto`}>
        { activities?.length > 0 ? activities.map( activity =>  <AccordionElement key={ activity.id }  activity={ activity }/> ) 
                                : <p className="text-slate-500 text-center">No hay actividades o anuncios guardadas</p>
        }
      </div>
    </div>
  )
}
