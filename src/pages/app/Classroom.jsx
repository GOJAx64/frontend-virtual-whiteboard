import { useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { useClassrooms } from "../../hooks"

export const Classroom = () => {
    const params = useParams();
    const { getClassroom, classroom } = useClassrooms();

    useEffect(() => {
      getClassroom(params.id)
    }, [params.id]);
    
    const { id, name, description} = classroom;
    return (
        <div className="p-6">
            <h1 className="inline text-xl text-softBlue uppercase">{ name }</h1>
            <h3 className="text-md text-slate-400">{ description }</h3>
            {/* <hr className='border border-slate-300 my-4'/> */}

            <nav className="flex items-center justify-between flex-wrap mt-3 mx-auto px-6 w-full">
                <Link to="summary"            className="mt-4 text-sm text-slate-400 tracking-widest hover:text-softRed block lg:inline-block uppercase">resumen</Link>
                <Link to="whiteboards"        className="mt-4 text-sm text-slate-400 tracking-widest hover:text-softRed block lg:inline-block uppercase">pizarrones</Link>
                <Link to="chat"               className="mt-4 text-sm text-slate-400 tracking-widest hover:text-softRed block lg:inline-block uppercase">chat</Link>
                <Link to="classroom_settings" className="mt-4 text-sm text-slate-400 tracking-widest hover:text-softRed block lg:inline-block uppercase">configuración</Link>
            </nav>
            <hr className='border border-slate-300 mt-1'/>
        </div>
    )
}
