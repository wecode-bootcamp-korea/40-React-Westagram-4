import { React, useState } from 'react';

const Comment = props => {
    const [like, setLike] = useState(false);

    //댓글 좋아요
    const likeComment = () => {
        like ? setLike(false) : setLike(true);
    };

    return (
        <ul className="commentList">
            <li>
                <strong>{props.userName}</strong>
                <span>{props.list}</span>
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
                        // onClick={props.deleteComment(props.idx)}로 작성하면 바로 함수를 실행시킨다는 뜻이 되기때문에 댓글이 작성 될 때마다 onClick이 일어나게됨.
                        onClick={() => props.deleteComment(props.idx)}
                    />
                </div>
            </li>
        </ul>
    );
};

export default Comment;
