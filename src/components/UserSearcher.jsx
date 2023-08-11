import React from 'react'

export const UserSearcher = () => {
  return (
    <>
      <input 
          placeholder="Buscar a una persona" 
          className="mb-2 bg-slate-50 placeholder-slate-600 placeholder-opacity-80 border border-slate-300 w-full p-2 text-slate-600 rounded-md"
          //value={ searchValue }
          //onChange={ e => setSearchValue(e.target.value) }
      />
      <hr className='border border-slate-200 mb-2'/>
    </>
  )
}
