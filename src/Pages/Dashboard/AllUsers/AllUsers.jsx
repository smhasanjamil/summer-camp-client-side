import { useQuery } from "@tanstack/react-query";


const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://lingoz-server-side.vercel.app/users')
        return res.json();
    })

    // Handle delete
    const handleDelete = () => {
        console.log('Clicked');
    }
    return (
        <div>
            <h3 className="text-3xl font-bold">Total User : {users.length}</h3>
            <div className="overflow-x-auto w-full">
                <table className="table table-zebra">
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
                                    <button className="btn btn-primary btn-sm">Make Instructor</button>
                                    <button className="btn btn-primary btn-sm">Make Admin</button>
                                </td>
                                <td><button onClick={handleDelete} className="btn btn-error btn-sm">delete</button></td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;