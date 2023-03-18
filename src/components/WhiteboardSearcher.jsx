import { useEffect } from "react"

export const WhiteboardSearcher = () => {
  useEffect(() => {
    console.log('entra en searcher')
  }, [])

  return (
    <input 
        placeholder="Busca un Pizarron" 
        className="bg-slate-100 placeholder-slate-400 placeholder-opacity-70 border border-slate-300 w-full py-1 px-2 text-slate-300 rounded-md"
        //value={ searchValue }
        //onChange={ e => setSearchValue(e.target.value) }
    />
  )
}
