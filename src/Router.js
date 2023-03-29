import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import Mypage from './pages/Mypage/Mypage';
import Search from './pages/Search/Search';
import Store from './pages/Store/Store';
import Redirect from './pages/SignIn/Redirect/Redirect';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth/kakao/callback" element={<Redirect />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:cateCode" element={<Store />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
