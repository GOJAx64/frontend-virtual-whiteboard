import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useClassrooms } from "../../hooks"

export const Classroom = () => {
    const params = useParams();
    const { getClassroom, classroom } = useClassrooms();

    useEffect(() => {
      getClassroom(params.id)
    }, [params.id]);
    
    const { id, name, description} = classroom;
    return (
        <div>
            <h1 className="text-xl text-slate-600">{ name }</h1>
            <h1 className="text-md text-slate-500">{ description }</h1>
        </div>
    )
}
