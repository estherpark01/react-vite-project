import React from 'react';
import '../../css/Section.css';
import { getAssetsImgUrl } from '../../utils/getImgUrl';

function Section1() {

    
    return (
        <section className='sec1'>
                <h3>예절원 이야기</h3>
                {/* <p><strong>법고창신(法古創新)</strong></p>
                <p>: 옛것을 본받아 새로운 것을 창조하다.</p> */}
                <p>한국전통문화예절원은 전통에 등불을 밝혀 
                    미래의 횃불이 되어 꿈꾸는 아이들의 길잡이가 되도록 최선의 노력을 다하고 있습니다.</p>
                <div className='img_box'>
                    <div>
                        {/* <img src={getImgUrl('/images','sec1_1.jpg')} alt="비주얼이미지2" /> */}
                        {/* <img src="../public/images/sec1_1.jpg" alt="" /> */}
                        <img src={getAssetsImgUrl('sec1_1')} alt="" />
                    </div>
                    <ul>
                        {/* <li><img src={require("../public/images/sec1_1_thum.jpg")} alt="" /></li> */}
                        {/* <li><img src={getImgUrl('/images','sec1_1_thum')} alt="비주얼이미지1" /></li> */}
                        <li><img src={getAssetsImgUrl('sec1_1_thum')} alt="" /></li>
                        <li><img src={getAssetsImgUrl('sec1_2_thum')} alt="" /></li>
                        <li><img src={getAssetsImgUrl('sec1_3_thum')} alt="" /></li>
                        <li><img src={getAssetsImgUrl('sec1_4_thum')} alt="" /></li>
                    </ul>
                </div>
            </section>
    );

}

export default Section1;
