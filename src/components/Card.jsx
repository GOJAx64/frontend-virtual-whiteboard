import { useRef } from "react";
import { NavLink } from "react-router-dom"

export const Card = ({ classroom }) => {
  const { name, id } = classroom;

  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    console.log(`You clicked ${ref.current} times! in ${name}`);
  }

  return (
    <NavLink to={`${id}`} onClick={ handleClick } className="flex items-center my-2 bg-slate-200 rounded border border-slate-400 shadow-md md:mx-0 md:flex-row md:w-full hover:bg-slate-50 hover:border-slate-400">
        <div className="flex justify-between p-2 leading-normal">
            <h5 className='text-left text-base tracking-tight text-slate-500'>{ name }</h5>
        </div>
    </NavLink>
  )
}
