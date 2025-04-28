import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { FaBars } from "react-icons/fa";

function Header() {

  const [isSwitched, setIsSwitced] = useState(false); //햄버거 메뉴 열림(true)/닫힘(false)
  const navHandler = (e) => {
    e.preventDefault();
    setIsSwitced(!isSwitched);  //메뉴 토글
  };

  const closeHandler = () => {
    setIsSwitced(false);  //메뉴 닫힘
  };

    return (
      <header>
       <div className="header_inner"> 
          <h1><NavLink to="/" ><img src={logo} alt="로고명" /></NavLink></h1>
          <nav className={ isSwitched ? 'show' : 'hide' } onClick={closeHandler}>
              <ul>
                  <li><NavLink to="/About">예절원소개</NavLink></li>
                  <li><NavLink to="/Position">예절원교육</NavLink></li>
                  <li><NavLink to="/Data">전통행사</NavLink></li>
                  <li><NavLink to="/Notice">알림마당</NavLink></li>
              </ul>
            </nav>
            <button onClick={navHandler}><FaBars className="ico" /></button>
         </div>
       </header>
    );
  }

  export default Header;