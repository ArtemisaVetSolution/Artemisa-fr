import { Typography } from "@mui/material"
import styles from '../styles.module.css';
import { useState } from "react";
import SubmitBtnComponent from "@/components/UX/atoms/buttons/submitBtn.component";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import FileInputField from "@/components/UX/atoms/inputs/fileUpload.component";

interface IFormInput {
    file: File | null; 
  }
  
  const UploadResultComponent = () => {
    const { control, handleSubmit} = useForm<IFormInput>(); 
    // const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
    // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   const file = event.target.files?.[0];
    //   if (file && file.type === 'application/pdf') {
    //     setSelectedFile(file);
    //     setValue('file', file);
    //   } else {
    //     alert('Por favor, sube un archivo PDF.');
    //   }
    // };
  
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
      if (data.file) {
        // TODO enviar al back
        console.log(data.file)
      }
    };
  
    return (
      <div className={styles.singleAppointmentContainer}>
        <Typography variant={'h3'}>Subir resultados de exámenes</Typography>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.flexColumn}>

          <Controller
            name="file"
            control={control}
            defaultValue={null} 
            render={({ field }) => (
              <FileInputField field={field} />
            )}
          />
           
          <SubmitBtnComponent text="Confirmar" />
        </form>
      </div>
    );
  };
  
  export default UploadResultComponent;
  