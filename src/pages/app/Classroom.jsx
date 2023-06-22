import { useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { io } from "socket.io-client";

import { useAdmin, useAuth, useClassrooms } from "../../hooks"
import { Camera, Chat, ClassroomSettings, Summary, Whiteboards } from "./";

let socket;

export const Classroom = () => {
    const params = useParams();
    const { getClassroom, classroom } = useClassrooms();
    const isAdmin = useAdmin();
    const { auth } = useAuth();

    useEffect(() => {
      getClassroom(params.id)
    }, [params.id]);
    
    useEffect(() => {
        socket = io(import.meta.env.VITE_BACKEND_URL);
        socket.emit('join to classroom', { classroom: params.id, name: auth.name });
    }, [params.id]);

    useEffect( () => {
        socket.on('Joined', res => { console.log( res ) })
    });

    const { name, description } = classroom;

    return (
        <div className="p-6">
            <h1 className="inline text-xl font-semibold text-slate-600 uppercase">{ name }</h1>
            <h3 className="text-base text-slate-400">{ description }</h3>

            <div className="mt-2">
                <Tabs>
                    <TabList className='text-slate-500'>
                        <Tab>General</Tab>
                        {/* <Tab>Actividades</Tab> */}
                        <Tab>Capturas</Tab>
                        {/* <Tab>Archivos</Tab> */}
                        <Tab>Chat</Tab>
                        { isAdmin && <Tab>Cámara</Tab> }
                        { isAdmin && <Tab>Configuración</Tab> }
                    </TabList>
                    <hr className='border border-slate-200 mb-3'/>

                    <TabPanel >
                        <Summary/>
                    </TabPanel>
                    <TabPanel>
                        <Whiteboards/>
                    </TabPanel>
                    <TabPanel>
                        <Chat/>
                    </TabPanel>
                    { isAdmin && 
                        <TabPanel>
                            <Camera/>
                        </TabPanel>
                    }
                    { isAdmin && 
                        <TabPanel>
                            <ClassroomSettings/>
                        </TabPanel>
                    }
                </Tabs>
            </div>
            
        </div>
    )
}
