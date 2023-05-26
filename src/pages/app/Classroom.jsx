import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { useClassrooms } from "../../hooks"
import { Chat, ClassroomSettings, Summary, Whiteboards } from "./";

export const Classroom = () => {
    const params = useParams();
    const { getClassroom, classroom } = useClassrooms();

    useEffect(() => {
      getClassroom(params.id)
    }, [params.id]);
    
    const { name, description } = classroom;

    return (
        <div className="p-6">
            <h1 className="inline text-xl font-semibold text-slate-600 uppercase">{ name }</h1>
            <h3 className="text-base text-slate-400">{ description }</h3>

            <div className="mt-2">
                <Tabs>
                    <TabList className='text-slate-500'>
                        <Tab>General</Tab>
                        <Tab>Pizarrones</Tab>
                        <Tab>Chat</Tab>
                        <Tab>Configuración</Tab>
                    </TabList>
                    <hr className='border border-slate-300 mb-3'/>

                    <TabPanel >
                        <Summary/>
                    </TabPanel>
                    <TabPanel>
                        <Whiteboards/>
                    </TabPanel>
                    <TabPanel>
                        <Chat/>
                    </TabPanel>
                    <TabPanel>
                        <ClassroomSettings/>
                    </TabPanel>
                </Tabs>
            </div>
            
        </div>
    )
}
