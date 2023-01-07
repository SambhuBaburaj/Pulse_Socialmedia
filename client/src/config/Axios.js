import axios from 'axios'


const baseURL='http://localhost:8000'
let authToken=localStorage.getItem('UserAuthToken')?localStorage.getItem('UserAuthToken'):null;


const UserInstance=axios.create({baseURL,
headers:{ "content-type": "application/json",
Authorization:`Barer ${authToken}`}

})
export default UserInstance