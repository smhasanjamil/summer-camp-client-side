import { useEffect, useState } from "react";
import SingleInstructor from "./SingleInstructor";


const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('https://lingoz-server-side.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setInstructors(data);
            })
    }, []);

    // console.log(instructors);
    return (
        <div className="px-4 md:px-4 lg:px-2 xl:px-0 mt-16">
            <h3 className="text-center font-bold text-3xl my-24 title-styles">Instructor</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {instructors.map(instructor => <SingleInstructor instructor={instructor} key={instructor._id}></SingleInstructor>)}
            </div>

        </div>
    );
};

export default Instructors;