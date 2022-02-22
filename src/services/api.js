import axios from "axios";

const apiRegister = axios.create({
	baseURL: "http://localhost:3001/register",
});

export default apiRegister;
