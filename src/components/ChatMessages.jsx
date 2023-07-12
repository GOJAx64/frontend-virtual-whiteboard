import { useState } from 'react';
import { useAuth, useClassrooms } from '../hooks';
import { IncomingMessage } from './IncomingMessage';
import { OutgoingMessage } from './OutgoingMessage';

export const ChatMessages = () => {
  const { currentChat, socket, classroom, messages } = useClassrooms();
  const { auth } = useAuth();
  const [message, setMessage] = useState('');
  
  const onChange = ({ target }) => {
    setMessage(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(message.trim().length === 0) return;
    
    socket.emit('send-personal-message', {
      from: auth.id,
      to: currentChat.id,
      classroomId: classroom.id,
      message: message.trim()
    });

    setMessage('');
  };

  return (
    <div className='ml-4 border border-slate-400 w-10/12 rounded-lg'>
      <p className='p-3 font-semibold bg-slate-100 text-slate-600 border-b rounded-t-lg  border-slate-300'>{ currentChat.name }</p>
      <div className='h-4/5 py-2 bg-slate-50'>
          {
              messages?.map( item => (
                ( item.to === auth.id ) ? <IncomingMessage key={ item.id } message={ item }/>
                                        : <OutgoingMessage key={ item.id } message={ item }/>
              ))
          }
      </div>
      <hr className='border border-slate-200 mb-2'/>
      <form onSubmit={ onSubmit }>
        <div className="flex justify-end">
          <input 
            type="text" 
            onChange={ onChange }
            className="placeholder-slate-500 placeholder-opacity-70 w-11/12 p-2 ml-2 rounded-lg text-slate-600 border border-slate-200 bg-slate-200" 
            placeholder="Mensaje..." 
            value={ message }
          />
          <button className="w-1/12 p-1 mx-2 border rounded-lg bg-softBlue text-slate-50 uppercase text-xs font-semibold" type="submit">
              enviar
          </button>
        </div>
      </form>
    </div>
  )
}
