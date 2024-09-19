import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface IProps {
    text: string;
}

export default function SubmitBtnComponent ({ text }: IProps) {
    return (
        <Stack direction="row" spacing={2} sx={{width: '40%'}}>
            <Button type='submit' variant="contained" sx={{backgroundColor: '#EE6C4D', color: '#E0FBFC', width: '100%', fontWeight: '700'}}>{text}</Button>
        </Stack>
    );
}