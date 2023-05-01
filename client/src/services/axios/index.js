import axios from "axios";

const instance = axios.create({
  baseURL: "https://authentication-service-api.onrender.com/"
})
instance.defaults.headers.post['Content-Type'] = 'application/json'

export default instance
