import { Dayjs } from "dayjs";
import { useForm, SubmitHandler, Controller, useWatch } from "react-hook-form";

import styles from './styles.module.css';

interface IFormInput {
    name: string;
    specie: string;
    breed?: string;
    gender: string;
    dob?: Dayjs;
    color: string;
    alimentation: string;
}

const PetFormComponent = () => {

    const { control, handleSubmit,
        formState: { errors }
    } = useForm<IFormInput>();

  return (
    
    <form className={styles.form} >
        <h1 className={styles.title}>Nueva Mascota</h1>

        <Controller name='name' control={control} defaultValue="" rules={{
            required:{
                value: true,
                message: 'Campo requerido'
            }
        }} render={({field}) => (

        )}/>
    </form>
  )
}

export default PetFormComponent;