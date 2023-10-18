import { useState } from 'react';
import { dateFormat } from '../helpers/dateFormat';

export const OutgoingMessage = ({ message }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="flex" onClick={ () => setShowInfo(!showInfo) }>
      <div className={`grid justify-items-end w-7/12 mr-1 ${ showInfo ? 'visible' : 'invisible'}`}>    
        <p className=" text-xs opacity-90 text-slate-300 rounded ml-1 mt-4 inline">
          { dateFormat(message.createdAt) }
        </p>
      </div>
      <p className="bg-blue-300 border w-5/12  mr-3 my-1 p-1 rounded text-slate-600 border-softBlue shadow-sm items-end">
        { message.message }
      </p>
    </div>
  )
}
