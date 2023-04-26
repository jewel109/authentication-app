import instance from "../services/axios";
import axiosError from "../services/errorHandler/axiosError";

export const privateData = async () => {


  const token = localStorage.getItem('authToken')

  try {

    const { data } = await instance.get('/auth/private', { headers: { "Authorization": `Bearer ${token}` } })
    console.log(data.user)
    return data.user;
  } catch (err) {
    axiosError(err)
    console.log(err)
  }
}
