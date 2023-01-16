import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <>
        <div className="bg-veryDarkBlue px-6 py-8 w-full mr-6">
            <p className="uppercase text-grayishBlue text-lg md:text-xl tracking-widest ">
                Pizarrones <span className='text-softRed'>Virtuales</span>
            </p>
        </div>
        <main className='container mx-auto mt-5 p-5 md:flex md:justify-center'>
            <div className='md:w-2/3 lg:w-2/5 '>
                <Outlet />
            </div>
        </main>
    </>
  )
}

export default AuthLayout