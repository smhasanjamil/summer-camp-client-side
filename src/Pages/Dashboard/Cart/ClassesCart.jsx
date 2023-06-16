import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { Link } from "react-router-dom";


const ClassesCart = () => {
    const [cart, refetch] = useCart();

    // Total Price
    const priceSum = cart.reduce((sum, item) => item.price + sum, 0);


    const handleDelete = data => {

        fetch(`https://lingoz-server-side.vercel.app/carts/${data._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result.deleteCount > 0) {
                    console.log(result);
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })

    }


    return (
        <div>

            {/* <h3 className=" text-2xl font-bold">Total Selected class : {cart.length}</h3>
            <h3 className=" text-2xl font-bold">Total Price : ${priceSum}</h3> */}

            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <div>
                        <h2 className="card-title">My Cart</h2>
                        <h3 className=" text-2xl font-bold">Total Selected class : {cart.length}</h3>
                        <h3 className=" text-2xl font-bold">Total Price : ${priceSum}</h3>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><Link to='/dashboard/payment'>Pay Now</Link></button>
                        </div>
                    </div>



                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Image</th>
                                        <th>Class Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((data, index) =>


                                        <tr key={data._id}>
                                            <th>{index + 1}</th>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={data.image} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{data.className}</td>
                                            <td>${data.price}</td>
                                            <th>
                                                <button onClick={() => handleDelete(data)} className="btn btn-primary btn-xs">Delete</button>
                                            </th>
                                        </tr>

                                    )}


                                </tbody>

                            </table>
                        </div>
                    </div>






                </div>
            </div>





        </div>
    );
};

export default ClassesCart;