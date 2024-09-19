import AppointmentForm from "./components/form.component";
import PetCardComponent from "./components/petCard.component";
import PetFormComponent from "./components/petForm.component";

const Appointments = () => {
  return (
    <div>
        {/* <AppointmentForm></AppointmentForm> */}
        {/* <PetCardComponent 
    imageUrl= "/placeholder.svg?height=40&width=40"
    name= "Fluffy"
    species= "Cat"
    breed= "Persian"
    birthDate= "2020-05-15"
></PetCardComponent> */}

<PetFormComponent></PetFormComponent>

        </div>
  )
}

export default Appointments;