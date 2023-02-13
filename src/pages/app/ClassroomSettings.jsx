import { useEffect } from 'react';
import { useClassrooms, useForm } from "../../hooks";
import { Alert } from "../../components";

const formData = {
    name: '',
    description: '',
    details: '',
}

//? Should we use regular expressions?
const formValidations = { 
    name: [ (value) => value.length > 2 && value.length < 46, 'El nombre debe contener al menos 2 caracteretes y un máximo de 45 caracteres'],
    description: [ (value) => value.length < 255, 'La descripción debe tener un máximo de 255 caracteres'],
    //  details: [ (value) => value.length < 2000, 'Los detalles debe tener un máximo de 255 caracteres'], 
}

export const ClassroomSettings = () => {
    const { alert, showAlert, updateClassroom, classroom } = useClassrooms();
    //TODO Show data of classroom in the form
    const { name, description, details, isFormValid, onInputChange, onResetForm} = useForm(formData. formValidations);

    const handleSubmit = async(e) => {
        e.preventDefault();

        if( !isFormValid ) {
            showAlert({
                msg: 'Errores en los datos del formulario',
                error: true
            })
            return;
        }

        await updateClassroom({ id: classroom.id, name, description, details });
        onResetForm();
    }

    return (
    <>
        <form className="" onSubmit={ handleSubmit }>
            <div className="flex items-center justify-between">
                <h3 className="inline text-base text-slate-400 ">Realiza los cambios necesarios en esta aula</h3>
                { alert.msg && (
                <div className="w-1/2">
                    <Alert alert={ alert }/>
                </div>
                )}
                <div>
                    <input 
                        type="submit"
                        value="Guardar"
                        className="bg-softBlue p-2 my-1 mx-2 text-white pointer text-sm uppercase font-bold rounded hover:cursor-pointer hover:bg-slate-700 transition-colors"
                    />
                    <input 
                        type="submit"
                        value="Eliminar"
                        className="bg-softRed p-2 my-1 mx-2 text-white pointer text-sm uppercase font-bold rounded hover:cursor-pointer hover:bg-slate-700 transition-colors"
                    />
                </div>    
            </div>
            {/* <hr className='border border-slate-300 mt-4'/> */}
            <div className="my-5">
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
                <label className="uppercase text-slate-500 block text-sm" htmlFor="details">Resumen</label>
                <input
                    id="details"
                    type="text"
                    placeholder="Aqui puede escribir el objetivo, temas a ver, evaluación o cualquier otro tipo de dato que considere relevante."
                    className="w-full mt-3 p-3 border rounded-xl bg-slate-100 text-slate-500"
                    name='details'
                    value={ details }
                    onChange={ onInputChange }
                />
            </div>
        </form>
    </>
  )
}
