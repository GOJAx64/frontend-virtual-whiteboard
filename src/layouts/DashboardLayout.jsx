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

    //? Quizas necesitemos un useEffect para cargar los proyectos del usuario cada que ingresa y se renderiza el DashboardLayout

    if( loading ) return 'Loading...';
    
    return (
        <>
            { auth.id ? (
                <div className='bg-slate-50'>
                    {/* dark:bg-slate-700 */}
                    <Header />
                    <div className='md:flex md:min-h-screen'>
                        <Sidebar />
                        <main className='m-4 border bg-slate-50 border-slate-300 flex-1 rounded-xl shadow-md'>
                            {/* dark:bg-slate-600 dark:border-slate-800*/}
                            <Outlet /> 
                        </main>
                        <OptionsBar />
                    </div>
                </div>
            ) : <Navigate to='/login'/>}  
        </>
    )
}