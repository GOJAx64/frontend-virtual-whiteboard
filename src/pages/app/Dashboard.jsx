import { Alert } from "../../components"
import { useClassrooms } from "../../hooks";

export const Dashboard = () => {
  const { alert } = useClassrooms();

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
