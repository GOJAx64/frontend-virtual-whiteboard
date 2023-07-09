import React from 'react'

export const UserSearcher = () => {
  return (
    <>
      <input 
          placeholder="Buscar a una persona" 
          className="my-2 bg-slate-100 placeholder-slate-400 placeholder-opacity-70 border border-slate-300 w-full p-2 text-slate-500 rounded-md"
          //value={ searchValue }
          //onChange={ e => setSearchValue(e.target.value) }
      />
      <hr className='border border-slate-200 mb-2'/>
    </>
  )
}
