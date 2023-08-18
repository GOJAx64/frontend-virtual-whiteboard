import { useEffect } from 'react';
import { UserSearcher, UserList, Header, ChatMessages, SelectChat } from '../../components';
import { useClassrooms } from '../../hooks';
import { useParams } from 'react-router-dom';

export const Chat = () => {
  const params = useParams();
  const { getClassroom, isActiveChat } = useClassrooms()
  
  useEffect(() => {
    getClassroom(params.id)
  }, [params.id]);

  return (
    <>
      <Header />
      <div className="flex h-app_screen p-2">
        <div className="w-3/12">
          <UserSearcher/>
          <UserList/>
        </div>
        { 
          isActiveChat ? <ChatMessages/> : <SelectChat/>
        } 
      </div>
    </>
  )
}