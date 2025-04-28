import React from 'react';
import '../../css/Section.css';

// import { getImgUrl } from '../../utils/getImgUrl';


function Section3() {


    return (
        <section className='sec3'>
            <h3>전통문화예절체험</h3>
            <p>우리 전통문화의 멋을 알게 하며 <br/>
                자주적·미적 창의성 개발·심미적 감성을 향상시킵니다.</p>
            <ul>
                <li><a href="#">어린이 교육</a></li>
                <li><a href="#">전통문화체험</a></li>
                <li><a href="#">전통예절교육</a></li>
                <li><a href="#">전통예절학당</a></li>
            </ul>
            <div>
                    <img src="" alt="" />
                <div>
                    <h4>어린이 교육</h4>
                    <p>다양한 전통문화와 체험을 통해 <br/>
                        집중력과 인내심, 창의력 향상에 도움을 주는 배움의 장입니다.</p>
                    <a href="#">자세히 보기</a>
                </div>
            </div>
        </section>
    );

}

export default Section3;
