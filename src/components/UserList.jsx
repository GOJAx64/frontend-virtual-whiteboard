import { useClassrooms } from '../hooks';
import { UserCardChat } from './UserCardChat';

export const UserList = () => {
    const { searchedMembers } = useClassrooms();

    return (
        <div className="overflow-y-auto scrollbar-hide">
            { searchedMembers?.length > 0 ? searchedMembers.map( member =>  <UserCardChat key={ member.id} member={ member }/> ) 
                                  : <p className="text-slate-500 text-center">No hay miembros</p>
            }
        </div>
    )
}
