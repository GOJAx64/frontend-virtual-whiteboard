import { useEffect } from "react";
import { Outlet, Navigate, useNavigate, useLocation } from "react-router-dom";
import { OptionsBar } from "../components";
import { useAuth } from "../hooks";

export const DashboardLayout = () => {
    const { auth, setAuth, loading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token) {
          setAuth({});
          navigate('/login');
        }
    }, [location.pathname])

    if( loading ) return 'Loading...';
    
    return (
        <>
            { auth.id ? (
                <div className='bg-white h-screen'>
                    <div className='md:flex'>
                        <main className=' bg-white border-slate-400 flex-1 rounded-xl '>
                            <Outlet /> 
                        </main>
                        <OptionsBar />
                    </div>
                </div>
            ) : <Navigate to='/login'/>}  
        </>
    )
}