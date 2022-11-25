/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Main.scss';

function Main() {
    return (
        <>
            {/* navigation */}
            <div className="navbar">
                <div className="topLogo">
                    <img src="/images/dayeonmun/logo.png" alt="logo" />
                    <span>Westgram</span>
                </div>
                <div className="search">
                    <input type="text" placeholder="검색" />
                </div>
                <div className="topIcon">
                    <img src="/images/dayeonmun/explore.png" alt="explore" />
                    <img src="/images/dayeonmun/heart.png" alt="heart" />
                    <img src="/images/dayeonmun/profile.png" alt="profile" />
                </div>
            </div>

            {/* main */}
            <main>
                <div className="feeds">
                    <article>
                        <header>
                            <div>
                                <img
                                    className="profilePhoto"
                                    src="/images/dayeonmun/dayeonProfile.jpg"
                                    alt="profilephoto"
                                />
                                <span>mundayeon_</span>
                            </div>
                            <img
                                className="morePhoto"
                                src="/images/dayeonmun/more.png"
                                alt="more"
                            />
                        </header>
                        <img
                            className="feedPhoto"
                            src="/images/dayeonmun/feedimage.jpg"
                            alt="feedimage"
                        />
                        <div className="icon">
                            <img
                                src="/images/dayeonmun/heart.png"
                                alt="heart"
                            />
                            <img src="/images/dayeonmun/chat.png" alt="chat" />
                            <img src="/images/dayeonmun/send.png" alt="send" />
                            <img
                                className="saveicon"
                                src="/images/dayeonmun/save.png"
                                alt="save"
                            />
                        </div>
                        <div className="like">
                            <img
                                src="/images/dayeonmun/dayeonProfile.jpg"
                                alt="profilephoto"
                            />
                            <span>mundayeon_님 외 100명이 좋아합니다</span>
                        </div>

                        {/* 댓글리스트 */}
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
                        <p className="ago">1시간 전</p>
                        <section className="comment">
                            <form>
                                <input
                                    className="commentText"
                                    type="text"
                                    placeholder="댓글달기 ..."
                                />
                                <button
                                    className="commentSubmit"
                                    disabled
                                    type="submit"
                                >
                                    게시
                                </button>
                            </form>
                        </section>
                    </article>
                </div>

                {/* main right */}
                <aside className="mainRight">
                    {/* box1 */}
                    <div className="rightProfile">
                        <div className="myProfile">
                            <img
                                src="/images/dayeonmun/dayeonProfile.jpg"
                                alt="profilephoto"
                            />
                        </div>
                        <div className="myName">
                            <div className="myId">mundayeon_</div>
                            <div className="introduce">
                                안녕하세요, 문다연입니다😉
                            </div>
                        </div>
                    </div>
                    {/* box2 */}
                    <div className="story">
                        <div className="storyText">
                            <span className="storyTextLeft">스토리</span>
                            <span className="storyTextRight">모두 보기</span>
                        </div>
                        <div className="storyFeed">
                            <div className="storyList">
                                <div className="storyImage">
                                    <img
                                        className="story1"
                                        src="/images/dayeonmun/dayeonProfile.jpg"
                                        alt="storyProfile"
                                    />
                                </div>
                                <div className="storyName">
                                    <div className="storyId">mundayeon_</div>
                                    <div className="storyAgo">20분 전</div>
                                </div>
                            </div>
                            <div className="storyList">
                                <div className="storyImage">
                                    <img
                                        className="story2"
                                        src="/images/dayeonmun/dayeonProfile.jpg"
                                        alt="storyProfile"
                                    />
                                </div>
                                <div className="storyName">
                                    <div className="storyId">mundayeon_</div>
                                    <div className="storyAgo">20분 전</div>
                                </div>
                            </div>
                            <div className="storyList">
                                <div className="storyImage">
                                    <img
                                        className="story3"
                                        src="/images/dayeonmun/dayeonProfile.jpg"
                                        alt="storyProfile"
                                    />
                                </div>
                                <div className="storyName">
                                    <div className="storyId">mundayeon_</div>
                                    <div className="storyAgo">20분 전</div>
                                </div>
                            </div>
                            <div className="storyList">
                                <div className="storyImage">
                                    <img
                                        className="story4"
                                        src="/images/dayeonmun/dayeonProfile.jpg"
                                        alt="storyProfile"
                                    />
                                </div>
                                <div className="storyName">
                                    <div className="storyId">mundayeon_</div>
                                    <div className="storyAgo">20분 전</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* box3 */}
                    <div className="recommend">
                        <div className="recommendText">
                            <span className="recommendTextLeft">
                                회원님을 위한 추천
                            </span>
                            <span className="recommendTextRight">
                                모두 보기
                            </span>
                        </div>
                        <div className="recommendFeed">
                            <div className="recommendList">
                                <div>
                                    <img
                                        className="recommend1"
                                        src="/images/dayeonmun/dayeonProfile.jpg"
                                        alt="storyProfile"
                                    />
                                </div>
                                <div className="recommendName">
                                    <div className="recommendId">
                                        mundayeon_
                                    </div>
                                    <div className="recommendInfo">
                                        wecode님 외 10명이 팔로우합니다
                                    </div>
                                </div>
                                <div className="recommendFollow">
                                    <button type="button">팔로우</button>
                                </div>
                            </div>
                            <div className="recommendList">
                                <div>
                                    <img
                                        className="recommend1"
                                        src="/images/dayeonmun/dayeonProfile.jpg"
                                        alt="storyProfile"
                                    />
                                </div>
                                <div className="recommendName">
                                    <div className="recommendId">
                                        mundayeon_
                                    </div>
                                    <div className="recommendInfo">
                                        wecode님 외 10명이 팔로우합니다
                                    </div>
                                </div>
                                <div className="recommendFollow">
                                    <button type="button">팔로우</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 저작권영역 */}
                    <div className="copyright">
                        <span className="copyright1">
                            소개 · 도움말 · 홍보 센터 · API · 채용 정보 ·
                        </span>
                        <span className="copyright2">
                            개인정보처리방침 · 약관 · 위치 · 언어
                        </span>
                        <span className="copyright3">
                            © 2022 INSTAGRAM FROM META
                        </span>
                    </div>
                </aside>
            </main>
        </>
    );
}

export default Main;
