import { useEffect } from "react";
import { Outlet, Navigate, useNavigate, useLocation } from "react-router-dom";
import { Header, OptionsBar, Sidebar } from "../components";
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
                <div className='bg-white'>
                    <Header />
                    <div className='md:flex h-app_screen'>
                        <Sidebar />
                        <main className=' bg-slate-50 border-slate-400 flex-1 rounded-xl '>
                            <Outlet /> 
                        </main>
                        <OptionsBar />
                    </div>
                </div>
            ) : <Navigate to='/login'/>}  
        </>
    )
}