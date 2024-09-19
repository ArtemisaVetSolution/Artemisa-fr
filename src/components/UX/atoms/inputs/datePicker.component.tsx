import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { forwardRef } from 'react';

interface IProps {
  date: dayjs.Dayjs
  setDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>
}

const DatePickerComp = forwardRef(({ setDate, date }: IProps) => {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>

      <DatePicker

        defaultValue={date}
        disablePast
        views={['year', 'month', 'day']}
        value={date}
        onChange={(newValue) => newValue && setDate(newValue)}
        sx={{
          width: '100%',
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
});

export default DatePickerComp