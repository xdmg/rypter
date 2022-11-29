import './Feed.css';
import Post from "./Post";

const Feed = ({posts}) => {
    return (
        <div className="Feed">
            {
                posts.map((post) => (
                    <Post post={post} />
                ))
            };
        </div>
    );
};

export default Feed;