import React from 'react';
import './Nav.scss';

const Nav = () => {
    return (
        <nav className="nav">
            <div className="navContainer">
                <div className="navLogo">
                    <img
                        className="logoImg"
                        src="/images/nav/logo.png"
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
    );
};

export default Nav;
