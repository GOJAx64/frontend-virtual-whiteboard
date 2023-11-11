import { useClassrooms } from '../hooks';
import onlineIcon from '../assets/online.svg';
import offlineIcon from '../assets/offline-2.svg';

export const UserCardChat = ({ member }) => {
  const { markActiveChat, currentChat } = useClassrooms();
  
  const handleClick = () => {
    markActiveChat(member);
  }

  return (
    <button className={` ${currentChat.name === member.name ? 'border-slate-800 bg-slate-100' : 'border-slate-200'} my-1 border flex rounded space-x-2 p-1 w-full` } onClick={ handleClick }>
      {
        member.online ?  <img src={ onlineIcon } alt='online' className='ml-1 h-5 mt-1'/>
                      :  <img src={ offlineIcon } alt='offline' className='ml-1 h-5 mt-1'/>
      }
      <p className="text-slate-500 pt-1 ">{ member.name }</p>
    </button>
  )
}
