import Swal from "sweetalert2";
import GetBooking from "../../Hooks/getBooking";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import NoRequest from "./NoRequest";

const TestDrive = () => {
  const { bookings, refetch } = GetBooking();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This booking will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axiosSecure.delete(`/testDrive/${id}`);
        if (data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "The booking has been removed.",
            icon: "success",
          });
        }
      }
    });
  };

  if (bookings.length === 0) {
    return <NoRequest />;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-center text-3xl font-bold mb-8  text-orange-500">
       Your Test Drive Bookings
      </h1>

      <div className="overflow-x-auto shadow-lg rounded-xl border border-gray-200">
        <table className="min-w-full bg-white">
          {/* Table Head */}
          <thead>
            <tr className="bg-gradient-to-r from-orange-500 to-purple-500 text-white text-sm md:text-base">
              <th className="py-4 px-6 text-left">Car Model</th>
              <th className="py-4 px-6 text-left">Customer Name</th>
              <th className="py-4 px-6 text-left">Phone</th>
              <th className="py-4 px-6 text-left">Email</th>
              <th className="py-4 px-6 text-left">Address</th>
              <th className="py-4 px-6 text-center">Status</th>
              <th className="py-4 px-6 text-center">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {bookings.map((booking, idx) => (
              <tr
                key={booking._id}
                className={`hover:bg-gray-50 transition-colors ${
                  idx % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                }`}
              >
                <td className="py-4 px-6 font-semibold text-gray-800">
                  {booking.productName}
                </td>
                <td className="py-4 px-6">{booking.name}</td>
                <td className="py-4 px-6">{booking.phone}</td>
                <td className="py-4 px-6">{booking.email}</td>
                <td className="py-4 px-6">{booking.address}</td>
                <td className="py-4 px-6 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      booking.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : booking.status === "rejected"
                        ? "bg-red-100 text-red-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-center">
                  <MdDelete
                    onClick={() => handleDelete(booking._id)}
                    className="cursor-pointer text-red-500 hover:text-red-700 transition-transform transform hover:scale-110"
                    size={24}
                    title="Delete Booking"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestDrive;
