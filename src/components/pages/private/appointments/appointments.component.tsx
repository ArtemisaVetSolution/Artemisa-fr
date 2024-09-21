import SubmitBtnComponent from "@/components/UX/atoms/buttons/submitBtn.component";
import AppointmentForm from "./components/form.component";
import PetFormComponent from "./components/petForm.component";
import { useEffect, useState } from "react";
import ModalComponent from "./components/modal.components";
import { Box } from "@mui/material";
import styles from './styles.module.css'
import PetCardComponent from "./components/petCard.component";
import useFetch from "@/hooks/fetch.hook";
import { IPatients, PatientsService } from "@/services/patients/patients.service";
import AppointmentCardComponent from "./components/appointmentCard.component";
import { AppointmentsService } from "@/services/appointments/appointments.service";
import IAppointmentResponse from "@/services/appointments/interfaces/appointmentResponse.interface";
import { IAppStore } from "@/state/redux/store";
import { useSelector } from "react-redux";
import { TutorsService } from "@/services/tutors/tutors.service";

const Appointments = () => {

  const userState = useSelector((state : IAppStore)=>  state.user);


  //Handle modals
  const [openPetModal, setOpenPetModal] = useState(false);
  const [openAppointmentModal, setOpenAppointmentModal] = useState(false);

  const handleOpenPetModal = () => setOpenPetModal(true);
  const handleClosePetModal = () => setOpenPetModal(false);

  const handleOpenAppointmentModal = () => setOpenAppointmentModal(true);
  const handleCloseAppointmentModal = () => setOpenAppointmentModal(false);

  //Get tutor ID
  const [tutor, setTutor] = useState({});

  useEffect(() => {
    async function fetchData() {
        try {
            const result = await TutorsService.getByUserId(userState.id);
            setTutor(result);
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
    fetchData();
}, [userState])


  const pets: IPatients[] = useFetch(()=>PatientsService.getAll('tutorId=1'));
  const appointments: IAppointmentResponse[] = useFetch(() => AppointmentsService.getAllOrFilter('tutorId=1'));

  return (
    <div className={styles.container}>
      <Box sx={{width:'100%'}} className={styles.petContainer}>
        <h1 style={{color: 'white'}}>Tus Mascotas</h1>
      <div className={styles.cardsContainer}>
      {
          pets.map(pet => {
            return <PetCardComponent name={pet.name} species={pet.specie} breed={pet.breed}/>
          }) 
        }
      </div>

        
        <SubmitBtnComponent onClick={handleOpenPetModal} text="Añadir mascota" />
        <ModalComponent open={openPetModal} onClose={handleClosePetModal}>
          <PetFormComponent />
        </ModalComponent>
      </Box>



      <Box sx={{width:'100%'}} className={styles.appointmentContainer}>
        <h1>Tus Citas</h1>
        <div className={styles.cardsContainer}>
        {
          appointments.map(appointment => {
            const date = new Date(appointment.date);
            const formattedDate = date.toISOString().split('T')[0];
            return <AppointmentCardComponent pet={appointment.patient.name} time={appointment.time} date={formattedDate} state={appointment.state} service={appointment.service.name} />
          })
        }
        </div>
        <SubmitBtnComponent onClick={handleOpenAppointmentModal} text="Agendar cita" />
        <ModalComponent open={openAppointmentModal} onClose={handleCloseAppointmentModal}>
          <AppointmentForm />
        </ModalComponent>
      </Box>
    </div>
  )
}

export default Appointments;