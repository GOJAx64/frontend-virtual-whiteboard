import { useClassrooms } from '../hooks'

export const UserSearcher = () => {
  const { searchValueMember, setSearchValueMember } = useClassrooms();
  return (
    <>
      <input 
          placeholder="Buscar a una persona" 
          className="mb-2 bg-slate-50 placeholder-slate-600 placeholder-opacity-80 border border-slate-400 w-full p-2 text-slate-600 rounded-md"
          value={ searchValueMember }
          onChange={ e => setSearchValueMember(e.target.value) }
      />
      <hr className='border border-slate-200 mb-2'/>
    </>
  )
}
