import { useQuery } from '@tanstack/react-query';

import useAxiosPublic from '../Hooks/useAxiosPublic';

const GetCar = () => {

    const axiosPublic=useAxiosPublic()
  
  const  {data:products=[],isLoading}=useQuery({
        queryKey:[],
        queryFn:async()=>{
           const {data}=await axiosPublic.get('/products')
           return data

        }
    })
 


    return {products,isLoading}
};

export default GetCar;