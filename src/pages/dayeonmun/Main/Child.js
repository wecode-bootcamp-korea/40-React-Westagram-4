import React from 'react';
import './Main.scss';

const Child = props => {
    return (
        <ul>
            <li>
                <span>{props.listItem}</span>
            </li>
        </ul>
    );
};

export default Child;
