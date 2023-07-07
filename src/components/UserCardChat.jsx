import onlineIcon from '../assets/online.svg';
import offlineIcon from '../assets/offline-2.svg';

export const UserCardChat = ({ member }) => {
  const handleClick = () => {
    console.log('Click en chat')
  }

  return (
    <button className="my-2 border border-slate-300 flex rounded-lg space-x-2 p-1 w-full" onClick={ handleClick }>
      {
        member.online ?  <img src={ onlineIcon } alt='online' className='ml-1 h-5 mt-1'/>
                      :  <img src={ offlineIcon } alt='offline' className='ml-1 h-5 mt-1'/>
      }
      <p className="text-slate-500 pt-1 ">{ member.name }</p>
    </button>
  )
}
