import { useEffect, useState, createContext } from "react"
import { useNavigate } from "react-router-dom";
import axiosClient from '../config/axiosClient';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const authUser = async() => {
            const token = localStorage.getItem('token');

            if(!token) {
                setLoading(false);
                return;
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const { data } = await axiosClient('/auth/profile', config);
                setAuth(data);
                navigate('/dashboard');
                console.log('ya se uso el bavigate')
            } catch (error) {
                setAuth({});
            }
            setLoading(false);

        }
        authUser();
    }, []);

    return (
        <AuthContext.Provider 
            value={{
                auth,
                setAuth,
                loading,
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext;
