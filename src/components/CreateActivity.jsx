import { createPortal } from 'react-dom';
import { useClassrooms } from '../hooks';
import { ModalActivities } from './modals';


export const CreateActivity = () => {
    const { showModalActivity, setShowModalActivity } = useClassrooms()

    return (
        <>
            <button onClick={ () => setShowModalActivity(true) } className="mt-2 w-10 h-10 rounded-full bg-softRed hover:bg-red-400 text-white">
                +
            </button>
            { showModalActivity && createPortal( <ModalActivities/>, document.body) }
        </>
    )
}
