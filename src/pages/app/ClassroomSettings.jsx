import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useClassrooms } from '../../hooks';
import { ModalMembers, Alert, Header} from '../../components';

export const ClassroomSettings = () => {
    const { alert, showAlert, updateClassroom, deleteClassroom, classroom, showModalMembers, setShowModalMembers, getClassroom } = useClassrooms();
    const [description, setDescription] = useState('');
    const [summary, setSummary] = useState('');
    const [name, setName] = useState('');
    const params = useParams();

    useEffect(() => {
        getClassroom(params.id)
    }, [params.id]);
    
    useEffect(() => {
        setName(classroom.name)
        setDescription(classroom.description)
        setSummary(classroom.summary || '');
    }, [classroom])
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        if( name.length < 2 || name.length > 255) {
            showAlert({ msg: 'El nombre debe contener al menos 2 carácteretes y un máximo de 255 carácteres', error: true })
            return;
        }
        await updateClassroom({ id: classroom.id, name, description, summary });
    }

    const handleDelete = () => {
        if(confirm('¿Estás seguro de eliminar esta aula? Esta acción no se puede deshacer.')){
            deleteClassroom(classroom.id);
        }
    }

    return (
        <>
            <Header />
            <div className='p-4 h-app_screen'>
                <h2 className="text-slate-600 font-semibold">Ajustes de { classroom.name }</h2>
                <hr className='border border-slate-200 mb-1'/>
                <div className='overflow-y-auto scrollbar-hide h-settings_page'>
                    <div className="mb-5 mt-1">
                        <label className="uppercase text-slate-600 block text-sm ml-1" htmlFor="name">Nombre del Aula</label>
                        <input id="name" type="text" placeholder="Aula" className="w-full mt-2 p-2 border border-slate-300 rounded bg-white text-slate-700 text-sm" name='name' value={ name } onChange={ (e) => setName(e.target.value) }/>
                    </div>
                    <div className="my-5">
                        <label className="uppercase text-slate-600 block text-sm" htmlFor="description">Descripción</label>
                        <ReactQuill theme="snow" value={description} onChange={setDescription}/>
                    </div>
                    <div className="mt-5">
                        <label className="uppercase text-slate-600 block text-sm" htmlFor="summary">Detalles</label>
                        <ReactQuill theme="snow" value={summary} onChange={setSummary}/>
                    </div>
                </div>
                <hr className='border border-slate-200 mt-4'/>
                <div className="flex items-center justify-between mt-1">
                    <div>
                        <button onClick={ handleSubmit } className="bg-softBlue p-2 my-1 mx-2 text-white pointer text-sm  font-semibold rounded hover:cursor-pointer hover:bg-blue-800 transition-colors">
                            Guardar
                        </button>
                        <button onClick={ () => setShowModalMembers(true) } className="bg-softRed p-2 my-1 mx-2 text-slate-50 pointer text-sm  font-semibold rounded hover:cursor-pointer hover:bg-red-500"> 
                            Administrar participantes 
                        </button>
                        { showModalMembers && createPortal( <ModalMembers/>, document.body) }
                    </div>
                    { alert.msg && (
                        <div>
                            <Alert alert={ alert }/>
                        </div>
                    )} 
                    <button onClick={ handleDelete } className="border border-slate-200 p-2 my-1 mx-2 text-softRed pointer text-sm font-semibold rounded hover:cursor-pointer hover:border-softRed"> 
                        Eliminar 
                    </button>    
                </div>
            </div>
        </>
    )
}
