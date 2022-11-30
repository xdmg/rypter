import './Post.css';
import HeartIcon from "@heroicons/react/24/outline/esm/HeartIcon";
import {LifebuoyIcon} from "@heroicons/react/24/solid";
import {PaperAirplaneIcon} from "@heroicons/react/24/outline";
import Comment from "./Comment";

const Post = ({post}) => {
    let containsImage = true;
    let comments = [1,2,3];
    return (
        <div className="post">
            <div className="post-content">
                <div className="post-content-info">
                    <button className="post-content-info-button ml-5"><HeartIcon className="w-6 m-auto"/></button>
                    <div className="post-content-text ml-4">
                        <p className="post-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
                            metus a velit fringilla semper. Curabitur porttitor mattis rutrum. Fu</p>
                        <p className="post-author">by <b>username</b></p>
                    </div>
                    <button className="post-content-board-button ml-16 mr-9">
                        <span className="post-content-board-button-text">b/<b>home</b></span>
                        <span className="post-content-board-button-icons"><LifebuoyIcon className="w-6 m-auto"/></span>
                    </button>
                </div>
                <div className="post-content-data">
                    <div className="post-content-data-text pl-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum sit amet quam vitae
                        suscipit. Nulla ac libero commodo, porta purus vitae, eleifend magna. Proin iaculis convallis
                        lorem a rhoncus. Etiam consectetur dignissim elit, at vestibulum nisl vestibulum nec.
                        Pellentesque sit amet felis eleifend, dapibus erat a, tincidunt arcu. Quisque dui nulla,
                        hendrerit at accumsan ac, rutrum sit amet libero. Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices posuere cubilia curae; Mauris nec quam lectus. Orci varius natoque penatibus
                        et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in
                        faucibus orci luctus et ultrices posuere cubilia curae;
                    </div>
                    {(containsImage && <div className="post-content-data-image mt-5">
                        <img
                            src="https://img.ifunny.co/images/5a971f42fb19b4a9b4d10490f25b5df73891a363a3689cc48cf800312095f739_3.jpg"
                            alt=""/>
                    </div>)}
                </div>
            </div>
            <div className="post-comments">
                <div className="post-input">
                    <div className="post-comments-input flex justify-center items-center">
                        <form action="" className="w-full flex items-center text-gray">
                            <button type="submit"><PaperAirplaneIcon className="sendIcon h-7 w-7 mr-3"/></button>
                            <input type=""
                                   className="post-comments-input-bar bg-transparent border-none outline-none text-gray"
                                   placeholder=""/>
                        </form>
                    </div>
                </div>
                <div className="post-comments-map">
                    <div className="post-comments-block">
                    {
                        comments.map((comment) => (
                            <Comment comment={comment} />
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
