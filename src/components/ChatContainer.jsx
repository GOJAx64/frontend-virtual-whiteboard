import { useClassrooms } from '../hooks';
import { ChatMessages, SelectChat } from "./";

export const ChatContainer = () => {
  const { isActiveChat } = useClassrooms();
  
  return (
    <>
      { 
        isActiveChat ? <ChatMessages/> : <SelectChat/>
      }  
    </>
  )
}
