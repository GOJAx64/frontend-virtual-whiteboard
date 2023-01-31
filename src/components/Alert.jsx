export const Alert = ({ alert }) => {
  return (
    <div className={`${alert.error ? 'bg-softRed': 'bg-softBlue'} 
        text-center p-3 uppercase text-white font-bold text-sm rounded-md`}>
        { alert.msg }
    </div>
  )
}
