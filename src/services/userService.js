import axios from '../axios'

const handleLoginApi = (userEmail, userPassword) => {
    //{email1: 'input email'
    //password:'input password"} shorter syntax
    return axios.post('api/login', { email: userEmail, password: userPassword });
}

export { handleLoginApi }