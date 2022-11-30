import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import '../Main/Main.scss';
import '../../../styles/mixin.scss';

const Feed = props => {
    const feeds = props.feeds;
    const [comment, setComment] = useState('');
    const userName = 'p_naajj';
    const [commentList, setCommentList] = useState([]);

    const commentChk = e => setComment(e.target.value);

    const enterSave = e => {
        if (e.keyCode === 13) {
            commentSave();
        }
    };

    const commentSave = () => {
        const commentArr = [...commentList];
        commentArr.push(comment);
        setCommentList(commentArr);
        setComment('');
    };

    const deleteComment = idx => {
        setCommentList(commentList => {
            return commentList.filter((_, index) => index !== idx);
        });
    };

    return (
        <div className="wrapFeed" key={feeds.id}>
            <div className="feedNav">
                <img
                    className="profileImg"
                    src={feeds.profileImage}
                    alt="pongImg"
                />
                <span>{feeds.userId}</span>
                <img
                    className="more"
                    src="../../images/najeongpark/more.png"
                    alt="moreImg"
                />
            </div>
            <div className="mainImage">
                <img src={feeds.mainImage} alt="pong" />
            </div>
            <div className="icons">
                <img src="../../images/najeongpark/heart.png" alt="heartImg" />
                <img src="../../images/najeongpark/chat.png" alt="chatImg" />
                <img
                    src="../../images/najeongpark/upload.png"
                    alt="uploadImg"
                />
                <img src="../../images/najeongpark/label.png" alt="labelImg" />
            </div>
            <div className="articleBottom">
                <div className="like">
                    <img src={feeds.likeUserImg} alt="puppy3" />
                    <span>
                        <a>{feeds.likeUser}</a>님 <a>{feeds.likeCnt}</a>이
                        좋아합니다
                    </span>
                </div>
                <span>
                    <a>{feeds.userId}</a>&nbsp; {feeds.mainContent}
                </span>
                {commentList.map((list, idx) => {
                    return (
                        <Comment
                            userName={userName}
                            list={list}
                            key={idx}
                            idx={idx}
                            deleteComment={deleteComment}
                        />
                    );
                })}
                <p style={{ color: '#bdbaba' }}>42분전</p>
            </div>
            <div className="addComment">
                <input
                    value={comment}
                    onChange={commentChk}
                    onKeyDown={enterSave}
                    className="comment"
                    type="text"
                    placeholder="댓글 달기..."
                />
                <button
                    className={comment ? 'unSubmitBtn' : 'submitBtn'}
                    onClick={commentSave}
                    disabled={!comment}
                >
                    게시
                </button>
            </div>
        </div>
    );
};

export default Feed;
