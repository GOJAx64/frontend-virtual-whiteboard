import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from '../components';
import axiosClient from '../config/axiosClient';
import { useForm } from '../hooks';
import f1 from '../assets/feature1.svg';

const formData = {
    email: '',
    password: '',
}

const formValidations = {
    email: [ (value) => value.includes('@'), 'El correo debe incluir @'],
    password: [ (value) => value.length > 5, 'La contraseña debe contener al menos 6 caracteres']
}

export const Login = () => {
    
    const { email, password, isFormValid, onInputChange } = useForm(formData, formValidations);
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
            const { data } = await axiosClient.post('/auth/login', { email, password });
            setAlert({});
            console.log(data.token)
            localStorage.setItem('token', data.token);
            // setAuth(data);
        } catch (error) {
            setAlert({
                msg: error.response.data.msg,
                error: true           
            });
        }
    }

    return (
        <>
            <h1 className="text-softRed font-black text-6xl capitalize">Inicia sesión
                
            </h1>
            <form className="bg-slate-100 border border-slate-300 shadow rounded-lg p-10" onSubmit={ handleSubmit } >
                { alert.msg && <Alert alert={ alert }/>}
                <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="email">Correo electrónico</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="persona@mail.com"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                        name='email'
                        value={ email }
                        onChange={ onInputChange }
                    />
                </div>
                <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="password">Contraseña</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Contraseña de Registro"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                        name='password'
                        value={ password }
                        onChange={ onInputChange }
                    />
                </div>

                <input 
                    type="submit"
                    value="Iniciar Sesión"
                    className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
                />
                    
            </form>
            <nav className="lg:flex lg:justify-between">
                <Link className='block text-center my-5 text-slate-500 uppercase text-sm' to="/register">
                    ¿No tienes una cuenta? Regístrate
                </Link>
                <Link className='block text-center my-5 text-slate-500 uppercase text-sm' to="/forgot_password">
                    Olvidé mi contraseña
                </Link>
            </nav>
        </>
            

       
    )
}