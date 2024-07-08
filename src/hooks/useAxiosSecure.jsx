import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://bitewave-restaurant-server.vercel.app'
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;