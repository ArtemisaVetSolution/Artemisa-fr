import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { ControllerRenderProps, FieldError } from 'react-hook-form';

interface InputFieldProps {
  label: string;
  field: ControllerRenderProps<any, any>;
  error?: FieldError;
  type?: string;
  icon?: React.ReactNode;
  autoComplete?: string;
  endAdornment?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({ label, field, error, autoComplete = "off",  type = 'text', endAdornment }) => {
  return (
    <TextField
      {...field}
      label={label}
      type={type}
      variant="outlined"
      error={!!error}
      helperText={error ? error.message : null}
      autoComplete={autoComplete}
      slotProps={{
        input: {
          endAdornment: endAdornment ? (
            <InputAdornment position="end">
              {endAdornment}
            </InputAdornment>
          ) : null,
        },
      }}
      sx={{
        width: '80%',  // Ancho adaptativo al contenedor padre
        borderRadius: '20px',
        backgroundColor: 'primary.light',
        '& fieldset': { 
          borderColor: 'primary.main',
          borderRadius: '20px',
        },
        '&:hover fieldset': {
          borderColor: 'primary.main', // Color explícito para hover
        }
      }}
    />
  );
};

export default InputField;