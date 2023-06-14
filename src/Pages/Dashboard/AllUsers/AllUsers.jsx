import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://lingoz-server-side.vercel.app/users')
        return res.json();
    })

    // Handle delete
    const handleDelete = (user) => {
        console.log('Clicked', user);
    }

    // Handle MAke Admin
    const handleMakeAdmin = (user) => {
        fetch(`https://lingoz-server-side.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is now Admin!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div>
            <h3 className="text-3xl font-bold">Total User : {users.length}</h3>
            <div className="overflow-x-auto w-full">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className="flex flex-row gap-2">
                                    {user.role === 'admin' ? 'admin' :
                                        <>
                                            <button className="btn btn-success btn-sm">Make Instructor</button>
                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-success btn-sm">Make Admin</button>
                                        </>
                                    }

                                </td>
                                <td><button onClick={() => handleDelete(user)} className="btn btn-error btn-sm">delete</button></td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;