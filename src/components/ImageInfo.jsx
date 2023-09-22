import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useClassrooms } from '../hooks';
import { ModalImage } from './modals';

export const ImageInfo = () => {
    const { image, showModalImage, setShowModalImage } = useClassrooms();
    const [text, setText] = useState()
    
    useEffect(() => {
        setText(image.text)
    }, [image])

    const handleText = () => {
        console.log(image.text);
    }

    const handleClick = () => {
        setShowModalImage(true);
    }
    
    return (
        <div>
            <img src={image.url} onClick={ handleClick } alt={'Capture'} className='border mx-auto w-8/12 my-2 rounded-sm'/>
            <div className="mt-5 mx-3 h-">
                <div className='overflow-y-auto scrollbar-hide h-52'>
                    <ReactQuill theme="snow" value={text} onChange={handleText}/>
                </div>
            </div>
            { showModalImage && createPortal( <ModalImage/>, document.body) }
        </div>
    )
}
