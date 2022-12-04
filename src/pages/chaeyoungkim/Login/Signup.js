import React, { useState } from 'react';
import './Login.scss';

function Signup() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const isValid = id.includes('@') && pw.length >= 5;

    const handleClick = () => {
        fetch('http://10.58.52.143:3000/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({ email: id, password: pw }),
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
            });
    };

    const saveUserId = event => {
        setId(event.target.value);
    };

    const saveUserPw = event => {
        setPw(event.target.value);
    };

    return (
        <div className="wrap">
            <div className="container">
                <div className="inner">
                    <header className="header">
                        <h1>
                            <p>Westagram</p>
                        </h1>
                    </header>
                    <form className="form">
                        <div className="inputBox">
                            <input
                                onChange={saveUserId}
                                className="inputValue"
                                type="text"
                                placeholder="전화번호, 사용자 이름 또는 이메일"
                                value={id}
                            />
                            <input
                                onChange={saveUserPw}
                                className="inputValue"
                                type="password"
                                placeholder="비밀번호"
                                value={pw}
                            />
                        </div>

                        <div className="buttonBox">
                            <button
                                id="button"
                                type="button"
                                className="btn"
                                onClick={handleClick}
                                disabled={isValid ? false : true}
                                style={
                                    isValid
                                        ? { backgroundColor: '#0095f6' }
                                        : { backgroundColor: '#b0dffc' }
                                }
                            >
                                <span>회원가입</span>
                            </button>
                        </div>
                    </form>

                    <div className="passwordForget">
                        <span>비밀번호를 잊으셨나요?</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
