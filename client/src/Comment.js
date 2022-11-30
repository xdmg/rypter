import './Comment.css';
import {AtSymbolIcon} from "@heroicons/react/20/solid";

const Comment = ({comment}) => {

    return (
        <div className="comment">
            <div className="comment-header">
                <div className="comment-header-user">
                   <AtSymbolIcon className="w-7"/>
                    <p>username</p>
                </div>
                <div className="comment-header-date">
                    <span>on 01/12/2022</span>
                </div>
            </div>
            <div className="comment-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum sit amet quam vitae suscipit. Nulla</p>
            </div>
        </div>
    )
}

export default Comment;