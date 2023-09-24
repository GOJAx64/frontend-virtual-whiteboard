import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { axiosClient } from '../../config/axiosClient';
import { Alert } from '../../components';

export const ConfirmAccount = () => {
  const [alert, setAlert] = useState({})
  const [confirmedAccount, setConfirmedAccount] = useState(false)

  const params = useParams();
  const { token } = params

  useEffect(() => {
    const confirmAccount = async() => {
      try {
        const url = `/auth/confirm/${token}`;
        const { data } = await axiosClient(url);
        setAlert({
          msg: data.msg,
          error: false
        })
        setConfirmedAccount(true);

      } catch (error) {
        setAlert({
          msg: error.response.data.msg,
          error: true
        })
      }
    }
    confirmAccount();
  }, [])
  
  return (
    <div className='mt-20 md:mt-10 shadow-lg px-5 py-10 rounded-md bg-slate-100'>
      { alert.msg && <Alert alert={ alert }/>}

      {confirmedAccount && (
        <Link className='block text-center my-5 text-slate-500 uppercase text-sm' to="/login">
          Inicia Sesión
        </Link>
      )}
    </div>
  )
}