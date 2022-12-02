import React, { useState, useEffect } from 'react';
import Feed from './Feed';
import { ASIDE_FOOTER } from './Data';
import '../Main/Main.scss';
import '../../../styles/mixin.scss';

const Main = () => {
    const [feedList, setFeedList] = useState([]);

    useEffect(() => {
        fetch('/data/FeedInfo.json', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setFeedList(data);
            });
    }, []);

    return (
        <>
            {/* main */}
            <main className="main">
                <article>
                    {feedList.map(feeds => {
                        return <Feed feeds={feeds} key={feeds.id} />;
                    })}
                </article>
                {/* aside */}
                <aside>
                    <div className="asideRight">
                        <div className="myProfile">
                            <img
                                src="../../images/najeongpark/me.jpg"
                                alt="me"
                            />
                            <div className="introduce">
                                <p>p__najj</p>
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
                                    <div className="storyWrap">
                                        <img
                                            src="../../../images/najeongpark/jubi.jpg"
                                            alt="storyPuppy1"
                                        />
                                    </div>
                                    <div className="introduce">
                                        <p>jubi_dubi</p>
                                        <p>16분 전</p>
                                    </div>
                                </div>
                                <div className="storyIcon">
                                    <div className="storyWrap">
                                        <img
                                            src="../../images/najeongpark/pong2.JPG"
                                            alt="pong"
                                        />
                                    </div>
                                    <div className="introduce">
                                        <p>pongpong</p>
                                        <p>3시간 전</p>
                                    </div>
                                </div>
                                <div className="storyIcon">
                                    <div className="storyWrap">
                                        <img
                                            src="../../images/najeongpark/day.JPG"
                                            alt="day"
                                        />
                                    </div>
                                    <div className="introduce">
                                        <p>seonday</p>
                                        <p>16시간 전</p>
                                    </div>
                                </div>
                                <div className="storyIcon">
                                    <div className="storyWrap">
                                        <img
                                            src="../../images/najeongpark/storyPuppy4.jpg"
                                            alt="storyPuppy4"
                                        />
                                    </div>
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
                                            seonday님 외 2명이 팔로우합니다.
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
                                            pongpong 외 12명이 팔로우합니다.
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
                                            go_home 외 6명이 팔로우합니다.
                                        </p>
                                    </div>
                                    <span>팔로우</span>
                                </div>
                            </div>
                        </div>
                        <div className="asideBottom">
                            {ASIDE_FOOTER.map(info => {
                                return <span key={info.id}>{info.text}</span>;
                            })}
                        </div>
                    </div>
                </aside>
            </main>
        </>
    );
};

export default Main;
