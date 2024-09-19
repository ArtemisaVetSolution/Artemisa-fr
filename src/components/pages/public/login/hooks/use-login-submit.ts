import { AuthService } from "../../../../../services/auth.service";

type IProps = {
	email: string;
	password: string;
}

export const useLoginSubmit = async ({ email, password }: IProps) => {
	const response = await AuthService.login({ email, password });
	return response;
}