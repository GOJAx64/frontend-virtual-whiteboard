import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useClassrooms } from '../../hooks';
import { Alert, Header, OptionsBar } from '../../components';

export const NewClassroom = () => {
  const { alert, showAlert, submitClassroom } = useClassrooms();
  const [description, setDescription] = useState('');
  const [summary, setSummary] = useState('');
  const [name, setName] = useState('');
  
  const handleSubmit = async(e) => {
    e.preventDefault();

    if(  name.length < 2 || name.length > 255 ) {
      showAlert({ msg: 'El nombre debe contener al menos 2 carácteretes y un máximo de 255 carácteres', error: true })
      return;
    }

    await submitClassroom({ name, description, summary });
    setDescription('')
    setSummary('')
    setName('')
  }
  
  return (
    <>
      <Header />
      <div className='flex'>
        <div className="p-4 px-10 h-app_screen w-full">
          <div className="flex items-center justify-between">
            <h3 className="inline text-lg text-slate-500 uppercase font-medium">nueva aula</h3>
            { alert.msg && (
              <div className="w-1/2">
                <Alert alert={ alert }/>
              </div>
            )} 
            <button  onClick={ handleSubmit } className="bg-blue-600 p-2 my-1 text-white pointer text-sm uppercase rounded hover:cursor-pointer hover:bg-slate-700 transition-colors">
              crear
            </button>
          </div>
          <hr className='border border-slate-300 mt-2'/>
          <div className='overflow-y-auto scrollbar-hide h-standard_content'>
            <div className="my-5">
                <label className="uppercase text-slate-500 block text-sm" htmlFor="name">Nombre del Aula</label>
                <input id="name" type="text" placeholder="Aula" className="w-full mt-3 p-2 border border-slate-300 rounded-md bg-white text-slate-500" name='name' value={ name } onChange={ (e) => setName(e.target.value) }
            />
            </div>
            <div className="my-5">
                <label className="uppercase text-slate-500 block text-sm" htmlFor="description">Descripción</label>
                <ReactQuill theme="snow" value={description} onChange={setDescription}/>
            </div>
            <div className="my-5">
                <label className="uppercase text-slate-500 block text-sm" htmlFor="summary">Resumen</label>
                <ReactQuill theme="snow" value={summary} onChange={setSummary}/>
            </div>
          </div>
        </div>
        <OptionsBar/>
      </div>
    </>
  )
}
