// import axios from 'axios';
// import { useEffect, useState } from 'react';

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
    const axiosPublic = useAxiosPublic();
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);

    /*
    // Basic fetching data using axios
    useEffect(() => {
        axios.get('https://bitewave-restaurant-server.vercel.app/menu')
        .then(response => {
            setMenu(response.data);
            setLoading(false)
        }).catch(error => {
            console.log('There was an error fetching the menu!!', error);
        })
    }, [])
    */
    // fetching data using Tanstack query
    const { data: menu = [], isPending: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const response = await axiosPublic.get('/menu');
            return response.data;
        }
    });
    
    return [menu, loading, refetch];
};

export default useMenu;