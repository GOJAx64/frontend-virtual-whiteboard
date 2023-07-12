import { useEffect } from 'react';
import { useClassrooms } from '../hooks';

export const DisplayMessages = () => {
  // const { messages } = useClassrooms();

  // useEffect(() => {
  //   showMessages();
  // }, [messages])
  
  const showMessages = () => {
    return (
      <div className='h-4/5 bg-slate-50'>
          {
              messages.map( item => {
                  return <p>{ item.message }</p>
              })
          }
      </div>
    )
  }

  return (
    <>
      { showMessages }
    </>
  )
}
