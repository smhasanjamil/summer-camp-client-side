import { useQuery } from "@tanstack/react-query";


const ManageClasses = () => {

    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('https://lingoz-server-side.vercel.app/classes')
        return res.json();
    })

    console.log(classes);

    return (
        <div>
            <h3 className="text-3xl font-bold">Total Classes : {classes.length}</h3>

            <div>

                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class Image</th>
                                <th>Class name</th>
                                <th>Instructor name</th>
                                <th>Instructor email</th>
                                <th>Available seats</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            {classes.map((newClass, index) => (
                                <>

                                    <tr>
                                        <th>
                                            <th>{index + 1}</th>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={newClass.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{newClass.className}</td>
                                        <td>{newClass.instructorName}</td>
                                        <td>{newClass.email}</td>
                                        <td>{newClass.availableSeat}</td>
                                        <td>${newClass.price}</td>
                                        {/* <td>{newClass.status}</td> */}
                                        {/* <td>
                                            <div className="flex flex-row gap-2">
                                                <button className="btn btn-neutral">{newClass.status}</button>
                                                <button className="btn btn-neutral">{newClass.status}</button>
                                                <button className="btn btn-neutral">{newClass.status}</button>
                                            </div>
                                        </td> */}
                                        <td>
                                            <div className="flex flex-row gap-2">
                                                <button className={`btn ${newClass.status === 'pending' ? 'btn-disabled' : 'btn-primary'}`} disabled={newClass.status === 'pending'}>Pending</button>
                                                <button className={`btn ${newClass.status === 'approved' ? 'btn-disabled' : 'btn-primary'}`} disabled={newClass.status === 'approved'}>Approve</button>
                                                <button className={`btn ${newClass.status === 'denied' ? 'btn-disabled' : 'btn-primary'}`} disabled={newClass.status === 'denied'}>Deny</button>
                                            </div>
                                        </td>



                                    </tr>
                                </>
                            ))}



                        </tbody>


                    </table>
                </div>

            </div>

        </div >
    );
};

export default ManageClasses;