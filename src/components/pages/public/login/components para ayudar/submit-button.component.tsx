import React from 'react';
import { Button } from '@mui/material';

interface SubmitButtonProps {
  text: string;
  submitfunct: () => void;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ text, submitfunct }) => {
  return (
    <Button type="button" variant="contained" onClick={submitfunct} color="primary" fullWidth sx={{ mt: 2 }}>
      {text}
    </Button>
  );
};

