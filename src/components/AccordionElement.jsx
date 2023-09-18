import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAdmin, useClassrooms } from '../hooks';
import ReactHtmlParser from 'react-html-parser';

export const AccordionElement = ({ activity }) => {
  const isAdmin = useAdmin();
  const { deleteActivity } = useClassrooms();
  const { setShowModalUpdateActivity, setActivity } = useClassrooms()

  const handleUpdate = () => {
    setActivity(activity);
    setShowModalUpdateActivity(true);
  }

  const handleDelete = () => {
    if(confirm('¿Estás seguro de eliminar esta actividad? Esta acción no se puede deshacer.')){
      deleteActivity(activity.id);
    }
  }

  return (
      <Accordion className='border border-slate-300 my-3' sx={{ boxShadow: 0}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" sx={{ bgcolor: 'rgb(241 245 249)' }}>
            <Box className='flex'>
              <Typography className='font-semibold text-sm  text-slate-500'>{ activity.title }</Typography>
              <span className='mt-1 ml-3 text-xs text-slate-400'>{activity.dueDate.split('T')[0]}</span>
            </Box>
          </AccordionSummary>

          <AccordionDetails sx={{ bgcolor: '#ffffff' }}>
            <div>
              <Typography>{ ReactHtmlParser(activity.description) }</Typography>
              <hr className='border border-slate-200 my-4'/>
              { isAdmin && (
                <div className='flex mt-1'>
                  <button onClick={ handleUpdate } className="bg-blue-700 text-slate-50 font-bold uppercase text-xs px-3 py-1 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mx-2">Editar</button>
                  <button onClick={ handleDelete } className="text-red-500 border border-slate-400 rounded-md hover:border-softRed font-bold uppercase px-3 py-2 text-xs outline-none focus:outline-none">Eliminar</button>
                </div>
              )}
            </div>
          </AccordionDetails>
      </Accordion>
  )
}
