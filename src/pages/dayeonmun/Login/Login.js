import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const navigate = useNavigate();
    const goToMain = () => {
        navigate('/main-dy');
    };

    function saveUserId(event) {
        setId(event.target.value);
    }

    function saveUsetPw(event) {
        setPw(event.target.value);
    }

    return (
        <section className="login">
            <div className="loginpage">
                <h1 className="title">Westagram</h1>

                <div className="loginContainer">
                    <form className="loginForm" action="main.html">
                        <input
                            className="id"
                            type="text"
                            placeholder="전화번호, 사용자 이름 또는 이메일"
                            onChange={saveUserId}
                        />
                        <input
                            className="pw"
                            type="password"
                            placeholder="비밀번호"
                            onChange={saveUsetPw}
                        />
                        <button
                            className="btn"
                            onClick={goToMain}
                            type="submit"
                        >
                            로그인
                        </button>
                    </form>
                </div>

                <div className="lostpassword">
                    <p>비밀번호를 잊으셨나요?</p>
                </div>
            </div>
        </section>
    );
}

export default Login;
