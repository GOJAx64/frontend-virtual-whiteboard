import { useEffect } from 'react';
import { ChatContainer, UserSearcher, UserList, Header } from '../../components';
import { useClassrooms } from '../../hooks';
import { useParams } from 'react-router-dom';

export const Chat = () => {
  const params = useParams();
  const { getClassroom } = useClassrooms()
  
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
        <ChatContainer/>
      </div>
    </>
  )
}