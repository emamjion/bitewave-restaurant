import useAxiosSecure from "@/hooks/useAxiosSecure";
import { FaRegEdit, FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";

const MenuTable = ({menu, refetch}) => {
    const axiosSecure = useAxiosSecure();
    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async (result) => {
            if (result.isConfirmed) {
                const response = await axiosSecure.delete(`/menu/${item._id}`)
                if(response.data.deletedCount > 0){
                    // refetch to update the UI
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} has been deleted`,
                        icon: "success"
                    });
                }
               
            }
          });
    };
    const handleEditItem = (item) => {

    };
    
    return (
    <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
      <thead className="bg-gradient-to-r from-[#2c3e50] to-[#34495e] text-white">
        <tr className="h-14">
          <th className="px-6 py-4 text-center">#</th>
          <th className="px-6 py-4 text-center">Image</th>
          <th className="px-6 py-4 text-center">Name</th>
          <th className="px-6 py-4 text-center">Price</th>
          <th className="px-6 py-4 text-center">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-300">
        {
            menu?.map((item, index) => (
                <tr key={item._id} className="hover:bg-gray-100 transition-colors duration-300">
                    <td className="px-6 py-4 text-center font-semibold">{index + 1}</td>
                    <td className="px-6 py-4">
                        <div className="flex justify-center">
                        <img
                            src={item.image} 
                            alt={item.name}
                            className="w-14 h-14 object-cover rounded-full shadow-md border border-gray-200"
                        />
                        </div>
                    </td>
                    <td className="px-6 py-4 text-center font-medium text-gray-800">{item.name}</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">
                        $<span>{item.price}</span>
                    </td>
                    <td className="px-6 py-4">
                        <div className="flex justify-center items-center gap-2">
                        {/* edit button */}
                        <button
                            onClick={() => handleEditItem(item)}
                            className="bg-accent hover:bg-[#1c1c22] text-white w-10 h-10 flex items-center justify-center rounded transition-all duration-200"
                        >
                            <FaRegEdit className="text-lg" />
                        </button>
                        
                        {/* delete button */}
                        <button
                            onClick={() => handleDeleteItem(item)}
                            className="bg-accent hover:bg-[#1c1c22] text-white w-10 h-10 flex items-center justify-center rounded transition-all duration-200"
                        >
                            <FaTimes className="text-lg" />
                        </button>
                        </div>
                    </td>
                </tr>
            ))
        }
        
      </tbody>
    </table>
  );
};

export default MenuTable;
