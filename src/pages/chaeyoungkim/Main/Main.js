import React, { useState, useEffect } from 'react';
import './Main.scss';
// import Comment from './Comment';
import Feed from './Feed';
import { FOOTER_LIST } from './Footer';

function Main() {
    const [feedsInfoList, setFeedsInfoList] = useState([]);
    // const [comments, setComments] = useState([]);
    // const [commentInput, setCommentInput] = useState('');

    // const handleChange = e => {
    //     setCommentInput(e.target.value);
    // };
    // const enterComment = e => {
    //     if (e.key === 'Enter' && commentInput !== '') {
    //         addComment();
    //         e.target.value = '';
    //     }
    // };

    // const addComment = () => {
    //     setComments([...comments, commentInput]);
    //     setCommentInput('');
    // };

    useEffect(() => {
        fetch('/data/feedInfoList.json', { method: 'GET' })
            .then(response => response.json())
            .then(result => {
                setFeedsInfoList(result);
            });
    }, []);

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
                    {feedsInfoList.map(feeds => {
                        return <Feed feeds={feeds} key={feeds.id} />;
                    })}
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
                        <ul className="westaScript">
                            {FOOTER_LIST.map(footerList => {
                                return (
                                    <li key={footerList.id}>
                                        {footerList.footerName}
                                    </li>
                                );
                            })}
                        </ul>
                    </footer>
                </div>
            </div>
        </>
    );
}

export default Main;
