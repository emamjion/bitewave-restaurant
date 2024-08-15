import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data : users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    // delete user from the database
    const handleDeleteUser = (id) => {
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
                axiosSecure.delete(`/users/${id}`)
                .then(res => {
                if(res.data.deletedCount > 0){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "User has been deleted.",
                        icon: "success"
                    });
                }
            })
            }
        });
    };

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            if(res.data.modifiedCount > 0) {
                refetch();
                Swal.fire(`${user.name} is an Admin now!`);
            }
        })
    };

    
    return (
        <div>
            <div>
                <h1 className="text-2xl font-semibold">All Users: <span>{users.length}</span></h1>
            </div>
                <div className="mt-12">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-[#2c3e50] text-white h-12">
                            <tr>
                                <th className="w-12 px-4 py-2 text-center">#</th>
                                <th className="px-4 py-2 text-center">Name</th>
                                <th className="px-4 py-2 text-center">Email</th>
                                <th className="px-4 py-2 text-center">Role</th>
                                <th className="px-4 py-2 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-center divide-y divide-gray-200">
                            {
                                users?.map((user,index) => (
                                    <tr key={user._id} className="hover:bg-gray-100 transition-colors duration-200">
                                        <td className="px-4 py-4 text-center">{index + 1}</td>
                                        <td className="px-4 py-4 text-center">{user.name}</td>
                                        <td className="px-4 py-4 text-center">{user.email}</td>
                                        <td className="px-4 py-4 text-center">
                                            { user.role === 'admin' ? <span className="font-bold text-accent">Admin</span> : <button onClick={() => handleMakeAdmin(user)} className="bg-accent hover:bg-[#292929] duration-500 text-white p-2 rounded-md mx-2">
                                                <FaUsers className="text-2xl" />
                                            </button>}
                                        </td>
                                        <td className="px-4 py-4 text-center">
                                            <button onClick={() => handleDeleteUser(user._id)} className="text-red-600 hover:text-red-800 mx-2">
                                                <FaTrashAlt className="text-2xl" />
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

export default AllUsers;