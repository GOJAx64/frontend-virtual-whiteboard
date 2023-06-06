import { useAuth, useClassrooms } from './';

export const useAdmin = () => {
    const { auth } = useAuth();
    const { classroom } = useClassrooms();

    return auth.id === classroom.userId;
}
 