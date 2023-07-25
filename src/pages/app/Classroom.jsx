import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { useAdmin, useAuth, useClassrooms } from '../../hooks';
import { Camera, Chat, ClassroomSettings, Images, Summary, Activities } from './';

export const Classroom = () => {
    const params = useParams();
    const { getClassroom, classroom, socket } = useClassrooms();
    const isAdmin = useAdmin();
    const { auth } = useAuth();

    useEffect(() => {
      getClassroom(params.id)
    }, [params.id]);
    
    // useEffect(() => {
    //     socket.emit('join to classroom', { classroom: params.id, user: auth.id });
    // }, [params.id]);

    return (
        <div className="p-6">
            <h1 className="inline text-xl font-semibold text-slate-600 uppercase">{ classroom.name }</h1>
            <div className="mt-2">
                <Tabs>
                    <TabList className='text-slate-500'>
                        <Tab>General</Tab>
                        <Tab>Actividades</Tab>
                        <Tab>Imagenes</Tab>
                        <Tab>Chat</Tab>
                        { isAdmin && <Tab>Cámara</Tab> }
                        { isAdmin && <Tab>Configuración</Tab> }
                    </TabList>
                    <hr className='border border-slate-200 mb-3'/>

                    <TabPanel >
                        <Summary/>
                    </TabPanel>
                    <TabPanel>
                        <Activities/>
                    </TabPanel>
                    <TabPanel>
                        <Images/>
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
