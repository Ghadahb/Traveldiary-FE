import axios from "axios";

// export const baseURL = "http://192.168.8.149:8005";

// Ghadah
// export const baseURL  = "http://172.20.10.3:8005";

//export const baseURL = "http://192.168.8.149:8005";

// export const baseURL  = "http://172.20.10.3:8005";

//Dwam Abdallah
// export const baseURL = "http://192.168.43.3:8005";
// Abdallah Home
export const baseURL = "http://192.168.8.114:8005";



export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});
