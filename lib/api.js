import axios from 'axios';

const API_BASE_URL = 'https://mmts-daph.onrender.com/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const healthCheck = async () => {
    try {
        const response = await api.get('/health/');
        return response.data;
    } catch (error) {
        console.error('Health check failed:', error);
        throw error;
    }
};

export const submitContactForm = async (formData) => {
    try {
        const response = await api.post('/contact/', formData);
        return response.data;
    } catch (error) {
        console.error('Contact form submission failed:', error);
        throw error;
    }
};

export default api;
