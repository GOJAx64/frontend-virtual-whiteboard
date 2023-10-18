import { useEffect } from 'react';
import { useClassrooms } from '../../hooks';
import { Header, ImageInfo, ImageList, OptionsBar } from '../../components';
import { useParams } from 'react-router-dom';
import { Alert } from '../../components';

export const Images = () => {
    const { getImages, getClassroom, classroom, isActiveImage, alert } = useClassrooms();
    const params = useParams();

    useEffect(() => {
       getClassroom(params.id)
    }, [params.id]);

    useEffect(() => {
      getImages();
    }, [classroom.id]);
    
    return (
        <>
            <Header />
            <div className='flex'>
                <div className="flex h-card w-full">
                    <div className="ml-3 w-3/12">
                        <p className='text-slate-500 text-sm'>Capturas de pizarrones</p>
                        <ImageList/>
                        { alert.msg && (
                            <div className="w-full my-2">
                                <Alert alert={ alert }/>
                            </div>
                        )}
                    </div>
                    <div className='text-slate-500 border border-slate-300 mt-2 h-chat w-9/12 mx-2 rounded items-center '>
                        { 
                            isActiveImage ? <ImageInfo/> : <p className='mx-auto'>Por favor selecciona alguna de las imagenes</p>
                        }  
                    </div>
                </div>
                <OptionsBar/>
            </div>
        </>
    )
}
