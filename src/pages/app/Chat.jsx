import { ChatContainer, UserSearcher, UserList } from '../../components';

export const Chat = () => {
  return (
    <div className="flex h-card">
      <div className="w-3/12">
        <div className="flex my-2">
          <UserSearcher/>
        </div>
        <hr className='border border-slate-200 mb-2'/>
        <UserList/>
      </div>
      <ChatContainer/>
    </div>
  )
}
