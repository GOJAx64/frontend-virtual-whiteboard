import { useClassrooms } from '../../hooks';

export const ModalImage = () => {
    const { setShowModalImage, image } = useClassrooms();
    
    const handleCloseModal = () => {
        setShowModalImage(false);
    };

    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-3/4 border border-slate-400 rounded-xl">
                    
                    <div className=" rounded-lg shadow-lg relative flex flex-col w-full bg-slate-100 outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-2 border-b border-solid rounded-t-lg bg-slate-900">
                            <button className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={ handleCloseModal }>
                                <span className=" text-slate-400 h-6 w-6 text-2xl block outline-none focus:outline-none font-mono hover:text-softRed">x</span>
                            </button>
                        </div>
                        <img src={image.url}  alt={'Capture'} className='w-full rounded-sm'/>
                    </div>

                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
