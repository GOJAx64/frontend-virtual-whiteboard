import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAdmin, useClassrooms } from '../hooks';

export const AccordionElement = ({ activity }) => {
  const isAdmin = useAdmin();
  const { deleteActivity } = useClassrooms();

  const handleDelete = () => {
    if(confirm('¿Estás seguro de eliminar esta actividad? Esta acción no se puede deshacer.')){
      deleteActivity(activity.id);
    }
  }

  return (
    <Accordion className='border border-slate-300 my-3' sx={{ boxShadow: 0}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" sx={{ bgcolor: 'rgb(226 232 240)' }}>
          <h3 className='font-semibold text-sm uppercase'>{ activity.title }</h3>
        </AccordionSummary>

        <AccordionDetails sx={{ bgcolor: '#ffffff' }}>
          <Typography>{ activity.description }</Typography>
          <hr className='border border-slate-200 my-4'/>
          { isAdmin && (
            <div className='flex mt-1'>
              <button className="bg-blue-700 text-slate-50 font-bold uppercase text-xs px-3 py-1 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mx-2">Editar</button>
              <button onClick={ handleDelete } className="text-red-500 border border-slate-400 rounded-md hover:border-softRed font-bold uppercase px-3 py-2 text-xs outline-none focus:outline-none">Eliminar</button>
            </div>
          )}
          
        </AccordionDetails>
    </Accordion>
  )
}
