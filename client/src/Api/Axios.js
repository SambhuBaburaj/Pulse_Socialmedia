import axios from 'axios'


const baseURL='http://localhost:8000'
let authToken=localStorage.getItem('UserAuthToken')?localStorage.getItem('UserAuthToken'):null;


const UserInstance=axios.create({baseURL,
headers:{ "content-type": "application/json",
Authorization:`Barer ${authToken}`}

})


// axios.interceptors.request.use(
//     config => {
//       const token = localStorage.getAccessToken()
//       if (token) {
//         config.headers['Authorization'] = 'Bearer ' + token
//       }
//       config.headers['Content-Type'] = 'application/json';
//       return config
//     },
//     error => {
//       Promise.reject(error)
//     }
//   )


// export const getUser = (userId) => UserInstance.get(`/user/${userId}`);
export default UserInstance