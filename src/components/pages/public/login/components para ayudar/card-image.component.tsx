import React from 'react';
import { Card, CardMedia } from '@mui/material';

interface ImageCardProps {
  image: string; 
}

export const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <Card sx={{ maxWidth: 400, margin: 'auto' }}>
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt="Image Card"
      />
    </Card>
  );
};

