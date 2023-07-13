import { useEffect, useMemo, useState } from 'react';
import io from 'socket.io-client';

export const useSocket = (serverPath) => {
    const token = localStorage.getItem('token');
    
    const socket = useMemo( () => io.connect(serverPath, { 
        transports: ['websocket'],
        autoConnect: true,
        forceNew: true,
        query: {
            'x-token': token
        }
    }), [serverPath] );
    const [online, setOnline] = useState(false);

    useEffect( () => {
        setOnline(socket.connected);
    }, [socket]);
    
    useEffect( () => {
        socket.on('connect', () => { setOnline(true) });
    }, [socket]);

    useEffect( () => {
        socket.on('disconnect', () => { setOnline(false) });
    }, [socket]);

    return { 
        socket,
        online
    };
}