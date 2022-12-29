import { NavLink } from "react-router-dom";

export const Login = () => {
  
    const handleSubmit = () => {
        console.log("Handle Submit");
    };
  
    return (
    <div className="flex items-center justify-center min-h-screen bg-slate-300">
        {/* Card Container */}
        <div className=" flex flex-col m-6 space-y-10 bg-slate-200 shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
            {/* Left Side  */}
            <form className="p-6 md:px-8 md:py-8" onSubmit={ handleSubmit }>
                {/*  Top Content  */}
                <h2 className="mb-5 text-4xl font-bold text-center">Iniciar Sesión</h2>
                <p className="max-w-sm mb-12 font-sans text-center font-light text-gray-600">
                    Comienza a organizar tus deberes y notas.
                </p>
                
                <input 
                    type="text" 
                    className="block w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" 
                    placeholder="Ingresa tu correo eléctronico"
                    // value={ email }
                    // onChange={ e => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    className="block w-full mt-2 p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" 
                    placeholder="Ingresa tu contraseña"
                    // value={ password }
                    // onChange={ e => setPassword(e.target.value)}
                />
                {/* Middle Content */}
                <div className="flex flex-col items-center justify-center mt-6 mb-4 space-y-6 md:flex-row md:space-y-0">
                    <button type='submit' className="w-full md:w-auto flex justify-center items-center px-8 py-3 space-x-0 font-sans font-bold text-white rounded-md bg-blue-700 shadow-blue-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
                        <span>Iniciar Sesión</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <line x1="13" y1="18" x2="19" y2="12" />
                            <line x1="13" y1="6" x2="19" y2="12" />
                        </svg>
                    </button>
                </div>
                <NavLink to='/auth/forgot_password' className="font-thin mt-2 ml-2 text-cyan-700">
                    Olvidé mi contraseña
                </NavLink>
                {/* Border */}
                <div className="mt-5 border-b border-b-gray-300"></div>
                {/* Bottom Content */}
                <p className="py-6 text-sm font-thin text-center text-gray-600">
                    si no estás registrado, crea una cuenta
                </p>
                {/* Bottom Buttons Container */}
                <div className="flex flex-col space-x-0 justify-center space-y-6 md:flex-row md:space-x-4 md:space-y-0" >
                    <NavLink to='/auth/register' className="flex items-center justify-center py-2 space-x-3 border border-orange-400 bg-orange-500 rounded shadow-sm hover:bg-opacity-100 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
                        <span className="font-medium text-white">Registrarme</span>
                    </NavLink>
                </div>
                
            </form>
        
        </div>
    </div>
  )
}
