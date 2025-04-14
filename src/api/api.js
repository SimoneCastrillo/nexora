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
    const token = sessionStorage.getItem('token');

    try {
        const { data: buffets } = await apiInstance.get('/buffets', {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        console.log(buffets)
        const { data: enderecos } = await apiInstance.get('/enderecos', {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        console.log(enderecos)

        const buffetComEndereco = buffets.map((buffet) => {
            const enderecoBuffet = enderecos.find(end => end.buffetId === buffet.id);
            return { ...buffet, endereco: enderecoBuffet || {} };
        });
        console.log("com endereco",buffetComEndereco)

        return buffetComEndereco;
    } catch (error) {
        console.error("Erro ao buscar buffets ou endereços:", error);
        return [];
    }
};

export { logar, cadastrarBuffet, cadastrarEndereco, buscarBuffets };