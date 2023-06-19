import { useEffect } from "react";
import { Alert } from "../../components"
import { useClassrooms } from "../../hooks";
import { io } from "socket.io-client";

let socket;

export const Dashboard = () => {
  const { alert } = useClassrooms();

  useEffect(() => {
    socket = io(import.meta.env.VITE_BACKEND_URL);
    socket.emit('prueba');
    socket.on('respuesta', (person) => {
      console.log(`Recibiendo respuesta ${ person.name }`);
    })
  }, []);
  

  return (
    <div className='p-6'> 
      <p className='text-slate-400'>
        Selecciona o crea una aula para comenzar a interactuar
      </p>
      <div className="flex items-center justify-center">
          { alert.msg && (
              <div className="w-1/2 my-4">
                  <Alert alert={ alert }/>
              </div>
          )}
      </div>
    </div>
  )
}
