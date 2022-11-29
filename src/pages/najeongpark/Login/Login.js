import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Login/Login.scss';
import '../../../styles/mixin.scss';

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [showHelpText, setShowHelpText] = useState(false);
    const checkId =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const checkPw = /^[0-9a-zA-Z]{5,}$/;
    const isActive = checkId.test(id) && checkPw.test(password);
    const navigate = useNavigate();

    const idChk = e => {
        setId(e.target.value);
    };

    const passwordChk = e => {
        setPassword(e.target.value);
    };

    //id, password validation check
    const validationChk = () => {
        isActive ? navigate('/main-nj') : setShowHelpText(true);
    };

    return (
        <header className="Login">
            <h1>westagram</h1>
            <main className="userInput">
                <input
                    onChange={idChk}
                    className="id"
                    type="text"
                    value={id}
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                />
                <input
                    onChange={passwordChk}
                    className="pass"
                    type="password"
                    value={password}
                    placeholder="비밀번호"
                />
                <button
                    className={
                        !(id && password) ? 'loginUnActive' : 'loginActive'
                    }
                    onClick={validationChk}
                    disabled={!(id && password)}
                >
                    로그인
                </button>
                {showHelpText && (
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
