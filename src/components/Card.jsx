import { NavLink } from "react-router-dom"

export const Card = ({ classroom }) => {
  const { name, id } = classroom
  return (
    <NavLink to={`${id}`} className="flex items-center mx-1 my-2 bg-slate-200 rounded-lg border border-slate-400 shadow-md md:mx-0 md:flex-row md:w-full hover:bg-slate-50 hover:border-slate-400">
        <div className="flex justify-between px-2 py-3 leading-normal">
            <h5 className='text-left text-base tracking-tight text-slate-500'>{ name }</h5>
        </div>
    </NavLink>
  )
}
