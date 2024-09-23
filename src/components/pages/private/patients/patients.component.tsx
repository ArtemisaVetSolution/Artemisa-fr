import TableComponent from "@/components/UX/molecules/tables/table.component";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import useFetch from "@/hooks/fetch.hook";
import { IPatients, PatientsService } from "@/services/patients/patients.service";
import { Button } from "@mui/material";

const patientColumns = [
    { key: 'name', label: 'Nombre' },
    { key: 'specie', label: 'Especie' },
    { key: 'breed', label: 'Raza' },
    { key: 'gender', label: 'Género' },
    { key: 'dob', label: 'Fecha de Nacimiento' },
    { key: 'weight', label: 'Peso' },
    { key: 'alimentation', label: 'Alimentación' },
    { key: 'color', label: 'Color' },
    { key: 'sterilized', label: 'Esterilizado' },
    { key: 'tutorName', label: 'Nombre del tutor' },
    { key: 'singlePatient', label: 'Ver Paciente' },
];

export default function PatientsComponent() {
    const [species, setSpecies] = useState<string>(''); 
    const navigate = useNavigate();

    const handleViewPatient = (id: number) => {
        navigate(`/patient/${id}`);
    };

    const handleSpeciesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSpecies(event.target.value); // Actualiza el estado con la especie seleccionada
    };

    const patients: IPatients[] = useFetch(() => {
        return PatientsService.getAll(species);
    });


    const rows = patients.map(patient => {
        const date = new Date(patient.dob);
        const formattedDate = date.toISOString().split('T')[0];
        const color = patient.color ? patient.color : 'No especificado';
        const sterilized = patient.sterilized ? 'Sí' : patient.sterilized === false ? 'No' : 'No especificado';
        return {
            name: patient.name,
            specie: patient.specie,
            breed: patient.breed,
            gender: patient.gender,
            dob: formattedDate,
            weight: patient.weight,
            alimentation: patient.alimentation,
            color: color,
            sterilized: sterilized,
            tutorName: patient.tutor.name,
            singlePatient: (
                <Button variant="contained" color="primary" onClick={() => handleViewPatient(patient.id)}>
                    Ver Paciente
                </Button>
            ),
        }
    });

    // Retorno del JSX
    return (
        <div>
            <h1>Pacientes</h1>

            {/* Select para elegir la especie */}
            <label htmlFor="species">Filtrar por especie: </label>
            <select id="species" value={species} onChange={handleSpeciesChange}>
                <option value="">Todas las especies</option>
                <option value="Felino">Felino</option>
                <option value="Canino">Canino</option>
                <option value="Ave">Ave</option>
                <option value="Roedor">Roedor</option>
                <option value="Conejo">Conejo</option>
                <option value="Otro">Otro</option>
            </select>

            {/* Tabla que muestra los resultados */}
            <TableComponent columns={patientColumns} rows={rows} />
        </div>
    );
}
