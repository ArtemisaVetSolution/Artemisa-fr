import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface IProps {
    text: string;
}

export default function SubmitBtnComponent ({ text }: IProps) {
    return (
        <Stack direction="row" spacing={2}>
            <Button type='submit' variant="outlined" sx={{backgroundColor: '#EE6C4D', color: '#E0FBFC'}}>{text}</Button>
        </Stack>
    );
}