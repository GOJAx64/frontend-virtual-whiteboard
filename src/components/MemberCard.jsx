import deleteIcon from '../assets/delete.svg';

export const MemberCard = ({member}) => {
  const onDeleteMember = (email) => {
    console.log(email)
  };

  return (
    <div className="mb-1 border border-slate-300 flex rounded-lg space-x-2 p-1">
      <img src={ deleteIcon } alt='eliminar' className='h-5 mt-2' onClick={ () => onDeleteMember(member.email) }/>
      <div>
        <p className="text-slate-500">{ member.name }</p>
        <p className="text-slate-400 text-xs">{ member.email}</p>
      </div>
    </div>
  )
}
