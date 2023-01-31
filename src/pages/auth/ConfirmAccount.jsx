import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axiosClient from '../../config/axiosClient';
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
        console.log('Si llega');
        setAlert({
          msg: data.msg,
          error: false
        })
        setConfirmedAccount(true);

      } catch (error) {
        console.log('entra en error')
        setAlert({
          msg: error.response.data.msg,
          error: true
        })
      }
    }
    confirmAccount();
  }, [])
  
  return (
    <>
        <h1 className="text-sky-600 font-black text-6xl capitalize">Confirma tu cuenta y Comienza a crear tus {''}
            <span className="text-slate-700">Pizarrones Virtuales</span>
        </h1>

        <div className='mt-20 md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white'>
          { alert.msg && <Alert alert={ alert }/>}

          {confirmedAccount && (
            <Link className='block text-center my-5 text-slate-500 uppercase text-sm' to="/login">
              Inicia Sesión
            </Link>
          )}
        </div>
    </>
  )
}