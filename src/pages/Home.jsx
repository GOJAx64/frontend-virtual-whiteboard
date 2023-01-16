import React from 'react'

import { Navbar } from '../components/Navbar';

import Hero from '../assets/illustration-hero.svg';
import Feature3 from '../assets/feature3.svg'
import ReactIcon from '../assets/react.svg';
import NodeIcon from '../assets/node.svg';
import MysqlIcon from '../assets/mysql.svg';


export const Home = () => {
  return (
    <div className='overflow-x-hidden bg-slate-100'>
      <Navbar/>
    
      <section id="hero">
        <div className="container flex flex-col-reverse mx-auto mt-5 p-6 lg:flex-row lg:mb-0">
          <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
            <h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
              Un administrador de pizarrones
            </h1>
            <p className="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
              Una aplicación web con interfaz simple y limpia que te ayuda almacenar informacion de pizarrones obtenida por medio de visión por computadora.
            </p>
            <div className="flex items-center justify-center w-full space-x-4 lg:justify-start" >
              <a href="#" className="p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue">Iniciar recorrido</a>
              <a href="#" className="p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600">¡Pruebalo!</a>
            </div>
          </div>
          <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
            <div className="bg-hero"></div>
            <img src={ Hero } alt="hero" className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible"/>
          </div>
        </div>
      </section>

      <section id="features">
        <div className="container mx-auto mt-16 px-6">
          <h2 className="mb-6 text-4xl font-semibold text-center">Características</h2>
          <p className="max-w-md mx-auto text-center text-grayishBlue">
            Nuestro objetivo es que cada usuario pueda tener en un sitio materiales educativos de manera sencilla y compartirlos en un formato digital de manera eficaz.
          </p>
        </div>
      </section>

      <section id="tabs" className='bg-slate-200'>
        
        <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
          <div className="bg-tabs"></div>
          
          <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
            <div className="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab" data-target="panel-1">
              <button className="py-5 border-b-4 border-orange-500">
                Detección de Gestos
              </button>
            </div>

            <div className="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab" data-target="panel-2" >
              <button className="py-5">
                Captura de Imagenes
              </button>
            </div>

            <div className="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab" data-target="panel-3" >
              <button className="py-5">
                Formato digital
              </button>
            </div>
          </div>

          <div id="panels" className="container mx-auto">
           
           {/* Panel 1 */}
            {/* <div className="flex flex-col py-5 md:flex-row md:space-x-7">
              <div className="flex justify-center md:w-1/2">
                <img src="images/illustration-features-tab-1.svg" alt="" className="relative z-10"/>
              </div>
              
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  Usa tus manos
                </h3>
                <p className="max-w-md text-center text-grayishBlue md:text-left">
                  Con la inteligencia artificial implementada en la aplicación puedes realizar
                  distintos gestos utilizando tus manos, cada uno de estos gestos hara una acción
                  determinada.
                </p>
                <div className="mx-auto md:mx-0">
                  <a href="#" className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2">More Info</a>
                </div>
              </div>
            </div> */}

            {/* Panel 2 */}
            <div className="flex flex-col py-5 md:flex-row md:space-x-7">
              <div className="flex justify-center md:w-1/2">
                <img src={ Feature3 } alt="Acceso Simple" className="relative z-10"/>
              </div>
              
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left" >
                  Recuerda lo anotado
                </h3>
                <p className="max-w-md text-center text-grayishBlue md:text-left">
                  
                </p>
                <div className="mx-auto md:mx-0">
                  <a href="#" className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2">More Info</a >
                </div>
              </div>

            </div>

            {/* Panel 3 */}
            {/* <div className="flex flex-col py-5 md:flex-row md:space-x-7">
              <div className="flex justify-center md:w-1/2">
                <img src="images/illustration-features-tab-3.svg" alt="" className="relative z-10"/>
              </div>
              
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  Share your bookmarks
                </h3>
                <p className="max-w-md text-center text-grayishBlue md:text-left">
                  Easily share your bookmarks and collections with others. Create
                  a shareable a link that you can send at the click of a button.
                </p>
                <div className="mx-auto md:mx-0">
                  <a href="#" className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2">More Info</a >
                </div>
              </div>
            </div> */}

          </div>

        </div>
      </section>

      <section id="technologies">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
            Con esto se construyó Pizarrones Virtuales
          </h2>
          <p className="max-w-lg mx-auto text-center text-grayishBlue">
            La aplicación consta de tres pilares. Una interfaz de usuario. Un Websocket 
            REST que expone los recursos establece una comnicación Activa-Activa. Y un 
            mondelo de IA para la detección de gestos en tiempo real.
          </p>
        </div>
      </section>

      <section id="technologies-boxes" className="py-12 mb-10">
        <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">

          <div className="w-full md:w-1/3 border bg-slate-100 border-slate-300 rounded-lg shadow-lg flex flex-col py-6 space-y-4 text-center">
            <div className="flex justify-center">
              <img src={ ReactIcon } alt="React JS" className='h-24'/>
            </div>
    
            <h5 className="pt-6 text-xl font-bold">React JS</h5>
            <p className="text-gray-400 mx-2">Para la interfaz de la aplicación, el usuario interactura directamente</p>

            <div className="bg-repeat-x px-6 pt-6 capitalize">
              <a href="#" className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue">mas información</a>
            </div>
          </div>

          <div className="w-full md:w-1/3 border bg-slate-100 border-slate-300 rounded-lg shadow-lg flex flex-col py-6 space-y-4 text-center">
            <div className="flex justify-center">
              <img src={ NodeIcon } alt="Node JS" className='h-24'/>
            </div>
    
            <h5 className="pt-6 text-xl font-bold">Node JS</h5>
            <p className="text-gray-400 mx-2">WebSocket Rest que expone los recursos al frontend</p>

            <div className="bg-repeat-x px-6 pt-6 capitalize">
              <a href="#" className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue">mas información</a>
            </div>
          </div>

          <div className="w-full md:w-1/3 border bg-slate-100 border-slate-300 rounded-lg shadow-lg flex flex-col py-6 space-y-4 text-center">
            <div className="flex justify-center">
              <img src={ MysqlIcon } alt="Tensorflow" className='h-24'/>
            </div>
    
            <h5 className="pt-6 text-xl font-bold">Tensorflow</h5>
            <p className="text-gray-400 mx-2">Para la detección de gestos en tiempo real</p>

            <div className="bg-repeat-x px-6 pt-6 capitalize">
              <a href="#" className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue">mas información</a>
            </div>
          </div>

        </div>
      </section>

      <section id="faq">
        <div className="container mx-auto">
          <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
            Preguntas Frecuentes
          </h2>
          <p className="max-w-lg px-6 mx-auto text-center text-graishBlue">
            Estas son algunas de las prreguntas mas frecuentes sobre esta aplicación, 
            puedes preguntar cualquier otra que tengas o realizarnos un comentario.
          </p>
        </div>
      </section>

      <section id="faq-accordion">
        <div className="container mx-auto px-6">

          <div className="max-w-2xl m-8 mx-auto overflow-hidden">
            <div className="py-1 border-b outline-none group" tabIndex="1">
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease" >
                <div className="transition duration-500 ease group-hover:text-red-500" >
                  ¿Que es Pizarrones Virtuales?
                </div>
                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                    <path fill="none" stroke="currentColor" strokeWidth="3" d="M1 1l8 8 8-8" />
                  </svg>
                </div>
              </div>

              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p className="py-2 text-justify text-gray-400">
                  Es una aplicación web ...
                </p>
              </div>
            </div>

            <div className="py-1 border-b outline-none group" tabIndex="2">
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease" >
                <div className="transition duration-500 ease group-hover:text-red-500" >
                  ¿Comó funciona la aplicación?
                </div>
                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                    <path fill="none" stroke="currentColor" strokeWidth="3" d="M1 1l8 8 8-8" />
                  </svg>
                </div>
              </div>

              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease" >
                <p className="py-2 text-justify text-gray-400">
                  Un poco de react, un poco de node y una pizca de IA.
                </p>
              </div>
            </div>

            <div className="py-1 border-b outline-none group" tabIndex="3">
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease" >
                <div className="transition duration-500 ease group-hover:text-red-500" >
                  ¿Comó se cumplen cada uno de los módulos?
                </div>
                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                    <path fill="none" stroke="currentColor" strokeWidth="3" d="M1 1l8 8 8-8" />
                  </svg>
                </div>
              </div>

              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease" >
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                  repellat amet doloribus consequuntur eos similique provident
                  tempora voluptates iure quia fuga dicta voluptatibus culpa
                  mollitia recusandae delectus id suscipit labore?
                </p>
              </div>
            </div>

            <div className="py-1 border-b outline-none group" tabIndex="4">
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease" >
                <div className="transition duration-500 ease group-hover:text-red-500" >
                  ¿Puedo acceder a la aplicación?
                </div>
                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                    <path fill="none" stroke="currentColor" strokeWidth="3" d="M1 1l8 8 8-8" />
                  </svg>
                </div>
              </div>

              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease" >
                <p className="py-2 text-justify text-gray-400">
                  Obvio crack UwU
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
            
      <footer className="py-10 bg-veryDarkBlue mt-16">
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0" >
          
          <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue" >
            
            <a href="#features" className="uppercase hover:text-softRed">Features</a>
            <a href="#download" className="uppercase hover:text-softRed">Download</a>
            <a href="#faq" className="uppercase hover:text-softRed">FAQ</a>
          </div>
          
        </div>
      </footer>

    </div>
  )
}
