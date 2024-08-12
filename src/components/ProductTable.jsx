import useAxiosSecure from "@/hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
const ProductTable = ({cart, refetch}) => {
    const handleDelete = (id) => {
        const axiosSecure = useAxiosSecure();

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/cart/${id}`)
                .then(res => {
                if(res.data.deletedCount > 0){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your order has been deleted.",
                        icon: "success"
                    });
                }
            })
            }
          });
    }
    
    return (
        <div className="mt-12">
            <div>
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-[#2c3e50] text-white h-12">
                        <tr>
                        <th className="w-12 px-4 py-2 text-center">#</th>
                        <th className="px-4 py-2 text-center">Image</th>
                        <th className="px-4 py-2 text-center">Product Name</th>
                        <th className="px-4 py-2 text-center">Product Category</th>
                        <th className="px-4 py-2 text-center">Price</th>
                        <th className="px-4 py-2 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center divide-y divide-gray-200">
                        {
                            cart?.map((item,index) => (
                                <tr key={item._id} className="hover:bg-gray-100 transition-colors duration-200">
                                    <td className="px-4 py-4 text-center">{index + 1}</td>
                                    <td className="px-4 py-4 text-center">
                                        <img src={item.image} className="w-16 h-16 object-cover rounded-full border" />
                                    </td>
                                    <td className="px-4 py-4 text-center">{item.name}</td>
                                    <td className="px-4 py-4 text-center">{item.category}</td>
                                    <td className="px-4 py-4 text-center">$<span>{item.price}</span></td>
                                    <td className="px-4 py-4 text-center">
                                        {/* <button className="text-blue-600 hover:text-blue-800 mx-2">
                                            <FaEdit />
                                        </button> */}
                                        <button onClick={() => handleDelete(item._id)} className="text-red-600 hover:text-red-800 mx-2">
                                            <FaTrashAlt />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductTable;