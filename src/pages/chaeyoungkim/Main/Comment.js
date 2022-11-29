import React from 'react';

const Comment = props => {
    console.log(props);
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
