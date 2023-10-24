import { createPortal } from 'react-dom';
import { useClassrooms } from '../hooks';
import { ModalActivities } from './modals';


export const CreateActivity = () => {
    const { showModalActivity, setShowModalActivity } = useClassrooms()

    return (
        <>
            <button onClick={ () => setShowModalActivity(true) } className="ml-4 px-4 rounded bg-blue-700 hover:bg-softBlue text-white">
                +
            </button>
            { showModalActivity && createPortal( <ModalActivities/>, document.body) }
        </>
    )
}
