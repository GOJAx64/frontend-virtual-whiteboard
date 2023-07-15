import { useClassrooms } from '../hooks';
import { UserCardChat } from './UserCardChat';

export const UserList = () => {
    const { members } = useClassrooms();

    return (
        <div className="overflow-y-auto scrollbar-hide">
            { members?.length > 0 ? members.map( member =>  <UserCardChat key={ member.id} member={ member }/> ) 
                                  : <p className="text-slate-500 text-center">No hay miembros</p>
            }
        </div>
    )
}
