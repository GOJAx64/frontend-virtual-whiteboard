import { Navbar } from '../../components/Navbar';
import Hero from '../../assets/illustration-hero.svg';

export const Home = () => {
  const moonLanding = new Date();

  return (
    <div className='overflow-x-hidden bg-slate-100 h-screen'>
      <Navbar/>
    
      <section id="hero">
        <div className="container flex flex-col-reverse mx-auto mt-5 p-6 lg:flex-row lg:mb-0">
          <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
            <h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
              Un administrador de aulas
            </h1>
            <p className="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
              Una aplicación web con interfaz simple y limpia que te ayuda almacenar informacion de pizarrones, comunicarte directamente con miembros de la clase y publicar actividades.
            </p>
          </div>
          <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
            <div className="bg-hero"></div>
            <img src={ Hero } alt="hero" className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible"/>
          </div>
        </div>
      </section>
      
      <footer className="py-4 mt-14">
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0" >
          <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue" >
            <p>{ moonLanding.getFullYear() }</p>
          </div>
        </div>
      </footer>

    </div>
  )
}
