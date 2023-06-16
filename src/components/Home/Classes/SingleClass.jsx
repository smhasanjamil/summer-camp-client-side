

const SingleClass = ({ newClasses }) => {
    console.log(newClasses);
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
                        <button className="btn gradient-button">Select Course</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleClass;