import axios from 'axios';

axios.interceptors.request.use(config => {
  // Modifica la petición antes de enviarla
  config.headers = config.headers || {}
  config.headers.Authorization = 'Bearer token'
  return config;
});

axios.interceptors.response.use(
  response => {
    console.log(response)
    return response
  },
  error => {
    // Manejo global de errores
    return Promise.reject(error)
  }
);