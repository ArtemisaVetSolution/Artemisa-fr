import { Typography } from '@mui/material';
import styles from '../styles.module.css'
import SubmitBtnComponent from '@/components/UX/atoms/buttons/submitBtn.component';
import { useState } from 'react';
import useFetch from '@/hooks/fetch.hook';
import { MedicalHistoryService } from '@/services/medicalHistory/medicalHistory.service';
import BasicSelect from '@/components/UX/atoms/inputs/select.component';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import IHistoryResponse from '@/services/medicalHistory/interfaces/historyResponse.interface';
import ITestResultResponse from '@/services/testResults/interfaces/testResultResponse.interface';
import { TestResultsService } from '@/services/testResults/testResults.service';

interface IProps {
  id: number;
  name: string;
  breed?: string;
  specie: string;
  dob?: string;
  gender: string;
  weight?: number;
  color?: string;
  setCloseModal: () => void;
}

export interface IHistoryFormInput {
  id: string;
}

const PetInfoComponent = (props: IProps) => {

  const [getClinicalHistory, setGetClinicalHistory] = useState(false)
  const [historyId, setHistoryId] = useState('');
  const [loading, setLoading] = useState(false);
  const [getTestResult, setGetTestResult] = useState(false);
  const [testId, setTestId] = useState('');

  const clinicalHistory: IHistoryResponse[] = useFetch(() => MedicalHistoryService.getAllOrFilter(`patientId=${props.id}`), [getClinicalHistory]);

  const clinicalHistoryFile: Blob = useFetch(() => MedicalHistoryService.getFile(historyId), [historyId]);

  const testResults: ITestResultResponse[] = useFetch(() => TestResultsService.getAllOrFilter(`patientId=${props.id}`), [getTestResult]);

  const testResultFile: Blob = useFetch(() => TestResultsService.getFile(testId), [testId]);



  const dateList = clinicalHistory.map((record) => {
    const date = new Date(record.appointment.date);
    const formmatedDate = date.toISOString().split('T')[0]
    return {
      id: record.id,
      name: formmatedDate
    }
  })

  const testsList = testResults.map(test => {
    const date = new Date(test.date);
    const formattedDate = date.toISOString().split('T')[0];
    return {
      id: test.id,
      name: `${test.service.name} - ${formattedDate}`
    }
  })

  const handleClinicalHistory = () => {
    setGetClinicalHistory(true);
    setGetTestResult(false);
  }

  const { control, handleSubmit,
    formState: { errors }
  } = useForm<IHistoryFormInput>();

  const generateFile: SubmitHandler<IHistoryFormInput> = (data) => {
    try {
      setLoading(true);
      setHistoryId(data.id);

    } catch (error) {
      console.error('Error al generar el PDF:', error);
    }
  }

  const seeFile: SubmitHandler<IHistoryFormInput> = () => {
    try {
      // Crear una URL desde el blob
      const fileUrl = window.URL.createObjectURL(new Blob([clinicalHistoryFile], { type: 'application/pdf' }));

      // Abrir el PDF en una nueva pestaña
      window.open(fileUrl, '_blank');

      return () => {
        window.URL.revokeObjectURL(fileUrl);
      };
    } catch (error) {
      console.error('Error al generar el PDF:', error);
    } finally {
      setLoading(false);
      props.setCloseModal();
    }
  }

  const handleTestResult = () => {
    setGetTestResult(true);
    setGetClinicalHistory(false);
  }

  const generateTestFile: SubmitHandler<IHistoryFormInput> = (data) => {
    try {
      setLoading(true);
      setTestId(data.id);
    } catch (error) {
      console.log('Error al generar el PDF:', error)
    }
  }

  const seeTestFile:  SubmitHandler<IHistoryFormInput> = () => {
    try {

      const fileUrl = window.URL.createObjectURL(new Blob([testResultFile], { type: 'application/pdf' }));

      // Abrir el PDF en una nueva pestaña
      window.open(fileUrl, '_blank');

      return () => {
        window.URL.revokeObjectURL(fileUrl);
      };
    } catch (error) {
      console.log('Error al generar el PDF:', error)
    } finally {
      setLoading(false);
      props.setCloseModal();
    }
  }


  return (
    <div className={styles.petInfoContainer}>
      <Typography variant='h3'>{props.name}</Typography>
      <div className={styles.petInfo}>
        <Typography>
          <span className={styles.infoLabel}>Especie:</span> {props.specie}
        </Typography>
        <Typography>
          <span className={styles.infoLabel}>Raza:</span> {props.breed || 'No registra'}
        </Typography>
        <Typography>
          <span className={styles.infoLabel}>Color:</span> {props.color || 'No registra'}
        </Typography>
        <Typography>
          <span className={styles.infoLabel}>Fecha de nacimiento:</span> {props.dob || 'No registra'}
        </Typography>
        <Typography>
          <span className={styles.infoLabel}>Sexo:</span> {props.gender}
        </Typography>
        <Typography>
          <span className={styles.infoLabel}>Peso:</span> {props.weight || 'No registra'}
        </Typography>
      </div>
      <div className={styles.btnContainer}>
        <SubmitBtnComponent text={'Ver historia clínica'} onClick={handleClinicalHistory} />
        <SubmitBtnComponent text={'Ver resultados de exámenes'} onClick={handleTestResult} />
      </div>
      {
        getClinicalHistory &&
        <form style={{ display: 'flex', width: '100%', gap: '1rem' }} onSubmit={loading ? handleSubmit(seeFile) : handleSubmit(generateFile)}>
          <Controller name='id' control={control} defaultValue="" rules={{
            required: {
              value: true,
              message: 'Campo requerido'
            }
          }} render={({ field }) => (
            <BasicSelect label={'Fecha'} items={dateList} field={field} error={errors.id} />
          )} />

          <SubmitBtnComponent text={loading ? 'Ver archivo' : 'Confirmar'} />
        </form>
      }

      {
        getTestResult &&
        <form style={{ display: 'flex', width: '100%', gap: '1rem' }} onSubmit={loading ? handleSubmit(seeTestFile) : handleSubmit(generateTestFile)}>
          <Controller name='id' control={control} defaultValue="" rules={{
            required: {
              value: true,
              message: 'Campo requerido'
            }
          }} render={({ field }) => (
            <BasicSelect label={'Servicio'} items={testsList} field={field} error={errors.id} />
          )} />

          <SubmitBtnComponent text={loading ? 'Ver archivo' : 'Confirmar'} />
        </form>
      }
    </div>
  )
}

export default PetInfoComponent