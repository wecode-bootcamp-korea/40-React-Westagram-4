import { React, useState } from 'react';

const Comment = props => {
    const { userName, list, idx, deleteComment } = props;
    const [like, setLike] = useState(false);

    const likeComment = () => {
        like ? setLike(false) : setLike(true);
    };

    return (
        <ul className="commentList">
            <li>
                <strong>{userName}</strong>
                <span>{list}</span>
                <div className="commentIcons">
                    <i
                        className={
                            like
                                ? 'redHeart fa-solid fa-heart'
                                : 'emptyHeart far fa-heart'
                        }
                        onClick={() => likeComment()}
                    />
                    <i
                        className="fa-regular fa-trash-can"
                        onClick={() => deleteComment(idx)}
                    />
                </div>
            </li>
        </ul>
    );
};

export default Comment;
