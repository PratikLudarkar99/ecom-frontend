import axios from "axios";

// Create Axios instance with defaults
const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACK_END_URL}/api`,
  withCredentials: true,
  // headers: {
  //   "Content-Type": "application/json", // Default content type
  //   Accept: "application/json",
  // },
});

// Add request interceptor to inject token
// api.interceptors.request.use((config) => {
//   // Get token from cookies (replace 'jwtCookie' with your actual cookie name)
//   const userData = localStorage.getItem("auth");
//   const pasedData = JSON.parse(userData);
//   console.log({ pasedData });
//   const token = pasedData?.jwtToken;

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

export default api;
