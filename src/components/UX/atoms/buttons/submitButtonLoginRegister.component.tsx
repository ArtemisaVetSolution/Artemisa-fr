import React from 'react';
import { Button } from '@mui/material';

interface SubmitButtonProps {
    text: string; 
    variant?: "text" | "outlined" | "contained"; 
    color?: "primary" | "secondary" | "inherit" | "success" | "error" | "info" | "warning"; 
    disabled?: boolean; 
    onClick?: () => void; 
  }

const SubmitButton: React.FC<SubmitButtonProps> = ({
  text,
  variant = "contained",
  color = "primary",
  disabled = false,
  onClick,
}) => {
  return (
    <Button
      type="submit"
      variant={variant}
      color={color}
      disabled={disabled}
      onClick={onClick}
      fullWidth
    >
      {text}
    </Button>
  );
};

export default SubmitButton;
