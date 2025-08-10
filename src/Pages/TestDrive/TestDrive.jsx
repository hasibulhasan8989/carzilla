
import GetBooking from "../../Hooks/getBooking";
import { MdDelete } from "react-icons/md";




const TestDrive = () => {
  
 const {bookings}=GetBooking()
 

  
  return (
   <div className="overflow-x-auto container mx-auto ">

    <h1 className="text-center text-2xl font-bold my-10">Your Car Booking</h1>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Car Model</th>
        <th>Customer Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Address</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
     {
      bookings.map(booking=><tr key={booking._id}>
        <th>
          {booking.productName}
        </th>
        <td>
        {booking.name}
        </td>
        <td>
         {booking.phone}
          
        </td>
        <td >{booking.email}</td>
        <th>
          {booking.address}
        </th>
        <td >
            <p className={`${booking.status=== 'pending'?'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800' }  ${booking.status=== 'cancelled' && 'bg-red-100 text-red-800'}  text-center rounded-2xl`}>{booking.status}</p>
        </td>
        
           <td >
                  <MdDelete
                    className="cursor-pointer text-red-600 hover:text-red-800 transition-colors"
                    size={25}
                    title="Delete Booking"
                    // Add onClick handler here for delete action
                  />
                </td>
        
      </tr>)
           
     }
    </tbody>
    {/* foot */}
 
  </table>
</div>
  );
};

export default TestDrive;
