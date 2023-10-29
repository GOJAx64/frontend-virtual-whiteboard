import { createPortal } from "react-dom"
import { useClassrooms } from "../hooks"
import { ModalInfoClassroom } from "./modals/ModalInfoClassroom"

export const ShowInfoClassroom = () => {
    const { showModalInfoClassroom, setShowModalInfoClassroom } = useClassrooms();

    return (
        <>
            <button onClick={ () => setShowModalInfoClassroom(true) } className="ml-1 mt-1 w-5 h-5 text-slate-400 font-mono rounded-full bg-slate-50 border border-slate-300 hover:bg-slate-100">
                i
            </button>
            
        </>
    )
}
