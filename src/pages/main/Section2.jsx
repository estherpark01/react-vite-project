import React from 'react';
import '../../css/Section.css';
import { getAssetsImgUrl } from '../../utils/getImgUrl';



function Section2() {


    return (
        <section className='sec2'>
                <h3>전통의례</h3>
                <p>과거의 지혜와 가치를 담아
                현재 우리가 살아가는 방식과 미래를 향한 비전을 제시합니다.</p>
                <ul>
                    <li>
                        <div>
                            <img src={getAssetsImgUrl('sec2_1')} alt="" />
                        </div>
                        <dl>
                            <dt>전통성년례</dt>
                            <dd>청소년들에게 자신을 자각할 수 있는 기회를 제공하고 성인으로서의 책임을 일깨우는 의식입니다.</dd>
                        </dl>
                    </li>
                    <li>
                        <div>
                            <img src={getAssetsImgUrl('sec2_2')} alt="" />
                        </div>
                        <dl>
                            <dt>전통혼례</dt>
                            <dd>전통의 멋과 신명이 살아있는 우리의 아름다운 혼례문화입니다.</dd>
                        </dl>
                    </li>
                </ul>
        </section>
    );

}

export default Section2;
