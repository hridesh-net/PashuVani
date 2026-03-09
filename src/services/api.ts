import apiClient from './apiClient';

export const login = async (username: string, password: string) => {
    // FastAPI's OAuth2PasswordRequestForm expects x-www-form-urlencoded data
    const formData = new URLSearchParams();
    formData.append('username', username);
    formData.append('password', password);
    const response = await apiClient.post('/token', formData, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    return response.data;
};

export const fetchFarmers = async () => {
    const response = await apiClient.get('/farmers');
    return response.data;
};

export const fetchAnimals = async () => {
    const response = await apiClient.get('/animals');
    return response.data;
};

export const fetchConsultations = async () => {
    const response = await apiClient.get('/consultations');
    return response.data;
};

export const fetchAlerts = async () => {
    const response = await apiClient.get('/alerts');
    return response.data;
};
