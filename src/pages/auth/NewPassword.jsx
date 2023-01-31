import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Alert } from "../../components";
import axiosClient from "../../config/axiosClient";
import { useForm } from "../../hooks";

const formData = { password: '' }

const formValidations = { 
    password: [ (value) => value.length > 5, 'La contraseña debe contener al menos 6 caracteres']
}

export const NewPassword = () => {

    const { password, isFormValid, onInputChange } = useForm(formData, formValidations);
    const [validToken, setValidToken] = useState(false);
    const [alert, setAlert] = useState({});
    const [changedPassword, setChangedPassword] = useState(false);
    
    const params = useParams()
    const { token } = params;

    useEffect(() => {
        const checkToken = async () => {
            try {
                await axiosClient(`/auth/forgot_password/${token}`)
                setValidToken(true)
            } catch (error) {
                console.log('aqui mero')
                setAlert({
                    msg: error.response.data.msg,
                    error: true
                })
            }
        }
        checkToken()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if( !isFormValid ) {
            setAlert({
                msg: 'Errores en los datos del formulario',
                error: true
            })
            return;
        }

        try {
            const url = `/auth/forgot_password/${token}`

            const { data } = await axiosClient.post(url, { password })
            setAlert({
                msg: data.msg,
                error: false
            })
            setChangedPassword(true)
        } catch (error) {
            console.log('chance aqui tambien')
            setAlert({
                msg: error.response.data.msg,
                error: true
            })
        }
    }
          
    return (
        <>
            <h1 className="text-sky-600 font-black text-6xl capitalize">Reestablece tu Contraseña y no pierdas acceso a tus {''}
                <span className="text-slate-700">Pizarrones Virtuales</span>
            </h1>
            
            { alert.msg && <Alert alert={ alert } /> }

            { validToken && (
                <form className="my-10 bg-slate-200 border border-slate-300 shadow rounded-lg p-10" onSubmit={ handleSubmit }>
                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="password">Nueva Contraseña</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Escribe tu Nueva Contraseña"
                            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                            name='password'
                            value={password}
                            onChange={ onInputChange }
                        />
                    </div>
                    <input 
                        type="submit"
                        value="Guardar Nueva Contraseña"
                        className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
                    />
                </form>
            )}
            
            { changedPassword && (
                <Link className='block text-center my-5 text-slate-500 uppercase text-sm' to="/login">
                    Inicia Sesión
                </Link>
            )}
        </>
    )
}