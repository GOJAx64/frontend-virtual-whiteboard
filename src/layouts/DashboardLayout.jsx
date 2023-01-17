import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks";

export const DashboardLayout = () => {
    const { auth, loading } = useAuth();
    
    if( loading ) return ( 
        <button type="button" classname="bg-indigo-500 ..." disabled>
            <svg classname="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            </svg>
            Processing...
        </button>
    )
    
    return (
        <>
            { auth.id ? 'Auth' : <Navigate to='/login'/>}
            <div>Dashboard</div>
            
        </>
    )
}