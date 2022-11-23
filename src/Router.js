import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 채영님의 컴포넌트
import LoginCY from './pages/chaeyoungkim/Login/Login';
import MainCY from './pages/chaeyoungkim/Main/Main';

// 다연님의 컴포넌트
import LoginDY from './pages/dayeonmun/Login/Login';
import MainDY from './pages/dayeonmun/Main/Main';

// 나정님의 컴포넌트
import LoginNJ from './pages/najeongpark/Login/Login';
import MainNJ from './pages/najeongpark/Main/Main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
