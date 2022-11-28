import React, { useState } from 'react';
import './Main.scss';

function Main() {
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
        //spread 연산자 이용 댓글 추가
        setComments([...comments, commentInput]);
        setCommentInput('');
    };

    const commentItems = comments.map(el => {
        return (
            <li key={el} className="commentItem">
                <span className="commentItemText">{el}</span>
                <button className="commentItemDeleteBtn">x</button>
            </li>
        );
    });
    return (
        <>
            <nav>
                <div className="navContainer">
                    <div className="navLogo">
                        <img
                            className="logoImg"
                            src="/images/chaeyoungkim/logo.png"
                            alt="로고"
                        />
                        <div className="vl" />
                        <span className="logoBrand">Westagram</span>
                    </div>
                    <div className="navSearchBox">
                        <input id="search" type="text" placeholder="검색" />
                    </div>
                    <div className="navIcon">
                        <img
                            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                            alt="탐색"
                        />
                        <img
                            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                            alt="하트"
                        />
                        <img
                            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                            alt="마이페이지"
                        />
                    </div>
                </div>
            </nav>

            <div className="main">
                <div className="feeds">
                    {/* <!-- article --> */}
                    <article>
                        <header>
                            <div className="profile">
                                <div className="profileImageUserID">
                                    <img
                                        className="profileImage"
                                        src="/images/chaeyoungkim/user.png"
                                        alt="프로필 이미지"
                                    />
                                    <span className="mainArtcleUserID">
                                        chaeyoung.k
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
                                src="/images/chaeyoungkim/img.jpeg"
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
                                    <span className="pointSpan">
                                        외 1,234명
                                    </span>
                                    이 좋아합니다
                                </p>
                            </div>
                            <div className="description">
                                <span className="pointSpanUserID">
                                    chaeyoung.k
                                </span>
                                <span className="descriptionSpan">한강~</span>
                            </div>
                        </div>

                        <div className="comment">
                            <ul className="commentList">
                                <li className="commentItem">
                                    <span className="commentItemText">
                                        ddddddd
                                    </span>
                                    <button className="commentItemDeleteBtn">
                                        x
                                    </button>
                                </li>
                            </ul>
                            {commentItems}

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
                </div>

                <div className="mainRight">
                    <div className="myProfile">
                        <img
                            className="pic"
                            src="/images/chaeyoungkim/user.png"
                            alt="프로필 이미지"
                        />
                        <div>
                            <span className="userID pointSpan">myID</span>
                            <span className="subSpan">user name</span>
                        </div>
                    </div>

                    <div className="sectionStory">
                        <div className="menuTitle">
                            <span className="subTitle">스토리</span>
                            <span className="findMore">모두 보기</span>
                        </div>
                        <ul className="storyList">
                            <li>
                                <div className="gradientWrap">
                                    <img
                                        className="imgProfile story"
                                        src="/images/chaeyoungkim/user.png"
                                        alt="프로필 이미지"
                                    />
                                </div>
                                <div className="profileText">
                                    <span className="userID pointSpan">
                                        wecode_bootcamp
                                    </span>
                                    <span className="subSpan">10분 전</span>
                                </div>
                            </li>
                            <li>
                                <div className="gradientWrap">
                                    <img
                                        className="imgProfile story"
                                        src="/images/chaeyoungkim/user.png"
                                        alt="프로필 이미지"
                                    />
                                </div>
                                <div className="profileText">
                                    <span className="userID pointSpan">
                                        wecode_bootcamp
                                    </span>
                                    <span className="subSpan">10분 전</span>
                                </div>
                            </li>
                            <li>
                                <div className="gradientWrap">
                                    <img
                                        className="imgProfile story"
                                        src="/images/chaeyoungkim/user.png"
                                        alt="프로필 이미지"
                                    />
                                </div>
                                <div className="profileText">
                                    <span className="userID pointSpan">
                                        wecode_bootcamp
                                    </span>
                                    <span className="subSpan">10분 전</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* main right */}

                    <div className="sectionRecommend">
                        <div className="menuTitle">
                            <span className="subTitle">회원님을 위한 추천</span>
                            <span className="findMore">모두 보기</span>
                        </div>
                        <ul className="recommendList">
                            <li>
                                <div className="recommendFriendProfile">
                                    <img
                                        className="imgProfile"
                                        src="/images/chaeyoungkim/user.png"
                                        alt="프로필 이미지"
                                    />
                                    <div className="profileText">
                                        <span className="userID pointSpan">
                                            wecode_bootcamp
                                        </span>
                                        <span className="subSpan">
                                            aaa님이 팔로우합니다
                                        </span>
                                    </div>
                                </div>
                                <span className="btnFollow">팔로우</span>
                            </li>
                            <li>
                                <div className="recommendFriendProfile">
                                    <img
                                        className="img-profile"
                                        src="/images/chaeyoungkim/user.png"
                                        alt="프로필 이미지"
                                    />
                                    <div className="profileText">
                                        <span className="userID pointSpan">
                                            wecode_bootcamp
                                        </span>
                                        <span className="subSpan">
                                            aaa님이 팔로우합니다
                                        </span>
                                    </div>
                                </div>
                                <span className="btnFollow">팔로우</span>
                            </li>
                            <li>
                                <div className="recommendFriendProfile">
                                    <img
                                        className="imgProfile"
                                        src="/images/chaeyoungkim/user.png"
                                        alt="프로필 이미지"
                                    />
                                    <div className="profileText">
                                        <span className="userID pointSpan">
                                            wecode_bootcamp
                                        </span>
                                        <span className="subSpan">
                                            aaa님이 팔로우합니다
                                        </span>
                                    </div>
                                </div>
                                <span className="btnFollow">팔로우</span>
                            </li>
                        </ul>
                    </div>

                    <footer>
                        <p className="instaScript">
                            소개 · 도움말 · 홍보 센터 · API · 채용 정보 ·
                            개인정보처리방침 ·
                            <br />
                            약관 · 위치 · 인기계정 · 해시태그 · 언어 <br />
                            <br />© 2022 INSTAGRAM FROM FACEBOOK
                        </p>
                    </footer>
                </div>
            </div>
        </>
    );
}

export default Main;
