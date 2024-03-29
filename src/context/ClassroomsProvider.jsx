import { useState, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosClient, axiosClientFlask } from '../config/axiosClient';
import { useAuth, useSocket } from '../hooks';
import { scrollToBottom } from '../helpers/scrollToBottom';

const ClassroomsContext = createContext();

export const ClassroomsProvider = ({ children }) => {
    const { auth } = useAuth();
    const [classrooms, setClassrooms] = useState([]);
    const [classroom, setClassroom] = useState({});
    const [alert, setAlert] = useState({});
    const navigate = useNavigate();
    const [showModalActivity, setShowModalActivity] = useState(false);
    const [showModalUpdateActivity, setShowModalUpdateActivity] = useState(false);
    const [showModalInfoClassroom, setShowModalInfoClassroom] = useState(false);
    const [showModalProfile, setShowModalProfile] = useState(false);
    const [showModalMembers, setShowModalMembers] = useState(false);
    const [showModalImage, setShowModalImage] = useState(false);
    const [member, setMember] = useState({});
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [memberships, setMemberships] = useState([]);
    const { socket, online, conectarSocket, desconectarSocket } = useSocket(import.meta.env.VITE_BACKEND_URL);
    const [isActiveChat, setIsActiveChat] = useState(false);
    const [currentChat, setCurrentChat] = useState({});
    const [messages, setMessages] = useState([]);
    const [images, setImages] = useState([]);
    const [activities, setActivities] = useState([]);
    const [activity, setActivity] = useState({});
    const [image, setImage] = useState({})
    const [isActiveImage, setIsActiveImage] = useState(false)
    const [text, setText] = useState('');
    const [searchValueMember, setSearchValueMember] = useState('');
    const [searchValueClass, setSearchValueClass] = useState('');

    let searchedMembers = [];
    if(searchValueMember.length < 1) {
        searchedMembers = members;
    } else {
        searchedMembers = members.filter( (memberState) => {
            const memberStateText = memberState.name.toLowerCase();
            const searchedMemberText = searchValueMember.toLowerCase();
            return memberStateText.includes(searchedMemberText);
        });
    }

    let searchedClasses = {};
    let managedClasses = [];
    let membershipClasses = [];

    if(searchValueClass.length < 1) {
        managedClasses = classrooms;
        membershipClasses = memberships;
        searchedClasses = {
            managedClasses,
            membershipClasses,
        }
    } else {
        const searchedClassText = searchValueClass.toLowerCase();
        managedClasses = classrooms.filter( (classroomState) => {
            const classroomStateText = classroomState.name.toLowerCase();
            return classroomStateText.includes(searchedClassText);
        });

        const searchedMembershipText = searchValueClass.toLowerCase();
        membershipClasses = memberships.filter( (membershipState) => {
            const membershipStateText = membershipState.name.toLowerCase();
            return membershipStateText.includes(searchedMembershipText);
        });

        searchedClasses = {
            managedClasses,
            membershipClasses,
        }
    }

    useEffect(() => {
        if ( auth.id ) {
            conectarSocket();
        }
    }, [ auth, conectarSocket ]);

    useEffect(() => {
        if ( !auth.id ) {
            desconectarSocket();
        }
    }, [ auth, desconectarSocket ]);

    useEffect(() => {
        socket?.on( 'status-user', ({ id, status }) => {
            const updatedMembers =  members.map( (memberState) => {
                if(memberState.id === id) {
                    memberState.online = status;
                }
                return memberState;
            });
            setMembers(updatedMembers);
        })
    }, [ socket, classroom ]);


    const clearAppStates = () => {
        setClassrooms([]);
        setClassroom({});
        setAlert({});
        setMember({});
        setMembers([]);
        setMemberships([]);
    }

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
            setClassrooms(data.classrooms);
            setMemberships(data.memberships);
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
            if(classroom.id) {
                socket.emit('leave-personal-chat', { classroomId: classroom.id, userId: auth.id });
            }
            setClassroom(data);
            const tempMembers = data.members.filter( (member) => member.id !== auth.id );
            setMembers(tempMembers);
            socket.emit('join-to-personal-chat', { classroomId: data.id, userId: auth.id });
        } catch (error) {
            showAlert({
                msg: error,
                error: true
            });
        } finally {
            setIsActiveChat(false);
            setCurrentChat({});
            setMessages([]);
            setImages([]);
            setIsActiveImage(false);
        }
    }

    const getImages = async () => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            };
            const { data } = await axiosClient(`/images/${classroom.id}`, config);
            setImages(data);
        } catch (error) {
            console.log(error.response);
            showAlert({ msg: error.response.data.msg, error: true });
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

    const addMember = async(email) => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            };
            const { data } = await axiosClient.post(`/classrooms/member/${ classroom.id }`, { email }, config);
            setMembers([...members, member]);
            showAlert({ msg: data.msg, error: false });
            setMember({});
        } catch (error) {
            showAlert({ msg: error.response.data.msg, error: true });
        }
    }

    const deleteMember = async(email) => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            };
            const { data } = await axiosClient.post(`/classrooms/delete-member/${ classroom.id }`, { email }, config);
            const updatedMembers = members.filter(stateMember => stateMember.email !== email);
            setMembers(updatedMembers);
            showAlert({ msg: "Participante eliminado correctamente", error: false });
         } catch (error) {
            showAlert({ msg: error.response.data.msg, error: true });
         }
    }

    const markActiveChat = (user) => {
        setMessages([]);
        setIsActiveChat(true);
        setCurrentChat(user);
        getMessagesOfCurrentChat(user);
        //TODO fix the scroll
        scrollToBottom('messages');
    }

    const getMessagesOfCurrentChat = async(user) => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            };
            const { data } = await axiosClient.post(`/messages/${classroom.id}`, { 
                from: auth.id, 
                to: user.id 
            }, config);
            setMessages(data);
        } catch (error) {
            showAlert({ msg: error.response.data.msg, error: true });
        } 
    }

    const uploadImage = async(url) => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            };
            const image = {
                url,
                classroomId: classroom.id,
                text: 'prueba'
            }
            showAlert({ msg: "Captura tomada", error: false });
            const { data } = await axiosClient.post('/images/upload', image, config);
            await setCharsFromImage(data.imageId);
            showAlert({ msg: "Carácteres sincronizados", error: false });
         } catch (error) {
            showAlert({ msg: error.response.data.msg, error: true });
         }
    }

    const setCharsFromImage = async(id) => {
        const { data } = await axiosClientFlask.put(`get_chars_image/${ id }`);
        showAlert({ msg: "Caracteres sincronizados", error: false });
    }

    const deleteImage = async(id) => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            };

            await axiosClient.delete(`/images/${id}`, config);
            const updatedImages = images.filter(stateImage => stateImage._id !== id);
            setImages(updatedImages);
            showAlert({ msg: "Imagen eliminada correctamente", error: false });
            setImage({});
            setIsActiveImage(false);
        } catch (error) {
            console.log(error.response);
        }
    }

    const updateImage = async(img) => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            };
            const tempImage = image;
            tempImage.text = img.text;
            const { data } = await axiosClient.put(`/images/${ img.id }`, img, config);
            const updatedImages = images.map( imageState => imageState._id === data._id ? tempImage : imageState );
            setImages(updatedImages);
            showAlert({ msg: "Texto actualizado correctamente", error: false })
        } catch (error) {
            console.log(error.response);
        }
    } 

    const submitActivity = async(activity) => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            };

            const { data } = await axiosClient.post(`/activities/${classroom.id}`, activity, config);
            saveNewactivityInState(data);
            
            setAlert({
                msg: "Actividad creada correctamente",
                error: false
            });
            setTimeout(() => {
                setAlert({});
            }, 5000);
            
        } catch (error) {
            console.log(error.response);
        }
    }

    const saveNewactivityInState = (data) => {
        let activityWasSaved = false;
        let activitiesTemp = [];
        let i = 0;

        if(activities.length === 0) {
            setActivities([data]);
            activityWasSaved = true;
        } else {
            while(i < activities.length) {
                if(activities[i].dueDate > data.dueDate) {
                    activitiesTemp.push(data);
                    activityWasSaved = true;
                    break;
                } else {
                    activitiesTemp.push(activities[i]);
                }
                i++;
            }
            while(i < activities.length) {
                activitiesTemp.push(activities[i]);
                i++;
            }
            if(!activityWasSaved) {
                activitiesTemp.push(data);
            }
            setActivities(activitiesTemp);
        }
    };

    const getActivities = async() => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            };

            const { data } = await axiosClient(`/activities/${ classroom.id }`, config);
            setActivities(data);
        } catch (error) {
            console.log(error.response);
        }
    }

    const updateActivity = async(activity) => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            };

            const { data } = await axiosClient.put(`/activities/${ activity.id }`, activity, config);
            const updatedActivities = activities.map( activityState => activityState.id === data.id ? data : activityState );
            setActivities(updatedActivities);
            setActivity(data)
            showAlert({ msg: "Actividad actualizada correctamente", error: false })
        } catch (error) {
            console.log(error.response);
        }
    }

    const deleteActivity = async(id) => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            };

            await axiosClient.delete(`/activities/${id}`, config);
            const updatedActivities = activities.filter(stateActivity => stateActivity.id !== id);
            setActivities(updatedActivities);
            showAlert({ msg: "Actividad eliminada correctamente", error: false });
            setIsActiveImage(false);
            setImage({});
        } catch (error) {
            console.log(error.response);
        }
    }

    const setCurrentImage = (image) => {
        setImage(image);
        setText(image.text);
        setIsActiveImage(true);
    }

    const updateProfileName = async(name) => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            };
            const { data } = await axiosClient.put(`/auth/update_profile/${ auth.id }`, { name }, config);
            showAlert({ msg: data.msg + " - Actualice la página", error: false });
        } catch (error) {
            console.log(error.response);
        }
    }

    return (
        <ClassroomsContext.Provider 
            value={{
                classroom,
                classrooms,
                setClassroom,
                submitClassroom,
                updateClassroom,
                getClassroomsFromUser,
                getClassroom,
                deleteClassroom,
                member,
                setMember,
                addMember,
                deleteMember,
                members,
                memberships,
                
                searchValueMember, 
                setSearchValueMember,
                searchedMembers,
                searchValueClass, 
                setSearchValueClass,
                searchedClasses,
                
                submitMember,
                alert,
                showAlert,
                loading,
                setLoading,
                setAlert,

                showModalActivity,
                showModalInfoClassroom,
                showModalProfile,
                showModalMembers,
                showModalUpdateActivity,
                showModalImage,

                setShowModalActivity,
                setShowModalInfoClassroom,
                setShowModalProfile,
                setShowModalMembers,
                setShowModalUpdateActivity,
                setShowModalImage,
                
                socket,
                online,
                isActiveChat,
                currentChat,
                markActiveChat,
                messages,
                setMessages,
                
                uploadImage,
                images,
                getImages,
                setCurrentImage,
                image,
                isActiveImage,
                text,
                setCharsFromImage,
                deleteImage,
                updateImage,

                submitActivity,
                getActivities,
                updateActivity,
                deleteActivity,
                activities,
                activity,
                setActivity,
                clearAppStates,
                updateProfileName,
            }}
        >
            { children }
        </ClassroomsContext.Provider>
    )
}

export default ClassroomsContext;
