import { useEffect } from "react";
import { useClassrooms } from "../hooks";
import { Card } from "./";

export const WhiteboardList = () => {
    const { classrooms } = useClassrooms();
    useEffect(() => {
        console.log('entra en lista de pizarrones')
    }, [])

    return (
        <div className='bg-slate-50 border-slate-300 mt-5'>
            {/* dark:bg-slate-800 dark:border-slate-800 */}
            {/* <hr className='border border-slate-200'/> */}
            {/* dark:border-slate-700 */}
            {
            classrooms.length > 0 ? classrooms.map( classroom => <Card key={ classroom.id } classroom={ classroom }/> ) 
                                    : <p>No hay aulas registradas</p>
            }
        </div>
    )
}
