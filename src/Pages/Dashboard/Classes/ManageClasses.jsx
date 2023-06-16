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

        </div>
    );
};

export default ManageClasses;