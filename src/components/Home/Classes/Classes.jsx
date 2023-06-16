import { useEffect, useState } from "react";
import SingleClass from "./SingleClass";


const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('https://lingoz-server-side.vercel.app/classes/status/approved')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setClasses(data);
            })
    }, []);
    // console.log(classes);
    return (
        <div className="px-4 md:px-4 lg:px-2 xl:px-0 mt-16">
            <h3 className="text-center font-bold text-3xl my-24 title-styles">Popular Classes</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {classes.map(newClasses => <SingleClass key={newClasses._id} newClasses={newClasses} />)}
            </div>

        </div>
    );
};



export default Classes;