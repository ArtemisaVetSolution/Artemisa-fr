import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ControllerRenderProps } from 'react-hook-form';

interface IProps {
  field: ControllerRenderProps<any>;
  label: string;
}

const DatePickerComp = ({ field, label }: IProps) => {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>

      <DatePicker
        disablePast
        views={['year', 'month', 'day']}
        label={label}
        value={field.value}
        onChange={(newValue) => newValue && field.onChange(newValue)}
        sx={{
          width: '100%',
          '& .MuiInputLabel-root': {
            color: '#293241', // Color normal del label
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#293241', // Color del label cuando está enfocado
          },  
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#EE6C4D',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#EE6C4D',
            },
          },
        }}

        

      />
    </LocalizationProvider>
  );
};

export default DatePickerComp