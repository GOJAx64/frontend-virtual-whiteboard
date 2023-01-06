import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

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
            console.log('Peticion a la API: /register');
            setAlert({})
        } catch (error) {
            setAlert({
                msg: error.response.data.msg,
                error: true           
            });
        }
    }

    return (
        <>
            <h1 className="text-sky-600 font-black text-6xl capitalize">Inicia sesión y administra tus {''}
                <span className="text-slate-700">proyectos</span>
            </h1>

            { alert.error && <h2>{ alert.msg }</h2> }
            
            <form className="my-10 bg-slate-200 border border-slate-300 shadow rounded-lg p-10" onSubmit={ handleSubmit } >
                <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="text"
                        placeholder="Email de Registro"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                        name='email'
                        value={ email }
                        onChange={ onInputChange }
                    />
                </div>
                <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password de Registro"
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