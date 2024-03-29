import { useClassrooms } from "../../hooks";
import ReactHtmlParser from 'react-html-parser';

export const ModalInfoClassroom = () => {
  const { setShowModalInfoClassroom, classroom } = useClassrooms();
  
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-full md:w-10/12 m-6 max-w-5xl border border-slate-400 rounded-lg">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-100 outline-none focus:outline-none">
              
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-400 rounded-t bg-slate-900">
              <h3 className="text-2xl font-medium text-blue-700">
                Información
              </h3>
              <button className="p-1 ml-auto border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={ () => setShowModalInfoClassroom(false) }>
                  <span className=" text-slate-400 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  x
                  </span>
              </button>
              </div>
              
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <div className="text-slate-500 py-1 px-3 text-sm overflow-y-auto scrollbar-hide">{ ReactHtmlParser(classroom.summary) }</div> 
              </div>

              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-400 rounded-b">
              
              <button
                  className="bg-blue-700 text-slate-300 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={() => setShowModalInfoClassroom(false)}
              >
                  OK
              </button>
              </div>
          </div>
          </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}
