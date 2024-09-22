import ICollaboratorResponse from "@/services/collaborator/interfaces/collaboratorResponse.interface";
import { IPatients } from "@/services/patients/patients.service";
import IServiceResponse from "@/services/services/interfaces/servicesResponse.interface";

interface IAppointmentResponse {
    id: number;
    date: string;
    time: string;
    totalPrice: number;
    state: string;
    patient: IPatients;
    service?: IServiceResponse;
    collaborator?:ICollaboratorResponse;
}

export default IAppointmentResponse;