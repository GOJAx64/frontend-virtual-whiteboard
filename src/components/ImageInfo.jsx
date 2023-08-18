import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useClassrooms } from '../hooks';
import { useEffect, useState } from 'react';

export const ImageInfo = () => {
    const { image } = useClassrooms();
    const [text, setText] = useState()
    
    useEffect(() => {
        setText(image.text)
    }, [image])

    const handleText = () => {
        console.log(image.text);
    }
    
    return (
        <div>
            <img src={image.url} alt={'Capture'} className=' mx-auto w-8/12 my-2 rounded-sm'/>
            <div className="mt-5 mx-3">
                <p className="uppercase my-1 text-slate-600 block text-sm">Texto en la imagen</p>
                <ReactQuill theme="snow" value={text} onChange={handleText}/>
            </div>
        </div>
    )
}
