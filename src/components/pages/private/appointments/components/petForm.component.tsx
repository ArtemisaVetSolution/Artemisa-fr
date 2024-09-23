import { Dayjs } from "dayjs";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import styles from "../styles.module.css";
import InputField from "@/components/UX/atoms/inputs/inputField.component";
import BasicSelect from "@/components/UX/atoms/inputs/select.component";
import { Gender, Species } from "../../../../../models/enums/pet.enums";
import DatePickerComp from "@/components/UX/atoms/inputs/datePicker.component";
import SubmitBtnComponent from "@/components/UX/atoms/buttons/submitBtn.component";
import { ICreatePatient } from "@/services/patients/interfaces/createPatient.interface";
import { PatientsService } from "@/services/patients/patients.service";
import { useEffect, useState } from "react";
import { ConfirmationModal } from "@/components/UX/atoms/modals/confirmationModal.component";

interface IFormInput {
  name: string;
  specie: string;
  breed?: string;
  gender: string;
  dob?: Dayjs;
  color: string;
  alimentation: string;
}

interface IProps {
  tutorId: number;
  isEdit?: boolean;
}

const PetFormComponent = ({ tutorId, isEdit }: IProps) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const [modalText, setModalText] = useState("");

  useEffect(() => {
    if (isEdit) {
      console.log("Editando mascota");
    }
  }, [isEdit]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const species = Object.values(Species);
  const speciesWithId = species.map((specie) => {
    return { id: specie, name: specie };
  });

  const gender = Object.values(Gender);
  const genderWithId = gender.map((gender) => {
    return { id: gender, name: gender };
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const body: ICreatePatient = {
        name: data.name,
        specie: data.specie,
        breed: data.breed,
        gender: data.gender,
        dob: data.dob?.toISOString().split("T")[0],
        color: data.color,
        alimentation: data.alimentation,
        tutorId,
      };
      if (isEdit) {
      } else {
        const response = await PatientsService.create(body);
        if (response.statusCode === 201) {
          setModalText("Mascota creada!");
          handleOpenModal();
        }
      }
    } catch (error) {
      console.log(error);
      setModalText("Algo salió mal");
      handleOpenModal();
    }
  };

  const handleSaveEdit = async (data: IFormInput) => {
    try {
      const body: ICreatePatient = {
        name: data.name,
        specie: data.specie,
        gender: data.gender,
        tutorId,
      };
      const pet = await PatientsService.ge
      const response = await PatientsService.update(body);

    } catch (error) {
      console.log(error);
      setModalText("Algo salió mal");
      handleOpenModal();
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {isEdit ? (
        <h1 className={styles.title}>Editar mascota</h1>
      ) : (
        <h1 className={styles.title}>Nueva mascota</h1>
      )}

      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{
          required: {
            value: true,
            message: "Campo requerido",
          },
          minLength: {
            value: 2,
            message: "Debe ser mayor a 2 caracteres",
          },
        }}
        render={({ field }) => (
          <InputField
            label={"Nombre de tu mascota"}
            field={field}
            error={errors.name}
          />
        )}
      />

      <Controller
        name="specie"
        control={control}
        defaultValue=""
        rules={{
          required: {
            value: true,
            message: "Campo requerido",
          },
        }}
        render={({ field }) => (
          <BasicSelect
            label={"Especie"}
            items={speciesWithId}
            field={field}
            error={errors.specie}
          />
        )}
      />

      <Controller
        name="breed"
        control={control}
        defaultValue=""
        rules={{
          minLength: {
            value: 3,
            message: "Debe ser mayor a 3 caracteres",
          },
        }}
        render={({ field }) => (
          <InputField label={"Raza"} field={field} error={errors.breed} />
        )}
      />

      <Controller
        name="gender"
        control={control}
        defaultValue=""
        rules={{
          required: {
            value: true,
            message: "Campo requerido",
          },
        }}
        render={({ field }) => (
          <BasicSelect
            label={"Sexo"}
            items={genderWithId}
            field={field}
            error={errors.gender}
          />
        )}
      />

      <Controller
        name="dob"
        control={control}
        render={({ field }) => (
          <DatePickerComp
            field={field}
            label="Fecha de nacimiento"
            options="disableFuture"
            error={errors.dob}
          />
        )}
      />

      <Controller
        name="color"
        control={control}
        defaultValue=""
        rules={{
          minLength: {
            value: 3,
            message: "Debe contener más de 3 caracteres",
          },
        }}
        render={({ field }) => <InputField label={"Color"} field={field} />}
      />

      <Controller
        name="alimentation"
        control={control}
        defaultValue=""
        rules={{
          minLength: {
            value: 3,
            message: "Debe contener más de 3 caracteres",
          },
        }}
        render={({ field }) => (
          <InputField label={"Alimentación"} field={field} />
        )}
      />

      <SubmitBtnComponent text={"Guardar"} />
      <ConfirmationModal
        text={modalText}
        open={openModal}
        onClose={handleCloseModal}
      />
    </form>
  );
};

export default PetFormComponent;
