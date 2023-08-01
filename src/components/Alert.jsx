export const Alert = ({ alert }) => {
  return (
    <div className={`${alert.error ? 'bg-softRed': 'bg-softBlue'} 
        text-center p-2 text-white font-semibold text-sm rounded-sm`}>
        { alert.msg }
    </div>
  )
}
