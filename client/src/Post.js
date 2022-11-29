import './Post.css';
import HeartIcon from "@heroicons/react/24/outline/esm/HeartIcon";
import {LifebuoyIcon} from "@heroicons/react/24/solid";

const Post = ({post}) => {
    return (
        <div className="post">
            <div className="post-content">
                    <div className="post-content-info">
                        <button className="post-content-info-button ml-5"><HeartIcon className="w-6 m-auto"/></button>
                        <div className="post-content-text ml-4">
                            <p className="post-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel metus a velit fringilla semper. Curabitur porttitor mattis rutrum. Fu</p>
                            <p className="post-author">by <b>username</b></p>
                        </div>
                        <button className="post-content-board-button ml-5">
                            <span className="post-content-board-button-text">b/<b>home</b></span>
                            <span className="post-content-board-button-icons"><LifebuoyIcon className="w-6 m-auto"/></span>
                        </button>
                    </div>

                </div>
            <div className="post-comments">

            </div>
        </div>
    );
};

export default Post;
