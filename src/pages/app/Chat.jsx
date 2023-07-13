import { ChatContainer, UserSearcher, UserList } from '../../components';

export const Chat = () => {
  return (
    <div className="flex h-card">
      <div className="w-3/12">
        <UserSearcher/>
        <UserList/>
      </div>
      <ChatContainer/>
    </div>
  )
}