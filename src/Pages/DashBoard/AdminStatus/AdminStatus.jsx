import { FaCar, FaClock, FaDollarSign, FaCheckCircle, FaUsers } from "react-icons/fa";
import GetCar from "../../../Components/GetCar";
import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";

export default function AdminStats() {

    const axiosSecure=useAxiosSecure()
    const {products}=GetCar()

    const {data:totalRevenue={} }=useQuery({
        queryKey:['total'],
        queryFn:async()=>{
            const {data}=await axiosSecure.get('/totalRevenue')
            return data
        }
    })

    const {data:testDrive=[] }=useQuery({
        queryKey:['testDrive'],
        queryFn:async()=>{
            const {data}=await axiosSecure.get('/testDrive')
            return data
        }
    })
 
    console.log(totalRevenue)

  const stats = [
    {
      title: "Total Cars Listed",
      value: products.length,
      icon: <FaCar size={28} />,
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "New Listings This Year",
      value: "25",
      icon: <FaClock size={28} />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Total Sales / Revenue",
      value: `$${totalRevenue.totalRevenue}`,
      icon: <FaDollarSign size={28} />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Test Drive Request",
      value: testDrive.length,
      icon: <FaCheckCircle size={28} />,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Total Users / Dealers",
      value: "320",
      icon: <FaUsers size={28} />,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`bg-gradient-to-r ${stat.color} text-white rounded-2xl shadow-lg p-5 flex items-center gap-4 transform hover:scale-105 transition-all duration-300`}
        >
          <div className="bg-white/20 p-3 rounded-full">
            {stat.icon}
          </div>
          <div>
            <h2 className="text-2xl font-bold">{stat.value}</h2>
            <p className="text-sm opacity-90">{stat.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
