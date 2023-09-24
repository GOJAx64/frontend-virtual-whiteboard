import { useClassrooms } from '../hooks';

export const ImageList = () => {
    const { images, setCurrentImage } = useClassrooms();
    
    const handleClick = (image) => {
        setCurrentImage(image);
    }

    return (
        <div className="h-image_list border rounded overflow-y-auto scrollbar-hide">
            { images?.length > 0 ? images.map( image =>  <img key={image._id} src={image.url} alt={'Capture'} onClick={ () => handleClick(image) } className='w-80 my-2 block rounded-sm'/>) 
                                 : <p className="text-slate-500 text-center">No hay imagenes guardadas</p>
            }
        </div>
    )
}
