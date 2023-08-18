import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from '../../components';
import { axiosClient } from '../../config/axiosClient';
import { useForm } from '../../hooks';

const formData = { email: '' }

const formValidations = { 
    email: [ (value) => value.includes('@'), 'El correo debe incluir @']
}

export const ForgotPassword = () => {

    const { email, isFormValid, onInputChange } = useForm(formData, formValidations);
    const [alert, setAlert] = useState({});

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        if( !isFormValid ) {
            setAlert({
                msg: 'Errores en los datos del formulario',
                error: true
            })
            return;
        }

        try {
            const { data } = await axiosClient.post(`/auth/forgot_password`, { email })

            setAlert({
                msg: data.msg,
                error: false
            })
        } catch (error) {
            setAlert({
                msg: error.response.data.msg,
                error: true           
            });
        }
    }

    return (
        <>
            <h1 className="text-sky-600 font-black text-6xl capitalize">Recupera tu acceso, reestablece tu {''}
                <span className="text-slate-700">Contraseña</span>
            </h1>

            <form className="my-10 bg-slate-200 border border-slate-300 shadow rounded-lg px-10 py-5" onSubmit={ handleSubmit }>
                { alert.msg && <Alert alert={ alert }/>}
                <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="email">Correo Electrónico</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email de Registro"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                        name='email'
                        value={ email }
                        onChange={ onInputChange }
                    />
                </div>

                <input 
                    type="submit"
                    value="Enviar Instrucciones"
                    className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
                />
                
            </form>

            <nav className="lg:flex lg:justify-between">
                <Link className='block text-center my-5 text-slate-500 uppercase text-sm' to="/login">
                  ¿Ya tienes una cuenta? Inicia Sesión
                </Link>
                <Link className='block text-center my-5 text-slate-500 uppercase text-sm' to="/register">
                  ¿No tienes una cuenta? Regístrate
                </Link>
            </nav>

        </>
    )
}