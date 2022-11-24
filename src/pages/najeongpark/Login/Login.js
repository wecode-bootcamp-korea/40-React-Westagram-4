import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/Login.scss';

import '../../../styles/mixin.scss';

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [isActive, setIsActive] = useState(true);
    const [isActiveBtn, setIsActiveBtn] = useState(true);
    const navigate = useNavigate();

    //로그인 버튼 활성화
    const valueChk = () => {
        id && password ? setIsActive(false) : setIsActive(true);
    };

    //id, password validation check
    const validationChk = () => {
        const checkId =
            /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        const checkPw = /^[0-9a-zA-Z]{5,}$/;
        checkId.test(id) && checkPw.test(password)
            ? navigate('/main-nj')
            : setIsActiveBtn(false);
    };

    return (
        <header className="Login">
            <h1>westagram</h1>
            <main className="userInput">
                <input
                    onChange={e => {
                        setId(e.target.value);
                    }}
                    onKeyUp={valueChk}
                    className="id"
                    type="text"
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                />
                <input
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                    onKeyUp={valueChk}
                    className="pass"
                    type="password"
                    placeholder="비밀번호"
                />
                <button
                    className={isActive ? 'loginUnActive' : 'loginActive'}
                    onClick={validationChk}
                    disabled={isActive}
                >
                    로그인
                </button>
                {!isActive && !isActiveBtn && (
                    <p className="errorMsg">로그인 정보를 확인해주세요.</p>
                )}
            </main>
            <div className="footer">
                <span>비밀번호를 잊으셨나요?</span>
            </div>
        </header>
    );
};

export default Login;
