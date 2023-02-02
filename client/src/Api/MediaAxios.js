import axios, { Axios } from 'axios'
const baseURL='http://localhost:8000'
let authToken=localStorage.getItem('UserAuthToken')?localStorage.getItem('UserAuthToken'):null;
const UserMediaInstance = axios.create({baseURL});
UserMediaInstance.interceptors.request.use(
    config => {
   
      const token = localStorage.getItem('UserAccessToken')

      if (token) {
        config.headers['Authorization'] = 'Bearer ' + token
      }
      config.headers['Content-Type'] = 'multipart/form-data';
      return config
    },
    error => {
      Promise.reject(error)
      console.log(error);
    }
  )

  
  export default UserMediaInstance
