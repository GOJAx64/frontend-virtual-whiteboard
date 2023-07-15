import { useState } from 'react';
import { dateFormat } from '../helpers/dateFormat';

export const IncomingMessage = ({ message }) => {
  const [showInfo, setShowInfo] = useState(false);
  
  return (
    <div className="flex" onClick={ () => setShowInfo(!showInfo) }>
      <p className="bg-slate-200 border shadow-sm border-slate-300 text-slate-600 rounded ml-3 w-5/12 my-1 p-1">
        { message.message } 
      </p>
      <p className={` text-xs opacity-90 text-slate-300 rounded ml-1 mt-4 ${ showInfo ? 'visible' : 'invisible'}`}>
        { dateFormat(message.createdAt) }
      </p>
    </div>
  )
}
