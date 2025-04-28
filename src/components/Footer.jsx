import React, {useState , useEffect} from 'react';
import { AiFillYoutube, AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";

function Footer() {

   const [upDown, setUpDown] = useState(false); //false(위)/true(아래)

   const handleScroll = () => {
      //console.log(window.scrollY);
      if (window.scrollY > 300){
         setUpDown(true);
      }else{
         setUpDown(false);
      } 
    };

   useEffect(() => {
      // window에 scroll 이벤트를 넣는다.
      window.addEventListener('scroll', handleScroll);
      // 페이지를 벗어날 때 이벤트를 제거한다.
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); 

   const topHandler = (e) => {
      e.preventDefault();
      window.scroll({top:0 , behavior:'smooth'});
    };

    return (
       <footer>
            <a className={'top_move '+( upDown ? 'down' : 'up' )} href="#" onClick={topHandler}>TOP</a>
            <ul className='footer_top'>
               <li><a href="/">웹서비스 이용약관</a></li>
               <li><a href="/">개인정보처리방침</a></li>
               <li><a href="/">이메일무단수집거부</a></li>
            </ul>
            <ul className='footer_mid'>
               <li className='address'>
                  <p>한국전통문화예절원</p> 
                  <address>
                  대표  변영주 |  인천 서구 원당대로 627 선한빌딩 3층 <br/>
                  koreayejeol@naver.com <br/>
                  TEL:032-565-5701/2  |  FAX:032-563-8500 
                  </address>
               </li>
               <li className='sns'>
                  <ul>
                     <li>
                        <a href="https://www.youtube.com/@koreacultureofficial" target="_blank" title="한국전통문화예절원 페이스북 화면 새창에 열림">
                        <AiFillFacebook />
                        </a>
                     </li>
                     <li>
                        <a href="https://www.youtube.com/@koreacultureofficial" target="_blank" title="한국전통문화예절원 인스타그램 화면 새창에 열림">
                        <AiOutlineInstagram />
                        </a>
                     </li>
                     <li>
                        <a href="https://www.youtube.com/@koreacultureofficial" target="_blank" title="한국전통문화예절원 유튜브 사이트 새창에 열림">
                        <AiFillYoutube />
                        </a>
                     </li>
                  </ul>
               </li>
            </ul>
            <p>&copy;2019. Korea Traditional Culture Manner Coop. All Rights Reserved.</p>
            
       </footer>
    );
  }

  export default Footer;