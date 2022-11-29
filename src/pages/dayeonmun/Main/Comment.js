import React from 'react';
import './Main.scss';
import { useState } from 'react';

const Comment = () => {
    const [artists, setArtists] = useState([]);

    return (
        <div>
            <ul className="comments">
                <li>
                    <span>
                        <b>wecode</b>
                    </span>
                    <span> 우와~~</span>
                </li>
                <li>
                    <span>
                        <b>wecode</b>
                    </span>
                    <span> 올림픽공원 예쁘다😀</span>
                </li>
            </ul>
        </div>
    );
};

export default Comment;
