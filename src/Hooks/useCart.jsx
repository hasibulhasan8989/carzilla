import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const {user,loading}=useAuth()

  const {data:cartItems=[],refetch,isLoading,isPending} = useQuery({
    enabled: !!user && !loading ,
    queryKey: ["cart",user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/cart/${user?.email}`);
      return data
    },
  });


  return {
    cartItems,refetch,isLoading,isPending
  };
};

export default useCart;
