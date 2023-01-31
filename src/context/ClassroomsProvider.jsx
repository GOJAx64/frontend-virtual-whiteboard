import { useEffect, useState, createContext } from "react"
import axiosClient from '../config/axiosClient';

const ClassroomsContext = createContext();

export const ClassroomsProvider = ({ children }) => {
    
    const [classrooms, setClassrooms] = useState([]);
    const [alert, setAlert] = useState({});

    const showAlert = (alert) => {
        setAlert(alert);
        setTimeout(() => {
            setAlert({});
        }, 5000);
    }

    const submitClassroom = async(classroom) => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            };

            const { data } = await axiosClient.post('/classrooms', classroom, config);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        
    }, []);

    return (
        <ClassroomsContext.Provider 
            value={{
                classrooms,
                alert,
                showAlert,
                submitClassroom,
            }}
        >
            { children }
        </ClassroomsContext.Provider>
    )
}

export default ClassroomsContext;
