import { useClassrooms } from '../hooks';

export const ChatMessages = () => {
  const { currentChat } = useClassrooms();
  
  return (
    <div className='ml-4 border border-slate-300 w-10/12 rounded-lg'>
      <p className='p-3 font-semibold bg-slate-200 rounded-t-lg'>{ currentChat.name }</p>
      {
        currentChat.online ? <p>Conectado</p> : <p> desco</p>
      }
    </div>
  )
}
