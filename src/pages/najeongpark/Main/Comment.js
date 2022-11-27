import React from 'react';

const Comment = props => {
    console.log(props);

    return (
        <ul className="commentList">
            <li>
                <strong>{props.userName}</strong>
                <span>{props.list}</span>
                <div className="commentIcons">
                    <i className="emptyHeart far fa-heart" />
                    <i className="fa-regular fa-trash-can" />
                </div>
            </li>
        </ul>
    );
};

export default Comment;
