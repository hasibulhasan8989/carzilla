import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../../Components/SectionHeader";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/user");
      return data;
    },
  });
  
  const onMakeAdmin=()=>{
     Swal.fire({
            title: "Access Denied",
            text: "You do not have the necessary permissions to perform this action.",
            icon: "error",
            confirmButtonColor: "#f75d34",
            confirmButtonText: "OK",
            background: "#fff",
            backdrop: `
              rgba(0,0,0,0.4)
              left top
              no-repeat
            `,
          });
  }


  return (
    <div>
      <SectionHeader tag={"All User"} title={"Manage All User"}></SectionHeader>
      

      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="table-auto w-full min-w-[600px] bg-white">
          <thead className="bg-gradient-to-r from-orange-400 to-[#e14e2a] text-white">
            <tr>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Role</th>
              <th className="py-3 px-6 text-center">Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ _id, name, email, role }) => (
              <tr
                key={_id}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="py-4 px-6">{name}</td>
                <td className="py-4 px-6 break-words max-w-xs">{email}</td>
                <td className="py-4 px-6 capitalize">{role || "user"}</td>
                <td className="py-4 px-6 text-center">
                  {role === "admin" ? (
                    <span className="text-green-600 font-semibold">
                      ✅ Admin
                    </span>
                  ) : (
                    <button
                      onClick={() => onMakeAdmin(_id)}
                      className="bg-[#f75d34] cursor-pointer hover:bg-[#e14e2a] text-white px-4 py-1 rounded-md font-semibold transition duration-300"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
