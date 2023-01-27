import { Outlet, Navigate } from "react-router-dom";
import { Header, OptionsBar, Sidebar } from "../components";
import { useAuth } from "../hooks";

export const DashboardLayout = () => {
    const { auth, loading } = useAuth();
    
    if( loading ) return 'Loading...';
    
    return (
        <>
            { auth.id ? (
                <div className='bg-slate-50'>
                    <Header />
                    <div className='md:flex md:min-h-screen'>
                        <Sidebar />
                        <main className='m-4 border bg-slate-50 border-slate-300 flex-1 rounded-xl'>
                            <Outlet />
                        </main>
                        <OptionsBar />
                    </div>
                </div>
            ) : <Navigate to='/login'/>}  
        </>
    )
}