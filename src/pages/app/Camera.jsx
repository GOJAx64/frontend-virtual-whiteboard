import { useCallback, useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Webcam from 'react-webcam';
import { useClassrooms } from '../../hooks';

const videoConstraints = {
  width: 1136,
  height: 640,
  facingMode: "user"
};

export const Camera = () => {
    const webcamRef = useRef(null);
    const [url, setUrl] = useState(null);
    const params = useParams();
    const { uploadImage } = useClassrooms();

    const capture = useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setUrl(imageSrc);
        uploadImage(imageSrc);
      },
      [webcamRef]
    );

    useEffect(() => {
        setUrl(null);
    }, [params.id])
    
    return (
        <div className='flex'>
            <Webcam
                audio={false}
                height={480}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={848}
                videoConstraints={videoConstraints}
                className='border border-slate-400 rounded mt-5 p-3 bg-slate-200'
            />
            <div className='mx-auto mt-6'>
                <div>
                    <button onClick={ capture } className='w-full p-1 rounded uppercase font-semibold text-sm text-slate-800 bg-slate-100 opacity-90 border border-slate-300'>
                        Tomar Captura
                    </button>
                </div>
                { url && (
                    <div className='mt-3 ml-1 p-1 uppercase text-center text-xs text-slate-800'>
                        <p>Ultima captura</p>
                        <hr className='border border-slate-200 mb-3'/>
                        <img src={url} alt={'Capture'} className='w-52'/>
                    </div>
                )}
            </div>
        </div>
    );
}
