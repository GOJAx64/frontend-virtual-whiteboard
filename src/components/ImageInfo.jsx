import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useClassrooms } from '../hooks';
import { ModalImage } from './modals';

export const ImageInfo = () => {
    const { image, showModalImage, setShowModalImage, setCharsFromImage, deleteImage } = useClassrooms();
    const [text, setText] = useState()
    
    useEffect(() => {
        setText(image.text)
    }, [image])

    const handleText = () => {
        //console.log(image.text);
    }

    const handleClick = () => {
        setShowModalImage(true);
    }

    const handleDelete = () => {
        if(confirm('¿Estás seguro de eliminar esta actividad? Esta acción no se puede deshacer.')){
            deleteImage(image._id);
        }
    }

    const handleSubmit = () => {
        console.log('save')
    }
    
    const handleSyncChars = () => {
        setCharsFromImage(image._id);
    }

    return (
        <div>
            <div className='flex'>
                <div className='flex flex-col'>
                    <button onClick={ handleDelete } className="border border-slate-200 p-2 my-1 mx-2 text-softRed pointer text-sm font-semibold rounded hover:cursor-pointer hover:border-softRed"> 
                        Eliminar 
                    </button>
                    <button onClick={ handleSubmit } className="bg-softBlue p-2 my-1 mx-2 text-white pointer text-sm  font-semibold rounded hover:cursor-pointer hover:bg-blue-800 transition-colors">
                        Guardar
                    </button>
                    <button onClick={ handleSyncChars } className="bg-softRed p-2 my-1 mx-2 text-slate-50 pointer text-sm  font-semibold rounded hover:cursor-pointer hover:bg-red-500"> 
                        Sincronizar 
                    </button>  
                </div>
                <img src={image.url} onClick={ handleClick } alt={'Capture'} className='border mx-auto w-8/12 my-2 rounded-sm'/>
            </div>
            <div className="mt-5 mx-3 h-">
                <div className='overflow-y-auto scrollbar-hide h-52'>
                    <ReactQuill theme="snow" value={text} onChange={handleText}/>
                </div>
            </div>
            { showModalImage && createPortal( <ModalImage/>, document.body) }
        </div>
    )
}
