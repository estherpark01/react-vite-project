import React, { useState } from 'react';
import '../../css/Section.css';
import { getAssetsImgUrl } from '../../utils/getImgUrl';

function Section1() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const imageNames = ['sec1_1', 'sec1_2', 'sec1_3', 'sec1_4'];
        
    
    return (
        <section className='sec1'>
                <h3>예절원 이야기</h3>
                <p>한국전통문화예절원은 전통에 등불을 밝혀 
                    미래의 횃불이 되어 꿈꾸는 아이들의 길잡이가 되도록 최선의 노력을 다하고 있습니다.</p>
                <div className='img_box'>
                    <div>
                        <img src={getAssetsImgUrl(imageNames[currentImageIndex])} alt={`예절원소개 이미지${currentImageIndex + 1}`} />
                    </div>
                    <ul>
                        {imageNames.map((name, index) => (
                        <li
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                        >
                            <img src={getAssetsImgUrl(`${name}_thum`)} alt={`예절원소개 썸네일이미지${currentImageIndex + 1}`} />
                        </li>
                        ))}
                    </ul>
                </div>
            </section>
    );

}

export default Section1;
