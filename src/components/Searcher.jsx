import { useClassrooms } from "../hooks"

export const Searcher = () => {
  const { searchValueClass, setSearchValueClass } = useClassrooms();

  return (
    <input 
        placeholder="Busca un aula" 
        className="bg-slate-50 placeholder-slate-400 placeholder-opacity-70 border border-slate-400 w-1/2 p-1 text-slate-500 rounded"
        value={ searchValueClass }
        onChange={ e => setSearchValueClass(e.target.value) }
    />
  )
}
