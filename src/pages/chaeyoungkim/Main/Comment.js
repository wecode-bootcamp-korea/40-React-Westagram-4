import React from 'react';

const Comment = props => {
    return (
        <div>
            <li className="commentItem">
                <span className="commentItemText">{props.list}</span>
                <button className="commentItemDeleteBtn">x</button>
            </li>
        </div>
    );
};

export default Comment;
