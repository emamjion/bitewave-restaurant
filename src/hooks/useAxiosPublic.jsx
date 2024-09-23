import axios from "axios";

const axiosPublic = axios.create({
    baseURL : 'https://bitewave-restaurant-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;