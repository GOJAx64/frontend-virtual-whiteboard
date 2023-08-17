import { useEffect } from 'react';
import { useClassrooms } from '../../hooks';
import { Header, ImageInfo, ImageList } from '../../components';
import { useParams } from 'react-router-dom';

export const Images = () => {
    const { getImages, getClassroom, classroom, isActiveImage } = useClassrooms();
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
            <div className="flex h-card">
                <div className="w-3/12">
                    <ImageList/>
                </div>
                <div className='text-slate-500 border border-slate-300 mt-2 h-card w-10/12 mx-2 rounded items-center '>
                    { 
                        isActiveImage ? <ImageInfo/> : <p className='mx-auto'>Por favor selecciona alguna de las imagenes</p>
                    }  
                </div>
            </div>
        </>
    )
}
