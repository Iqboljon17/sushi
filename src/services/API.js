import axios from 'axios'

const API = axios.create({
  baseURL: 'http://5.182.26.17:8000',
})

API.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default API
