import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from '../../components';
import { axiosClient } from '../../config/axiosClient';
import { useForm } from '../../hooks';

const formData = {
    name: '',
    email: '',
    password: ''
}

const formValidations = {
    name: [ (value) => value.length > 2, 'El nombre debe contener al menos 3 carácteres'],
    email: [ (value) => value.includes('@'), 'El correo debe incluir @'],
    password: [ (value) => value.length > 5, 'La contraseña debe contener al menos 6 carácteres']
}

export const Register = () => {
    const { name, email, password, isFormValid, onInputChange, onResetForm } = useForm(formData, formValidations);
    const [alert, setAlert] = useState({});
    
    const handleSubmit = async(e) => {
        e.preventDefault();

        if( !isFormValid ) {
            setAlert({  msg: 'Errores en los datos del formulario', error: true });
            return;
        }

        try {
            const { data } = await axiosClient.post(`/auth/register`, { name, email, password });
            setAlert({ msg: data.msg, error: false });
            onResetForm();
        } catch (error) {
            setAlert({ msg: error.response.data.msg, error: true });
        }
    }

    return (
      <>
        <form className="bg-slate-100 border border-slate-100 shadow rounded-lg p-10" onSubmit={ handleSubmit } >
            { alert.msg && <Alert alert={ alert }/>}
            <div className="my-5">
                <label className="uppercase text-slate-600 block text-xl font-bold" htmlFor="name">Nombre</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Tu Nombre"
                    className="w-full mt-3 p-3 border rounded-md bg-gray-50"
                    name='name'
                    value={ name }
                    onChange={ onInputChange }
                />
            </div>

            <div className="my-5">
                <label className="uppercase text-slate-600 block text-xl font-bold" htmlFor="email">Correo electrónico</label>
                <input
                    id="email"
                    type="email"
                    placeholder="persona@mail.com"
                    className="w-full mt-3 p-3 border rounded-md bg-gray-50"
                    name='email'
                    value={email}
                    onChange={ onInputChange }
                />
            </div>
            
            <div className="my-5">
                <label className="uppercase text-slate-600 block text-xl font-bold" htmlFor="password">Contraseña</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Contraseña de Registro"
                    className="w-full mt-3 p-3 border rounded-md bg-gray-50"
                    name='password'
                    value={ password }
                    onChange={ onInputChange }
                />
            </div>

            <input 
                type="submit"
                value="Crear Cuenta"
                className="bg-veryDarkBlue mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-slate-700 transition-colors"
            />
              
        </form>

        <nav className="lg:flex lg:justify-between">
            <Link className='block text-center my-5 text-slate-500 uppercase text-sm' to="/login">
                ¿Ya tienes una cuenta? Inicia Sesión
            </Link>
            <Link className='block text-center my-5 text-slate-500 uppercase text-sm' to="/forgot_password">
                Olvide mi contraseña
            </Link>
        </nav>
      
      </>
    )
}