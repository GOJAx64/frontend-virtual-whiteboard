import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../assets/illustration-hero.svg';
import Feature3 from '../assets/illustration-features-tab-3.svg'
export const Home = () => {
  return (
    <div className='overflow-x-hidden bg-slate-50'>
      <nav className="container relative mx-auto p-6">
      
        <div className="flex items-center justify-between space-x-20 my-6">
        
          <div className="z-30">
            <img src='' alt="logo" id="logo" />
          </div>

          <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
            <a href="#features" className="tracking-widest hover:text-softRed">Características</a>
            <a href="#technologies" className="tracking-widest hover:text-softRed">Tecnologías</a>
            <a href="#faq" className="tracking-widest hover:text-softRed">FAQ</a>
            <Link to="/login" className="px-8 py-2 text-white bg-red-400 border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white">Iniciar Sesión</Link>
            <Link to="/register" className="px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white">Registrarse</Link>
          </div>
        
          <button id="menu-btn" className="z-30 block md:hidden focus:outline-none hamburger">
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      
        <div id="menu" className="fixed inset-0 z-20 hidden flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue">
          <div className="w-full py-3 text-center">
            <a href="#features" className="block hover:text-softRed">Características</a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#download" className="block hover:text-softRed">Tecnologías</a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#faq" className="block hover:text-softRed">FAQ</a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#" className="block hover:text-softRed">Login</a>
          </div>
        </div>
      </nav>

      <section id="hero">
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
          <div class="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
            <h1 class="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
              Un administrador de pizarrones
            </h1>
            <p class="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
              Una aplicación web con interfaz simple y limpia que te ayuda almacenar informacion de pizarrones obtenida por medio de visión por computadora.
            </p>
            <div class="flex items-center justify-center w-full space-x-4 lg:justify-start" >
              <a href="#" class="p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue">Get It On Chrome</a>
              <a href="#" class="p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600">Get It On Firefox</a>
            </div>
          </div>
          <div class="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
            <div class="bg-hero"></div>
            <img src={ Hero } alt="hero" class="relative z-10 lg:top-24 xl:top-0 overflow-x-visible"/>
          </div>
        </div>
      </section>

      <section id="features">
        <div class="container mx-auto mt-16 px-6">
          <h2 class="mb-6 text-4xl font-semibold text-center">Características</h2>
          <p class="max-w-md mx-auto text-center text-grayishBlue">
            Nuestro objetivo es que cada usuario pueda tener en un sitio materiales educativos de manera sencilla y compartirlos en un formato digital de manera eficaz.
          </p>
        </div>
      </section>

      <section id="tabs">
        
        <div class="container relative mx-auto my-6 mb-32 mt-12 px-6">
          <div class="bg-tabs"></div>
          
          <div class="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
            <div class="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab" data-target="panel-1">
              <button class="py-5 border-b-4 border-orange-500">
                Detección de Gestos
              </button>
            </div>

            <div class="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab" data-target="panel-2" >
              <button class="py-5">
                Captura de Imagenes
              </button>
            </div>

            <div class="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab" data-target="panel-3" >
              <button class="py-5">
                Acceso Sencillo
              </button>
            </div>
          </div>

          <div id="panels" class="container mx-auto">
           
           {/* Panel 1 */}
            <div class="flex flex-col py-5 md:flex-row md:space-x-7">
              <div class="flex justify-center md:w-1/2">
                <img src="images/illustration-features-tab-1.svg" alt="" class="relative z-10"/>
              </div>
              
              <div class="flex flex-col space-y-8 md:w-1/2">
                <h3 class="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  Usa tus manos
                </h3>
                <p class="max-w-md text-center text-grayishBlue md:text-left">
                  Con la inteligencia artificial implementada en la aplicación puedes realizar
                  distintos gestos utilizando tus manos, cada uno de estos gestos hara una acción
                  determinada.
                </p>
                <div class="mx-auto md:mx-0">
                  <a href="#" class="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2">More Info</a>
                </div>
              </div>
            </div>

            {/* Panel 2 */}
            <div class="flex flex-col py-5 md:flex-row md:space-x-7">
              <div class="flex justify-center md:w-1/2">
                <img src={ Feature3 } alt="Acceso Simple" class="relative z-10"/>
              </div>
              
              <div class="flex flex-col space-y-8 md:w-1/2">
                <h3 class="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left" >
                  Todo desde un lugar
                </h3>
                <p class="max-w-md text-center text-grayishBlue md:text-left">
                  Our powerful search feature will help you find saved sites in no
                  time at all. No need to trawl through all of your bookmarks.
                </p>
                <div class="mx-auto md:mx-0">
                  <a href="#" class="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2">More Info</a >
                </div>
              </div>

            </div>

            {/* Panel 3 */}
            <div class="flex flex-col py-5 md:flex-row md:space-x-7">
              <div class="flex justify-center md:w-1/2">
                <img src="images/illustration-features-tab-3.svg" alt="" class="relative z-10"/>
              </div>
              
              <div class="flex flex-col space-y-8 md:w-1/2">
                <h3 class="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  Share your bookmarks
                </h3>
                <p class="max-w-md text-center text-grayishBlue md:text-left">
                  Easily share your bookmarks and collections with others. Create
                  a shareable a link that you can send at the click of a button.
                </p>
                <div class="mx-auto md:mx-0">
                  <a href="#" class="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2">More Info</a >
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}
