import React, { useState } from 'react';
import '../Main/Main.scss';
import '../../../styles/mixin.scss';

const Main = () => {
    const [comment, setComment] = useState('');
    const [isBtnActive, setIsBtnActive] = useState(false);

    const commentChk = () => {
        comment ? setIsBtnActive(true) : setIsBtnActive(false);
    };

    return (
        <>
            {/* navbar */}
            <div className="nav">
                <div className="titleLeft">
                    <img
                        className="instaIcon"
                        src="../../images/najeongpark/instagram.png"
                        alt="instaImage"
                    />
                    <h1 className="title">westagram</h1>
                </div>
                <div className="searchBar">
                    <input type="text" placeholder="검색" />
                </div>
                <div className="titleRight">
                    <img
                        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                        alt="icons"
                    />
                    <img
                        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                        alt="icons"
                    />
                    <img
                        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                        alt="icons"
                    />
                </div>
            </div>

            {/* main */}
            <main className="main">
                <article>
                    <div className="wrapFeed">
                        <div className="feedNav">
                            <div className="profileImg" />
                            <span>pongpong</span>
                            <img
                                src="../../images/najeongpark/more.png"
                                alt="moreImg"
                            />
                        </div>
                        <div className="mainImage">
                            <img
                                src="../../images/najeongpark/pong.jpg"
                                alt="pong"
                            />
                        </div>
                        <div className="icons">
                            <img
                                src="../../images/najeongpark/heart.png"
                                alt="heartImg"
                            />
                            <img
                                src="../../images/najeongpark/chat.png"
                                alt="chatImg"
                            />
                            <img
                                src="../../images/najeongpark/upload.png"
                                alt="uploadImg"
                            />
                            <img
                                src="../../images/najeongpark/label.png"
                                alt="labelImg"
                            />
                        </div>
                        <div className="articleBottom">
                            <div className="like">
                                <img
                                    src="../../images/najeongpark/puppy3.jpg"
                                    alt="puppy3"
                                />
                                <span>
                                    <a>wecode_najeong</a>님 <a>외 120명</a>이
                                    좋아합니다
                                </span>
                            </div>
                            <span>
                                <a>pongpong</a> &nbsp; 누나가 인생샷 찍어 죠따🫶
                            </span>
                            <ul className="commentList"></ul>
                            <p style={{ color: '#bdbaba' }}>42분전</p>
                        </div>
                        <div className="addComment">
                            <input
                                className="comment"
                                type="text"
                                placeholder="댓글 달기..."
                                onChange={e => {
                                    setComment(e.target.value);
                                }}
                                onKeyUp={commentChk}
                            />
                            <button
                                className={
                                    isBtnActive ? 'unSubmitBtn' : 'submitBtn'
                                }
                            >
                                게시
                            </button>
                        </div>
                    </div>
                </article>
                {/* aside */}
                <aside>
                    <div className="asideRight">
                        <div className="myProfile">
                            <img
                                src="../../images/najeongpark/puppy3.jpg"
                                alt="puppy3"
                            />
                            <div className="introduce">
                                <p>wecode_najeong</p>
                                <p>Wecode | 40기</p>
                            </div>
                        </div>
                        <div className="storyTab">
                            <div className="storyTop">
                                <span style={{ color: '#bdbaba' }}>스토리</span>
                                <span>모두보기</span>
                            </div>
                            <div className="storyBottom">
                                <div className="storyIcon">
                                    <img
                                        src="../../../images/najeongpark/storyPuppy1.jpg"
                                        alt="storyPuppy1"
                                    />
                                    <div className="introduce">
                                        <p>_we____</p>
                                        <p>16분 전</p>
                                    </div>
                                </div>
                                <div className="storyIcon">
                                    <img
                                        src="../../images/najeongpark/storyPuppy2.jpg"
                                        alt="storyPuppy2"
                                    />
                                    <div className="introduce">
                                        <p>iwantsnack</p>
                                        <p>3시간 전</p>
                                    </div>
                                </div>
                                <div className="storyIcon">
                                    <img
                                        src="../../images/najeongpark/storyPuppy3.jpg"
                                        alt="storyPuppy3"
                                    />
                                    <div className="introduce">
                                        <p>love__human</p>
                                        <p>16시간 전</p>
                                    </div>
                                </div>
                                <div className="storyIcon">
                                    <img
                                        src="../../images/najeongpark/storyPuppy4.jpg"
                                        alt="storyPuppy4"
                                    />
                                    <div className="introduce">
                                        <p>go_home</p>
                                        <p>16분 전</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="recommend">
                            <div className="recommendTop">
                                <span style={{ color: '#bdbaba' }}>
                                    회원님을 위한 추천
                                </span>
                                <span>모두보기</span>
                            </div>
                            <div className="recommendBottom">
                                <div className="recommendIcon">
                                    <img
                                        src="../../images/najeongpark/otherUser1.jpg"
                                        alt="otherUser1"
                                    />
                                    <div className="otherUser">
                                        <p>daengZZang</p>
                                        <p className="recommendWord">
                                            iwantsnack님 외 2명이 팔로우합니다.
                                        </p>
                                    </div>
                                    <span>팔로우</span>
                                </div>
                                <div className="recommendIcon">
                                    <img
                                        src="../../images/najeongpark/otherUser2.jpg"
                                        alt="otherUser2"
                                    />
                                    <div className="otherUser">
                                        <p>ilovehome</p>
                                        <p className="recommendWord">
                                            aaaaaa 외 12명이 팔로우합니다.
                                        </p>
                                    </div>
                                    <span>팔로우</span>
                                </div>
                                <div className="recommendIcon">
                                    <img
                                        src="../../images/najeongpark/otherUser3.jpg"
                                        alt="otherUser3"
                                    />
                                    <div className="otherUser">
                                        <p>ppppppp</p>
                                        <p className="recommendWord">
                                            love__human 외 6명이 팔로우합니다.
                                        </p>
                                    </div>
                                    <span>팔로우</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </main>
        </>
    );
};

export default Main;
