import { useClassrooms, useForm } from '../../hooks';
import { Alert, MemberCard } from "..";

const formData = {
    email: ''
  }

//? Should we use regular expressions?
const formValidations = { 
    email: [ (value) => value.includes('@'), 'El correo debe incluir @']
}

export const ModalMembers = () => {
    const { email, isFormValid, onInputChange, onResetForm} = useForm(formData, formValidations);
    const { alert, showAlert, loading ,submitMember, classroom, setShowModalMembers, member, setMember, addMember, members} = useClassrooms();

    const handleSubmit = async(e) => {
        if( !isFormValid ) {
            showAlert({
                msg: 'Email no válido',
                error: true
            })
            return;
        }
        submitMember(email);
        onResetForm();
    };

    const handleCloseModal = () => {
        setMember({});
        setShowModalMembers(false);
    };

    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-full max-w-4xl border border-slate-400 rounded-xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-100 outline-none focus:outline-none">
                        
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-400 rounded-t-lg bg-slate-900">
                            <h3 className="text-2xl font-medium text-slate-400">
                                Administra los participantes en: <span className='text-blue-700'>{ classroom.name }</span>
                            </h3>
                            <button className="p-1 ml-auto border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={ handleCloseModal }>
                                <span className=" text-slate-400 h-6 w-6 text-2xl block outline-none focus:outline-none font-mono hover:text-softRed">
                                x
                                </span>
                            </button>
                        </div>
                        
                        {/*body*/}
                        <div className="relative p-6 flex bg-white space-x-3">
                            <div className='w-7/12 border border-slate-400 rounded-lg p-4'>
                                
                                <label className="uppercase text-slate-600 block text-sm font-semibold" htmlFor="email">Buscar usuario</label>
                                <hr className='border border-slate-300 mb-3'/>
                                <div className='flex mt-2'>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="persona@mail.com"
                                        className="w-full p-2 border rounded-md bg-slate-100 text-slate-500 border-slate-300"
                                        name='email'
                                        value={ email }
                                        onChange={ onInputChange }
                                    />
                                    <button
                                        className="bg-blue-700 text-slate-100 font-bold uppercase text-sm px-6 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mx-2"
                                        type="button"
                                        onClick={ handleSubmit }
                                    >
                                        Buscar
                                    </button>
                                </div>
                                { loading ? <p>Estamos buscando al usuario....</p> 
                                        :  member?.id && (
                                                <div className='flex my-6'>
                                                    <p className='w-3/4 border border-slate-300 text-slate-600 rounded-md p-1'>
                                                        { member.name }
                                                    </p>
                                                    <button
                                                        className="bg-blue-700 text-slate-300 font-bold uppercase text-sm px-6 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mx-2"
                                                        type="button"
                                                        onClick={ () => addMember(member.email) }
                                                    >
                                                        Agregar
                                                    </button>
                                                </div>
                                            )
                                }
                                <div className="flex items-center justify-center">
                                    { alert.msg && (
                                        <div className="w-full my-4">
                                            <Alert alert={ alert }/>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='border rounded-lg border-slate-400 bg-white p-4 w-5/12 h-96'>
                                <p className='text-center text-slate-600 uppercase text-sm font-semibold'>miembros</p>
                                <hr className='border border-slate-300 mb-3'/>
                                <div className='h-80 overflow-y-auto scrollbar-hide'>
                                    {
                                        members?.length > 0 ? members.map( member =>  <MemberCard key={ member.id} member={ member } isInformative={ false }/> ) 
                                                            : <p className="text-slate-500 text-center">No hay miembros</p>
                                    }
                                </div>
                            </div>

                        </div>

                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-400 rounded-b bg-slate-200">
                            <button
                                className="text-red-500 border border-slate-400 rounded-md hover:border-softRed font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                onClick={ handleCloseModal }
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
