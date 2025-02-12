import axios from 'axios';


const token = localStorage.getItem('authToken') ?? '';


export const loginFetch = axios.create({
  baseURL: 'https://sonil-dev.void.co.mz/api/v4/sectors/all', 
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,  
  }
});
