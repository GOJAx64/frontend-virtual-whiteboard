import { useClassrooms, useForm } from '../../hooks';
import { Alert } from "..";

const formData = {
    email: ''
  }

//? Should we use regular expressions?
const formValidations = { 
    email: [ (value) => value.includes('@'), 'El correo debe incluir @']
}

export const ModalMembers = () => {
    const { email, isFormValid, onInputChange, onResetForm} = useForm(formData, formValidations);
    const { alert, showAlert, loading ,submitMember, classroom, setShowModalMembers, member, setMember, addMember} = useClassrooms();

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
                <div className="relative w-full md:w-8/12 m-6 max-w-3xl border border-slate-400 rounded-lg">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-100 outline-none focus:outline-none">
                        
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-400 rounded-t">
                            <h3 className="text-2xl font-medium text-slate-400">
                                Administra los participantes en: { classroom.name }
                            </h3>
                            <button className="p-1 ml-auto border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={ handleCloseModal }>
                                <span className=" text-slate-400 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                x
                                </span>
                            </button>
                        </div>
                        
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <div className="flex items-center justify-center">
                                { alert.msg && (
                                    <div className="w-1/2 my-2">
                                        <Alert alert={ alert }/>
                                    </div>
                                )}
                            </div>
                            
                            <label className="uppercase text-slate-500 block text-sm" htmlFor="email">Buscar participante</label>
                            <div className='flex mt-2'>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="persona@mail.com"
                                    className="w-full p-3 border rounded-xl bg-slate-100 text-slate-500"
                                    name='email'
                                    value={ email }
                                    onChange={ onInputChange }
                                />
                                <button
                                    className="bg-blue-700 text-slate-300 font-bold uppercase text-sm px-6 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mx-2"
                                    type="button"
                                    onClick={ handleSubmit }
                                >
                                    Buscar
                                </button>
                            </div>
                            { loading ? <p>Estamos buscando al usuario....</p> 
                                    :  member?.id && (
                                            <div className='flex border border-slate-300 my-6 bg-slate-200'>
                                                <p>
                                                    { member.name }
                                                </p>
                                                <button
                                                    className="bg-blue-700 text-slate-300 font-bold uppercase text-sm px-6 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mx-2"
                                                    type="button"
                                                    onClick={ () => addMember(member.email) }
                                                >
                                                    Agregar
                                                </button>
                                            </div>
                                        )
                            }
                        </div>

                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-400 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
