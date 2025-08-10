import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const GetBooking = () => {

    const{loading,user}=useAuth()
    const axiosSecure=useAxiosSecure()
     const { data: bookings = [],refetch } = useQuery({
    queryKey: ["order",user?.email],
    enabled:!loading,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/testDrive/${user.email}`);
      return data;
    },
  });

    return {bookings,refetch}
};

export default GetBooking;