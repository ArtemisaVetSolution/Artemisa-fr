import React from 'react';
import { TextField } from '@mui/material';

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: React.FC<InputFieldProps> = ({ label, type, value, onChange }) => {
  return (
    <TextField
      label={label}
      type={type}
      fullWidth
      margin="normal"
      value={value}
      onChange={onChange}
      required
    />
  );
};
