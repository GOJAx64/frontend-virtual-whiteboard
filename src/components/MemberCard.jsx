import { useClassrooms } from '../hooks';
import deleteIcon from '../assets/delete.svg';
import profileIcon from '../assets/profile.svg';

export const MemberCard = ({member, isInformative }) => {
  const { deleteMember } = useClassrooms();

  return (
    <div className="mb-1 border border-slate-300 flex rounded-lg space-x-2 p-1">
      { isInformative ? <img src={ profileIcon } alt='perfil' className='ml-1 h-5 mt-2'/>
                      : <img src={ deleteIcon } alt='eliminar' className='h-5 mt-2 hover:cursor-pointer' onClick={ () => deleteMember(member.email) }/>
      }
      <div>
        <p className="text-slate-500">{ member.name }</p>
        <p className="text-slate-400 text-xs">{ member.email }</p>
      </div>
    </div>
  )
}
