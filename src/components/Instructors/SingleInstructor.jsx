

const SingleInstructor = ({ instructor }) => {
    console.log(instructor);
    return (
        <>

            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={instructor.photoURL} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{instructor.name}</h2>
                    <p>Email : {instructor.email}</p>
                    <div className="card-actions">
                        <button className="btn gradient-button">See All Course</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SingleInstructor;