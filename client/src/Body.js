import './Body.css';
import Feed from "./Feed";
import Sidebar from "./Sidebar";

const Body = () => {
    return (
        <div className="body w-full h-full">
            <Feed posts={[1,2,3]}/>
            <Sidebar />
        </div>
    );
}

export default Body;