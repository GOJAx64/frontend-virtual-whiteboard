import { NavLink } from "react-router-dom"

export const Card = ({ classroom }) => {
  const { name, id } = classroom;

  return (
    <NavLink to={`/dashboard/home/${id}`} className="flex items-center my-2 bg-slate-100 rounded border border-slate-300 shadow-sm md:mx-0 md:flex-row md:w-11/12 hover:bg-slate-50 hover:border-slate-400">
        <div className="flex justify-between p-2 leading-normal">
            <h5 className='text-left text-base tracking-tight text-slate-500'>{ name }</h5>
        </div>
    </NavLink>
  )
}
