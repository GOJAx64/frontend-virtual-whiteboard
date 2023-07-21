import { useEffect } from 'react';
import { AccordionActivities, CreateActivity } from '../../components/';
import { useAdmin } from '../../hooks';

export const Activities = () => {
  const isAdmin = useAdmin();
  console.log(isAdmin);
  return (
    <div className='h-card'>
      <div className={`${ isAdmin ? "h-accordion" : "h-card"} px-8 overflow-y-auto scrollbar-hide`}>
        <AccordionActivities/>
      </div>
      { isAdmin && <CreateActivity/> }
    </div>
  )
}
