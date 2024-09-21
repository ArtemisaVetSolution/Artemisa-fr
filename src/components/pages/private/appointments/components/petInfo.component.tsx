import { Typography } from '@mui/material';
import styles from '../styles.module.css'
import SubmitBtnComponent from '@/components/UX/atoms/buttons/submitBtn.component';

interface IProps {
    name: string;
}

const PetInfoComponent = ({ name }: IProps) => {

    const handleClinicalHistory = () => {
        
    }

  return (
    <div className={styles.form}>
        <Typography variant='h3'>{name}</Typography>
        <SubmitBtnComponent text={'Ver última historia clínica'} onClick={handleClinicalHistory} />
        <SubmitBtnComponent text={'Ver resultados de exámenes'} />
    </div>
  )
}

export default PetInfoComponent