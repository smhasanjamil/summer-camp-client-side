import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";


const AddClasses = () => {
    const { user } = useContext(AuthContext);

    // Handle Add Class
    const handleClassAdd = (event) => {
        event.preventDefault();
        const form = event.target;
        const className = form.className.value;
        const instructorName = form.instructorName.value;
        const classImage = form.classImage.files[0];
        const email = form.email.value;
        const availableSeat = form.availableSeat.value;
        const price = form.price.value;
        const status = form.status.value;
        // const classes = { className, instructorName, classImage, email, availableSeat, price, status };
        // console.log(classes);

        // Image upload
        const formData = new FormData();
        formData.append('image', classImage);

        // console.log("My img",formData);

        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGB_KEY}`
        fetch(url, {
            method: 'POST',
            body: formData,
        }).then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const imgURL = imgData.data.display_url;
                    const classes = { className, instructorName, image: imgURL, email, availableSeat: parseFloat(availableSeat), price: parseFloat(price), status }
                    console.log(classes);


                    // Add classes to db
                    fetch('https://lingoz-server-side.vercel.app/classes', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(classes),
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            // Alert
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Class Added!',
                                showConfirmButton: false,
                                timer: 1500
                            })

                            form.reset();

                        })


                }
                // const imageURL = imgData.data.display_url;
                // const classes = { className, instructorName, imageURL, email, availableSeat, price, status };




            })
            .catch(error => {
                console.log(error.message);
            })
        return

    }

    return (
        <div>

            <h3 className="text-3xl font-bold">Add Classes</h3>

            <div>


                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 my-12">
                    <form onSubmit={handleClassAdd} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <input type="text" name="className" placeholder="Class Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <input type="text" name="instructorName" defaultValue={user.displayName} placeholder="Instructor Name" className="input input-bordered" readOnly required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Image</span>
                            </label>
                            <input type="file" name="classImage" className="file-input file-input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user.email} placeholder="Email" className="input input-bordered" readOnly required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Seat</span>
                            </label>
                            <input type="number" name="availableSeat" placeholder="Available Seat" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name="price" placeholder="Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="hidden" name="status" value="pending" className="input input-bordered"></input>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary gradient-button">Add Class</button>
                        </div>
                    </form>
                </div>


            </div>

        </div>
    );
};

export default AddClasses;