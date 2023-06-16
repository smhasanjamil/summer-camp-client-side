import Instructors from "../Instructors/Instructors";
import Classes from "./Classes/Classes";
import Hero from "./Hero";
import UpcommingCourse from "./UpcommingCourse";


const Home = () => {
    return (
        <div className="px-4 md:px-4 lg:px-2 xl:px-0 mt-16">
            <Hero />
            <Instructors />
            <Classes />
            <UpcommingCourse />

        </div>
    );
};

export default Home;