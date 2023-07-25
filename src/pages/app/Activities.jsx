import { useEffect } from 'react';
import { CreateActivity, AccordionElement } from '../../components/';
import { useAdmin, useClassrooms } from '../../hooks';

export const Activities = () => {
  const isAdmin = useAdmin();
  const { getActivities, classroom, activities } = useClassrooms();

  useEffect(() => {
    getActivities();
  }, [classroom.id]);
  
  return (
    <div className='h-card'>
      <div className={`${ isAdmin ? "h-accordion" : "h-card"} px-8 overflow-y-auto scrollbar-hide`}>
        { activities?.length > 0 ? activities.map( activity =>  <AccordionElement key={ activity.id }  activity={ activity }/> ) 
                                : <p className="text-slate-500 text-center">No hay actividades o anuncios guardadas</p>
        }
      </div>
      { isAdmin && <CreateActivity/> }
    </div>
  )
}
