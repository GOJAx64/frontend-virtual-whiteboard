import { ChatMessages, UserSearcher, WhiteboardList } from "../../components"
import { UserList } from "../../components/UserList"

export const Chat = () => {
  return (
    <div className="flex">
      <div className="w-3/12">
        
        <div className="flex my-2">
          <UserSearcher/>
        </div>
        <hr className='border border-slate-200 mb-2'/>
        <UserList/>
      </div>
      <ChatMessages/>
    </div>
  )
}
