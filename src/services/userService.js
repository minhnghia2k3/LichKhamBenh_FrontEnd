import axios from '../axios'

const handleLoginApi = (userEmail, userPassword) => {
    //{email1: 'input email'
    //password:'input password"} shorter syntax
    return axios.post('api/login', { email: userEmail, password: userPassword });
}

const getAllUsers = (inputID) => {
    //template string
    return axios.get(`/api/get-all-users?id=${inputID}`, { id: inputID })
}

export { handleLoginApi, getAllUsers }