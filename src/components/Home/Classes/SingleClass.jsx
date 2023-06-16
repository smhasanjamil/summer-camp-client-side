import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";


const SingleClass = ({ newClasses }) => {
    const { _id, availableSeat, className, email, image, instructorName, price, status } = newClasses;
    const [, refetch] = useCart();
    const navigate = useNavigate();
    // console.log(newClasses);
    const { user } = useContext(AuthContext);
    // console.log(user);

    // Handle add to cart
    const handleAddToCart = (newClasses) => {
        console.log(newClasses);
        if (user && user.email) {
            const selectedItem = { classId: _id, className, price, email: user.email, image };
            fetch('https://lingoz-server-side.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedItem)
            })
                .then(res => res.json())
                .then(data => {
                    refetch();
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class Added to the cart!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'Warning',
                title: 'Please Log in to select courses',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/login');
        }
    }


    return (
        <div>

            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={newClasses.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{newClasses.className}</h2>
                    <p>Instructor : {newClasses.instructorName}</p>
                    <p>AvailableSeat : {newClasses.availableSeat}</p>
                    <p>Price : ${newClasses.price}</p>
                    <p>Email : {newClasses.email}</p>
                    <div className="card-actions">
                        <button onClick={() => handleAddToCart(newClasses)} className="btn gradient-button">Select Course</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleClass;