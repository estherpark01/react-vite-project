import React from 'react';
import {Routes, Route, NavLink, Navigate } from 'react-router-dom';
import * as S from "../Styled.js";
// import '../App.jsx';
import '../subcss/About.css'
import IMAGES from "../assets/images/about/visual.jpg";


import About1 from "./About1.jsx";
import About2 from "./About2.jsx";
import About3 from "./About3.jsx";

function About() {
    return (
        <div className='about'>
            <img className='visual' src={IMAGES} alt="" style={{width:'100%'}} />
            <S.Wrapper>
                <S.Head>
                    <h3 className='hidden'>예절원소개</h3>
                    {/* <S.P>기상정보 공개 게시판</S.P> */}
                    <ul className='nav'>
                        <li>
                            <NavLink to="/About/About1" className='link'>예절원소개</NavLink>
                        </li>
                        <li>
                            <NavLink to="/About/About2">오시는 길</NavLink>
                        </li>
                        {/* <li>
                            <NavLink to="/About/About3">미세먼지대피소</NavLink>
                        </li> */}
                    </ul>
                </S.Head>
            </S.Wrapper>
            <div className='container'>
                <Routes>
                    <Route exact path="/" element={<Navigate replace to="/About/About1" />}></Route>
                    <Route path="/About1" element={<About1/>}></Route>
                    <Route path="/About2" element={<About2/>}></Route>
                    {/* <Route path="/About3" element={<About3/>}></Route> */}
                </Routes>
            </div>
            
        </div> 
          
    );
  }

  export default About;