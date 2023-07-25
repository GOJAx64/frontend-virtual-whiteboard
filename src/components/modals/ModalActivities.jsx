import { useClassrooms, useForm } from '../../hooks';
import { Alert } from '..';

const formData = {
    title: '',
    description: '',
    dueDate: '',
}

//? Should we use regular expressions?
const formValidations = { 
    title: [ (value) => value.length > 2, 'El título debe ser mayor a 2 carácteres'],
    description: [ (value) => value.length > 2, 'La descripción debe ser mayor a 2 carácteres'],
}

export const ModalActivities = () => {
    const { formState, title, description, dueDate, isFormValid, onInputChange, onResetForm} = useForm(formData, formValidations);
    const { alert, setAlert, classroom, setShowModalActivity, submitActivity } = useClassrooms();

    const handleSubmit = async(e) => {
        if( !isFormValid ) {
            setAlert({
                msg: 'Errores en los datos del formulario',
                error: true
            })
            setTimeout(() => {
                setAlert({});
            }, 5000);
            return;
        }
        console.log('entra')
        submitActivity(formState);
        onResetForm();
    };

    const handleCloseModal = () => {
        setShowModalActivity(false);
    };

    return (
        <>
            <div className="ml-48 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-full max-w-4xl border border-slate-400 rounded-xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-100 outline-none focus:outline-none">
                        
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-400 rounded-t-lg bg-slate-900">
                            <h3 className="text-2xl font-medium text-slate-400">
                                Agrega una actividad en: { classroom.name }
                            </h3>
                            <button className="p-1 ml-auto border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={ handleCloseModal }>
                                <span className=" text-slate-400 h-6 w-6 text-2xl block outline-none focus:outline-none font-mono hover:text-softRed">
                                x
                                </span>
                            </button>
                        </div>
                        
                        {/*body*/}
                        <div className="relative p-6 flex bg-slate-50 space-x-3">
                            <div className='w-full border border-slate-400 rounded-lg p-4'>
                                
                                <label className="uppercase text-slate-600 block text-sm font-semibold" htmlFor="email">Título</label>
                                <hr className='border border-slate-300 mb-3'/>
                                <div className='flex mt-2'>
                                    <input
                                        id="title"
                                        type="text"
                                        className="w-full p-2 border rounded-md bg-slate-200 text-slate-500 border-slate-300"
                                        name='title'
                                        value={ title }
                                        onChange={ onInputChange }
                                    />
                                    
                                </div>
                                
                                <label className="mt-3 uppercase text-slate-600 block text-sm font-semibold" htmlFor="email">Descripción</label>
                                <hr className='border border-slate-300 mb-3'/>
                                <div className='flex mt-2'>
                                    <input
                                        id="description"
                                        type="text"
                                        className="w-full p-2 border rounded-md bg-slate-200 text-slate-500 border-slate-300"
                                        name='description'
                                        value={ description }
                                        onChange={ onInputChange }
                                    />
                                    
                                </div>

                                <label className="mt-3 uppercase text-slate-600 block text-sm font-semibold" htmlFor="email">Fecha de Entrega</label>
                                <hr className='border border-slate-300 mb-3'/>
                                <div className='flex mt-2'>
                                    <input
                                        id="dueDate"
                                        type="date"
                                        className="w-full p-2 border rounded-md bg-slate-200 text-slate-500 border-slate-300"
                                        name='dueDate'
                                        value={ dueDate }
                                        onChange={ onInputChange }
                                    />
                                    
                                </div>
                                <div className="flex items-center justify-center">
                                    { alert.msg && (
                                        <div className="w-full my-4">
                                            <Alert alert={ alert }/>
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                        </div>

                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-400 rounded-b bg-slate-200">
                            <button
                                className="bg-blue-700 text-slate-300 font-bold uppercase text-sm px-6 py-2 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mx-2"
                                type="button"
                                onClick={ handleSubmit }
                            >
                                Agregar
                            </button>
                            <button
                                className="text-red-500 border border-slate-400 rounded-md hover:border-softRed font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                onClick={ handleCloseModal }
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
