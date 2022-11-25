import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const goToMain = () => {
        navigate('/main-dy');
    };

    return (
        <>
            <div className="loginpage">
                <div className="title">
                    <p>Westagram</p>
                </div>

                <div className="login">
                    <form className="loginForm" action="main.html">
                        <input
                            className="id"
                            type="text"
                            placeholder="전화번호, 사용자 이름 또는 이메일"
                        />
                        <input
                            className="pw"
                            type="password"
                            placeholder="비밀번호"
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
        </>
    );
}

export default Login;
