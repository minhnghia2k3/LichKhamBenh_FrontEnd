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

const createNewUserService = (data) => {
    //DATA
    return axios.post("/api/create-new-user", data)
}

const deleteUserService = (userID) => {
    return axios.delete('/api/delete-user', {
        data: {
            id: userID
        }
    })
}
const editUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData)
}

export { handleLoginApi, getAllUsers, createNewUserService, deleteUserService, editUserService }