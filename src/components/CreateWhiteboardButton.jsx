import { useEffect } from "react";
import { createPortal } from 'react-dom';
import { useClassrooms } from "../hooks";
import { ModalNewClassroom } from "./modals/ModalNewClassroom";


export const CreateWhiteboardButton = () => {
    const { showModal, setShowModal } = useClassrooms();
    
    useEffect(() => {
        console.log('entra en boton crear')
    }, [])

    return (
        <>
        <button onClick={ () => setShowModal(true) } className="w-2/12 border border-slate-400 text-slate-600 font-bold bg-slate-300 ml-2 rounded-md hover:bg-slate-200 hover:border-slate-400">
            +
        </button>
        { showModal && createPortal( <ModalNewClassroom/>, document.body) }
        </>
    )
}
