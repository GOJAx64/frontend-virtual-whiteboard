import { useEffect } from 'react';
import { useClassrooms } from '../../hooks';
import { Header, ImageList } from '../../components';

export const Images = () => {
    const { getImages, classroom } = useClassrooms();
    
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
                <div className='text-slate-500 border h-card w-10/12 ml-3 rounded items-center '>
                    <p className='mx-auto'>
                        Por favor selecciona alguna de las imagenes
                    </p>
                </div>
            </div>
        </>
    )
}
