import React, { useState } from 'react';
import Comment from './Comment';

const Feed = props => {
    const feedsInfo = props.feeds;
    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState('');

    const handleChange = e => {
        setCommentInput(e.target.value);
    };
    const enterComment = e => {
        if (e.key === 'Enter' && commentInput !== '') {
            addComment();
            e.target.value = '';
        }
    };

    const addComment = () => {
        setComments([...comments, commentInput]);
        setCommentInput('');
    };

    return (
        <article>
            <header>
                <div className="profile">
                    <div className="profileImageUserID">
                        <img
                            className="profileImage"
                            src={feedsInfo.profileImage_url}
                            alt="프로필 이미지"
                        />

                        <span className="mainArticleUserID">
                            {feedsInfo.name}
                        </span>
                    </div>
                    <div className="profileIcon">
                        <img
                            className="moreIcon"
                            src="images/chaeyoungkim/more.png"
                            alt="more"
                        />
                    </div>
                </div>
            </header>
            <div className="mainImageBox">
                <img
                    className="mainImage"
                    src={feedsInfo.mainImage_url}
                    alt="main"
                />
            </div>
            <div className="iconsReact">
                <div className="iconsLeft">
                    <img
                        className="iconReact"
                        src="/images/chaeyoungkim/heart.png"
                        alt="하트"
                    />
                    <img
                        className="iconReact"
                        src="/images/chaeyoungkim/chat.png"
                        alt="말풍선"
                    />
                    <img
                        className="iconReact"
                        src="/images/chaeyoungkim/upload.png"
                        alt="업로드"
                    />
                </div>
                <div className="iconsRight">
                    <img
                        className="iconReact"
                        src="/images/chaeyoungkim/bookmark.png"
                        alt="북마크"
                    />
                </div>
            </div>

            <div className="reaction">
                <div className="likedPeople">
                    <img
                        className="userImage"
                        src="/images/chaeyoungkim/user.png"
                        alt="프로필 이미지"
                    />
                    <p>
                        <span className="pointSpan">we_code</span>님
                        <span className="pointSpan">외 1,234명</span>이
                        좋아합니다
                    </p>
                </div>
                <div className="description">
                    <span className="pointSpanUserID">chaeyoung.k</span>
                    <span className="descriptionSpan">
                        {feedsInfo.description}
                    </span>
                </div>
            </div>

            <div className="comment">
                {comments.map((item, index) => {
                    return <Comment list={item} key={index} />;
                })}

                <div className="commentWrite">
                    <input
                        className="inputComment"
                        type="text"
                        placeholder="댓글 달기..."
                        onKeyUp={enterComment}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="submitComment"
                        onClick={addComment}
                    >
                        게시
                    </button>
                </div>
            </div>
        </article>
    );
};

export default Feed;
