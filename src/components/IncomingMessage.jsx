import { dateFormat } from "../helpers/dateFormat"

export const IncomingMessage = ({ message }) => {
  return (
    <div className="flex">
      <p className="bg-red-100 border shadow-sm border-red-300 opacity-90 text-slate-700 rounded ml-3 w-5/12 my-1 p-1">
        { message.message } 
      </p>
      <p className=" text-xs opacity-90 text-slate-300 rounded ml-1 mt-4">
        { dateFormat(message.createdAt) }
      </p>
    </div>
  )
}
