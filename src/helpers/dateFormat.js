import moment from 'moment'
import 'moment/locale/es';
moment.locale('es');

//TODO: usar otra libreria
export const dateFormat = (date) => {
    const dateToFormat = moment(date);
    return dateToFormat.format('HH:mm a | MMMM Do');
}
