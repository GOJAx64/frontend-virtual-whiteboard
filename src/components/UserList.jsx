import { useClassrooms } from '../hooks';
import { UserCardChat } from './UserCardChat';

const group = {
    name: 'Chat Grupal'
}

export const UserList = () => {
    const { members } = useClassrooms();
    
    return (
        <div>
            <UserCardChat member={ group }/>
            {
                members?.length > 0 ? members.map( member =>  <UserCardChat key={ member.id} member={ member }/> ) 
                                    : <p className="text-slate-500 text-center">No hay miembros</p>
            }
        </div>
    )
}
