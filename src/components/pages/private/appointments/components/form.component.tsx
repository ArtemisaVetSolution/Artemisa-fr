import { ServicesService } from "../../../../../services/services/services.service";
import { useForm, SubmitHandler, Controller, useWatch } from "react-hook-form"
import styles from './styles.module.css'
import BasicSelect from "../../../../UX/atoms/inputs/select.component";
import DatePicker from "../../../../UX/atoms/inputs/datePicker.component";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { CollaboratorsService } from "../../../../../services/collaborator/collaborators.service";
import { PatientsService } from "../../../../../services/patients/patients.service";
import useFetch from "../../../../../hooks/fetch.hook";
import SubmitBtnComponent from "../../../../UX/atoms/buttons/submitBtn.component";

// interface IFormInput {
//     service: string;
//     date: string;
//     collaborator: string;
//     patient: string;
// }

const AppointmentForm = () => {
    const today = dayjs();

    const [query, setQuery] = useState('');

    const services = useFetch(ServicesService.getAll);
    const patients = useFetch(() => PatientsService.getAll('tutorId=1'));
    const collaborators = useFetch(() => CollaboratorsService.getAll(query), [query]);

    const { control, handleSubmit } = useForm();

    const selectedService = useWatch({
        control,
        name: 'service'
    })

    useEffect(() => {
        if (selectedService) {
            setQuery(`serviceId=${selectedService}`);
        }
    }, [selectedService])

    const servicesNames: { id: string, name: string }[] = services.map((items: any) => {
        return { id: items.id, name: items.name }
    })

    const collaboratorsNames = collaborators.map((items: any) => {
        return { id: items.id, name: items.name }
    })

    const patientsNames = patients.map((items: any) => {
        return { id: items.id, name: items.name }
    })

    const onSubmit: SubmitHandler<any> = (data) => console.log(data);

    return (

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)} >
            <h1 className={styles.title}>Nueva Cita</h1>
            <Controller name='pet' control={control} defaultValue={""} render={({ field }) => (
                <BasicSelect items={patientsNames} label={'Mascota'} field={field} />
            )}
            />
            <Controller name='service' control={control} defaultValue={""} render={({ field }) => (
                <BasicSelect items={servicesNames} label={'Servicio'} field={field} />
            )}
            />
            <Controller name='date' control={control} defaultValue={today} render={({ field }) => (
                <DatePicker date={field.value} setDate={field.onChange} />
            )}
            />
            <Controller name='collaborator' control={control} defaultValue={""} render={({ field }) => (
                <BasicSelect items={collaboratorsNames} label={'Profesional'} field={field} />
            )}
            />
            <SubmitBtnComponent text={'Ver disponibilidad'} />
        </form>

    )
}
export default AppointmentForm;