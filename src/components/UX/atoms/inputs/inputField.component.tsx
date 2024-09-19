import React from 'react';
import { TextField } from '@mui/material';
import { ControllerRenderProps, FieldError } from 'react-hook-form';

interface InputFieldProps {
  label: string;
  field: ControllerRenderProps<any, any>;
  error?: FieldError;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, field, error, type = 'text' }) => {
  return (
    <TextField
      {...field}
      label={label}
      type={type}
      variant="outlined"
      error={!!error}
      helperText={error ? error.message : null}
      fullWidth
    />
  );
};

export default InputField;