export const NewPassword = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('handleSubmit NewPassword');
    }
          
    return (
        <>
            <h1 className="text-sky-600 font-black text-6xl capitalize">Reestablece tu Contraseña y no pierdas acceso a tus {''}
                <span className="text-slate-700">Pizarrones Virtuales</span>
            </h1>
            
            <form className="my-10 bg-white shadow rounded-lg p-10" onSubmit={ handleSubmit }>
                
                <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="password">Nuevo Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Escribe tu Nuevo Password"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                        // value={password}
                        // onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <input 
                    type="submit"
                    value="Guardar Nuevo Password"
                    className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
                />
                
            </form>
        </>
    )
}