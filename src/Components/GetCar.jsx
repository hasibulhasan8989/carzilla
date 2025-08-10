import { useQuery } from '@tanstack/react-query';

import useAxiosPublic from '../Hooks/useAxiosPublic';

const GetCar = () => {

    const axiosPublic=useAxiosPublic()
  
  const  {data:products=[],isLoading,refetch}=useQuery({
        queryKey:[],
        queryFn:async()=>{
           const {data}=await axiosPublic.get('/products')
           return data

        }
    })
 


    return {products,isLoading,refetch}
};

export default GetCar;