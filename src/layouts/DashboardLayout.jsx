import { Outlet, Navigate } from "react-router-dom";
import { Header, OptionsBar, Sidebar } from "../components";
import { useAuth } from "../hooks";

export const DashboardLayout = () => {
    const { auth, loading } = useAuth();
    
    if( loading ) return 'Loading...';
    
    return (
        <>
            { auth.id ? (
                <div className='bg-slate-100'>
                    <Header />

                    <div className='md:flex md:min-h-screen'>
                        <Sidebar />

                        <main className='p-10 flex-1'>
                            <Outlet />
                        </main>

                        <OptionsBar />
                    </div>
                </div>
            ) : <Navigate to='/login'/>}  
        </>
    )
}