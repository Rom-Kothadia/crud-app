import axios from "axios";

const API_URL = ' http://127.0.0.1:3002/users';

export const addUser = async (data) => {
    try {
        await axios.post(API_URL, data);
    } catch (err) {
        console.log('Error while calling addUser api', err.massage)
    }
}

export const getUsers = async () => {
    try {
        return await axios.get(API_URL);
    } catch (err) {
        console.log('Error while calling getUsers api', err.massage)
    }
}

export const getUser = async (data) => {
    try {
        return await axios.get(`${API_URL}/${data}`);
    } catch (err) {
        console.log('Error while calling getUser api', err.massage)
    }
}

export const editUser = async (data, id) => {
    try {
        return await axios.put(`${API_URL}/${id}`,data);
    } catch (err) {
        console.log('Error while calling editUser api', err.massage)
    }
}

export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${API_URL}/${id}`);
    } catch (err) {
        console.log('Error while calling deleteUser api', err.massage)
    }
}