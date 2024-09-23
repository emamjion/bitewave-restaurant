import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'https://bitewave-restaurant-server.vercel.app'
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut} = useAuth();
     
    // Request interceptors to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use( function(config){
        const token = localStorage.getItem('access-token');
        // console.log('Request stopped by Interceptors', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // Intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function(response) {
        return response;
    }, async function(error) {
        const status = error.response.status;
        // for 401 and 403 logout the user and move the user to the login page.
        if(status === 401 || status === 403) {
            
            await logOut();
            navigate('/login');
        }
        return Promise.reject(error);
    })


    return axiosSecure;
};

export default useAxiosSecure;