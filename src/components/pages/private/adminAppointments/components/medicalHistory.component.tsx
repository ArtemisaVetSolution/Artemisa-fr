import { useForm } from "react-hook-form";

interface IFormInput {
    previousIllnesses: string,
    consultationReason: string,
    respiratoryRate: string,
    heartRate: string,
    pulse: string,
    crt: string;
    temperature: string;
    limphaticNodes: string;
    mucosa: string;
    temperament: string;
    findings: string;
    tests: string;
    weight: string;
    alimentation: string;
}

const MedicalHistoryComponent = () => {

    const { control, handleSubmit,
        formState: { errors }
    } = useForm<IFormInput>();


  return (
    <div>MedicalHistoryComponent</div>
  )
}

export default MedicalHistoryComponent