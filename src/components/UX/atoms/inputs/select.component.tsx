import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ControllerRenderProps } from 'react-hook-form';

interface IProps {
  items: { id: string, name: string }[];
  label: string;
  field: ControllerRenderProps<any>;
}

const BasicSelect = ({ items, label, field }: IProps) => {
  return (
    <Box sx={{
      minWidth: 120, width: '100%', '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
          borderColor: '#EE6C4D',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#EE6C4D',
        },
      },
    }}>
      <FormControl fullWidth>
        <InputLabel id="basic-select-label" sx={{
          color: '#293241', '&.Mui-focused': {
            color: '#293241', // Color cuando está enfocado
          }
        }}>{label}</InputLabel>
        <Select
          labelId="basic-select-label"
          id="basic-select"
          value={field.value}
          label={label}
          onChange={field.onChange}
        >
          {items.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};


export default BasicSelect;
