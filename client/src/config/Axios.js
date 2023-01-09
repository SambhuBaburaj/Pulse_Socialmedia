import axios from 'axios'


const baseURL='http://localhost:8000'
let authToken=localStorage.getItem('UserAuthToken')?localStorage.getItem('UserAuthToken'):null;


const UserInstance=axios.create({baseURL,
headers:{ "content-type": "application/json",
Authorization:`Barer ${authToken}`}

})


axios.interceptors.response.use(
    response => {
        console.log(response);
      // If the access token is valid, return the response
      if (response) {
        console.log('hjwehiuhtgswef');
        return response;
      }})

export default UserInstance