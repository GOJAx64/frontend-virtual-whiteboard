import { useState, createContext } from "react"
import { useNavigate } from "react-router-dom";
import axiosClient from '../config/axiosClient';

const ClassroomsContext = createContext();

export const ClassroomsProvider = ({ children }) => {
    
    const [classrooms, setClassrooms] = useState([]);
    const [classroom, setClassroom] = useState({});
    const [alert, setAlert] = useState({});
    const navigate = useNavigate();
    const [showModalGestures, setShowModalGestures] = useState(false);
    const [showModalSymbols, setShowModalSymbols] = useState(false);
    const [showModalProfile, setShowModalProfile] = useState(false);
    const [showModalMembers, setShowModalMembers] = useState(false);
    const [member, setMember] = useState({});
    const [loading, setLoading] = useState(false);

    const getClassroomsFromUser = async() => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            };
            const { data } = await axiosClient('/classrooms', config);
            setClassrooms(data)
        } catch (error) {
            console.log(error.response);
        }
    }

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
            setClassrooms([...classrooms, data])
            setAlert({
                msg: "Aula creada correctamente",
                error: false
            });
            setTimeout(() => {
                setAlert({});
            }, 5000);
        } catch (error) {
            console.log(error.response);
        }
    }

    const updateClassroom = async(classroom) => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            };

            const { data } = await axiosClient.put(`/classrooms/${ classroom.id }`, classroom, config);
            const updatedClassrooms = classrooms.map( classroomState => classroomState.id === data.id ? data : classroomState );
            setClassrooms(updatedClassrooms);
            setClassroom(data);
            setAlert({
                msg: "Aula actualizada correctamente",
                error: false
            });
            setTimeout(() => {
                setAlert({});
            }, 5000);
        } catch (error) {
            console.log(error.response);
        }
    }

    const getClassroom = async(id) => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            };

            const { data } = await axiosClient(`/classrooms/${id}`, config)
            setClassroom(data);
        } catch (error) {
            console.log(error.response);
        }
    }

    const deleteClassroom = async(id) => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            };

            const { data } = await axiosClient.delete(`/classrooms/${id}`, config);
            const updatedClassrooms = classrooms.filter(stateClassroom => stateClassroom.id !== id);
            setClassrooms(updatedClassrooms);
            setAlert({
                msg: "Aula eliminada correctamente",
                error: false
            });
            setTimeout(() => {
                setAlert({});
                navigate('dashboard')
            }, 5000);
        } catch (error) {
            console.log(error.response);
        }
    }

    const submitMember = async(email) => {
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            if(!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            };

            const { data } = await axiosClient.post('/classrooms/member', { email }, config);
            console.log(data);
            setMember(data);
            setAlert({});
        } catch (error) {
            showAlert({
                msg: error.response.data.msg,
                error: true
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <ClassroomsContext.Provider 
            value={{
                classroom,
                classrooms,
                submitClassroom,
                updateClassroom,
                getClassroomsFromUser,
                getClassroom,
                deleteClassroom,
                member,
                
                submitMember,
                alert,
                showAlert,
                loading,
                setLoading,

                showModalGestures,
                showModalSymbols,
                showModalProfile,
                showModalMembers,

                setShowModalGestures,
                setShowModalSymbols,
                setShowModalProfile,
                setShowModalMembers,
            }}
        >
            { children }
        </ClassroomsContext.Provider>
    )
}

export default ClassroomsContext;
