import React from 'react';
import Logo from './Logo';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Home() {
  console.log(`[Home] Render!`);
  return (
    <>
      <Logo/>
      <div className="home-container">
        <div className="">
          <h2 className="service-txt">
            딱 30일만 집중!
          </h2>
          <h1 className="service-txt">
            " 30일 챌린지를 통해
          </h1>
          <h1 className="service-txt">
            작은 성취들을 이뤄나가 보세요"
          </h1>
        </div>
        <div className="home-bottom">
          <h3 className="service-txt">
            지금 시작하시겠습니까?
          </h3>
          <button className='start-now-btn'>
            <Link to="/login">start now</Link>
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default React.memo(Home);