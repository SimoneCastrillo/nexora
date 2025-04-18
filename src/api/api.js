import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_URL;
const api = () => {
    return axios.create({
        baseURL: BASE_URL
    });
}

const logar = async (usuario) => {
    const apiInstance = api();
    return await apiInstance.post('/usuarios/login', usuario, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
const cadastrarBuffet = async (formData) => {
    const apiInstance = api();
    const token = sessionStorage.getItem('token');

    return await apiInstance.post('/buffets', formData, {
        headers: {
            "Authorization": `Bearer ${token}`, 
            "Content-Type": "multipart/form-data",
        },
    });
};

const cadastrarEndereco = async (endereco) => {
    const apiInstance = api();
    const token = sessionStorage.getItem('token');

    return await apiInstance.post('/enderecos', endereco, {
        headers: {
            "Authorization": `Bearer ${token}`, 
            "Content-Type": "application/json",
        },
    });
}

const buscarBuffets = async () => {
    const apiInstance = api();
        return await apiInstance.get('/enderecos', {
            headers: {
                "Content-Type": "application/json"
            },
        });
};

export { logar, cadastrarBuffet, cadastrarEndereco, buscarBuffets };