import httpService from "./http-service";
// import { REACT_APP_USERNAME, REACT_APP_PASSWORD } from "../../env_variables";

const loginService = {
    login: async () => {
        const data = {
            'username': process.env.REACT_APP_USERNAME,
            'password': process.env.REACT_APP_PASSWORD,
        }
        return await httpService.post('login', data);
    }
}

export default loginService;