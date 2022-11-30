import './Feed.css';
import Post from "./Post";

const Feed = ({posts}) => {
    return (
        <div className="feed w-full">
            {
                posts.map((post) => (
                    <Post post={post} />
                ))
            }
        </div>
    );
};

export default Feed;