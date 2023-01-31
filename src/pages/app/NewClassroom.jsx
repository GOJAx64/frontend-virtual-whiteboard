import { Alert } from "../../components";
import { useForm, useClassrooms } from "../../hooks";

const formData = {
  name: '',
  description: '',
}

//? Should we use regular expressions?
const formValidations = { 
  name: [ (value) => value.length > 2 && value.length < 46, 'El nombre debe contener al menos 2 caracteretes y un máximo de 45 caracteres'],
  description: [ (value) => value.length < 255, 'La descripción debe tener un máximo de 255 caracteres']
}

export const NewClassroom = () => {
  const { name, description, isFormValid, onInputChange } = useForm(formData, formValidations);
  const { alert, showAlert, submitClassroom } = useClassrooms();

  const handleSubmit = async(e) => {
    e.preventDefault();

    if( !isFormValid ) {
      showAlert({
          msg: 'Errores en los datos del formulario',
          error: true
      })
      return;
    }

    submitClassroom({ name, description });
  }
  
  return (
    <form className="p-6" onSubmit={ handleSubmit }>
      <div className="flex items-center justify-between">
        <h3 className="inline text-xl text-softBlue uppercase">nueva aula</h3>
        { alert.msg && (
          <div className="w-1/2">
            <Alert alert={ alert }/>
          </div>
        )} 
        <input 
          type="submit"
          value="Crear"
          className="bg-softBlue p-2 my-1 text-white pointer text-sm uppercase font-bold rounded hover:cursor-pointer hover:bg-slate-700 transition-colors"
        />
      </div>
      <hr className='border border-slate-300 mt-4'/>
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
        
    </form>

  )
}
