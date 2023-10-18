import { useState } from "react";
import { useAuth, useClassrooms } from "../../hooks";
import { Alert } from "../Alert";

export const ModalProfile = () => {
  const { setShowModalProfile, updateProfileName, alert } = useClassrooms();
  const { auth } = useAuth();
  const [name, setName] = useState(auth.name);


  const handleSubmit = () => {
    //setShowModalProfile(false);
    updateProfileName(name);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-full md:w-5/12 m-6 max-w-3xl border border-slate-400 rounded-lg">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-100 outline-none focus:outline-none">
              
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-400 rounded-t bg-slate-900">
              <h3 className="text-2xl font-medium text-blue-700">
                  Perfil
              </h3>
              <button className="p-1 ml-auto border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={ () => setShowModalProfile(false) }>
                  <span className=" text-slate-400 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  x
                  </span>
              </button>
              </div>
              
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <label className="uppercase text-slate-600 block text-sm font-semibold" htmlFor="email">Nombre</label>
                <hr className='border border-slate-300 mb-3'/>
                <input id="title" type="text" className="w-full p-2 border rounded bg-slate-50 text-slate-500 border-slate-300" name='title' value={ name } onChange={ (e) => setName(e.target.value) }/>
              </div>

              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-400 rounded-b">
                <div className="flex items-center justify-center">
                    { alert.msg && (<Alert alert={ alert }/> )}
                </div>
                <button
                    className="bg-blue-700 text-slate-100 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 mx-2"
                    type="button"
                    onClick={ handleSubmit }
                >
                    guardar
                </button>
              </div>
          </div>
          </div>
        </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}
