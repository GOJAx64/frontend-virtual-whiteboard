// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../hooks';
import { useClassrooms } from '../../hooks/useClassrooms'

export const Boards = () => {
  // const { setAuth } = useAuth();
  const { classrooms } = useClassrooms();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if(!token) {
  //     setAuth({});
  //     navigate('/login');
  //   }
  // }, [])
  
  return (
    <>
      <div>Boards</div>
    </>
    
  )
}
