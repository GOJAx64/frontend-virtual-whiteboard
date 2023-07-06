import profileIcon from '../assets/profile.svg';

export const UserCardChat = ({ member }) => {
  const handleClick = () => {
    console.log('Click en chat')
  }

  return (
    <button className="my-2 border border-slate-300 flex rounded-lg space-x-2 p-1 w-full" onClick={ handleClick }>
      <img src={ profileIcon } alt='perfil' className='ml-1 h-5 mt-2'/>
      <p className="text-slate-500 pt-1 ">{ member.name }</p>
    </button>
  )
}
