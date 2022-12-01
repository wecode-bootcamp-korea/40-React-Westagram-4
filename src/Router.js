import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';

// 채영님의 컴포넌트
import LoginCY from './pages/chaeyoungkim/Login/Login';
import MainCY from './pages/chaeyoungkim/Main/Main';
import Signup from './pages/chaeyoungkim/Login/Signup';

// 다연님의 컴포넌트
import LoginDY from './pages/dayeonmun/Login/Login';
import MainDY from './pages/dayeonmun/Main/Main';

// 나정님의 컴포넌트
import LoginNJ from './pages/najeongpark/Login/Login';
import MainNJ from './pages/najeongpark/Main/Main';

function Router() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/login-cy" element={<LoginCY />} />
                <Route path="/main-cy" element={<MainCY />} />
                <Route path="/login-dy" element={<LoginDY />} />
                <Route path="/main-dy" element={<MainDY />} />
                <Route path="/login-nj" element={<LoginNJ />} />
                <Route path="/main-nj" element={<MainNJ />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
