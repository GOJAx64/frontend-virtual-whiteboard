import { useClassrooms } from '../hooks';

export const ImageList = () => {
    const { images } = useClassrooms();

    return (
        <div className=" h-card overflow-y-auto">
            { images?.length > 0 ? images.map( image =>  <img key={image._id} src={image.url} alt={'Capture'} className='w-60 my-2 block rounded-sm'/>) 
                                : <p className="text-slate-500 text-center">No hay imagenes guardadas</p>
            }
        </div>
    )
}
