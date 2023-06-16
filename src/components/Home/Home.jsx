import Instructors from "../Instructors/Instructors";
import Classes from "./Classes/Classes";


const Home = () => {
    return (
        <div className="px-4 md:px-4 lg:px-2 xl:px-0 mt-16">
            <Instructors />
            <Classes />
        </div>
    );
};

export default Home;