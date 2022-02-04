import axios from "axios";
const url = "http://192.168.2.94:8080/";
const api = axios.create({
  baseURL: url
});
api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${(localStorage.getItem("token"))}`;
  return config;
})

export const addNewUser = async (firstName, lastName, userName, email, password) => {
  await api.post(`${url}registration`, {
    firstName,
    lastName,
    userName,
    email,
    password
  }).then(async (res) => {
    if (res.status === 200) {
      alert('All good!');
    }
    if (res.status === 207) {
      alert(res.data.message);
    }
  }).catch(err => {
    alert("Ошибка сервера...");
  })
}

export const Authorize = async (email, password) => {
  await api.post(`${url}login`, {
    email,
    password
  }).then(async (res) => {
   localStorage.setItem('token', res.data.token)
  })
}

export const updateUser = async (firstName, lastName, userName, email, password) => {
  await api.patch(`${url}updateUser`, {
    firstName,
    lastName,
    userName,
    email,
    password
  }).then(res => {
    if (res.status === 200) {
      return 'Ok'
    }
    if (res.status === 207) {
      return res.data.message;
    }
  }).catch(err => {
    return "Ошибка сервера...";
  })
}

export default api;