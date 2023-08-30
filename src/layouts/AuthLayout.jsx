import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
    <>
        <div className="px-6 py-8 w-full mr-6">
            <p className="uppercase text-slate-600 text-lg md:text-xl tracking-widest ">
                Aulas <span className='text-softRed'>Virtuales</span>
            </p>
        </div>
        <main className='container mx-auto mt-5 p-5 md:flex md:justify-center'>
            <div className='md:w-2/3 lg:w-2/5 '>
                <Outlet />
            </div>
        </main>
    </>
  )
};