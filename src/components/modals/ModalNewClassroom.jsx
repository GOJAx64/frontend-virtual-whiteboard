import { useClassrooms, useForm } from '../../hooks';
import { Alert } from "../../components";

const formData = {
    name: '',
    description: '',
    summary: '',
  }
  
//? Should we use regular expressions?
const formValidations = { 
name: [ (value) => value.length > 2 && value.length < 46, 'El nombre debe contener al menos 2 caracteretes y un máximo de 45 caracteres'],
description: [ (value) => value.length < 255, 'La descripción debe tener un máximo de 255 caracteres'],
summary: [ (value) => value.length < 2000, 'La descripción debe tener un máximo de 255 caracteres'], 
}

export const ModalNewClassroom = () => {
    const { name, description, summary, isFormValid, onInputChange, onResetForm} = useForm(formData, formValidations);
    const { alert, showAlert, submitClassroom, setShowModal } = useClassrooms();

    const handleSubmit = async(e) => {
        console.log('llega al handlesubmit')
        e.preventDefault();

        if( !isFormValid ) {
        showAlert({
            msg: 'Errores en los datos del formulario',
            error: true
        })
        return;
        }

        await submitClassroom({ name, description, summary });
        onResetForm();
    }

    return (
        <form className="" onSubmit={ handleSubmit }>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-full md:w-8/12 m-6 max-w-3xl border border-slate-400 rounded-lg">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-100 outline-none focus:outline-none">
                    
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-400 rounded-t">
                    <h3 className="text-2xl font-medium text-slate-400">
                        Nueva Aula
                    </h3>
                    <button className="p-1 ml-auto border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={ () => setShowModal(false) }>
                        <span className=" text-slate-400 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        x
                        </span>
                    </button>
                    </div>
                    
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                        <div className="flex items-center justify-between">
                            { alert.msg && (
                                <div className="w-1/2">
                                    <Alert alert={ alert }/>
                                </div>
                            )}
                        </div>
                        <div className="">
                            <label className="uppercase text-slate-500 block text-sm" htmlFor="name">Nombre del Aula</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Aula"
                                className="w-full mt-3 p-3 border rounded-xl bg-slate-100 text-slate-500"
                                name='name'
                                value={ name }
                                onChange={ onInputChange }
                            />
                        </div>
                        <div className="my-5">
                            <label className="uppercase text-slate-500 block text-sm" htmlFor="description">Descripción</label>
                            <input
                                id="description"
                                type="text"
                                placeholder="Descripción del Aula"
                                className="w-full mt-3 p-3 border rounded-xl bg-slate-100 text-slate-500"
                                name='description'
                                value={ description }
                                onChange={ onInputChange }
                            />
                        </div>
                        <div className="my-5">
                            <label className="uppercase text-slate-500 block text-sm" htmlFor="summary">Resumen</label>
                            <input
                                id="summary"
                                type="text"
                                placeholder="Aqui puede escribir el objetivo, temas a ver, evaluación o cualquier otro tipo de dato que considere relevante."
                                className="w-full mt-3 p-3 border rounded-xl bg-slate-100 text-slate-500"
                                name='summary'
                                value={ summary }
                                onChange={ onInputChange }
                            />
                        </div>
                    </div>

                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-400 rounded-b">
                    <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                    >
                        Cerrar
                    </button>
                    <input
                        className="bg-blue-700 text-slate-300 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                        value="Guardar"
                        // onClick={() => addTodo(textTodo)}
                        onClick={() => setShowModal(false)}
                    />
                     
                    </div>
                </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </form>
    )
}
