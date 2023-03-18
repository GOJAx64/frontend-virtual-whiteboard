import { useEffect } from "react"
import { CreateWhiteboardButton, WhiteboardList, WhiteboardSearcher } from "../../components"

export const Whiteboards = () => {
  useEffect(() => {
    console.log('entra')
  }, [])
  
  return (
    <div className="flex">
      <div className="w-3/12">
        <p className=' text-slate-400'>Pizarrones de esta aula</p>
        <hr className='border border-slate-200'/>
        <div className="flex mt-3 mb-1">
          <WhiteboardSearcher/>
          <CreateWhiteboardButton/>
        </div>
        <WhiteboardList/>
      </div>
      
    </div>
  )
}
