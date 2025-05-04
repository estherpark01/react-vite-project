import React from 'react';
import '../../css/Section.css';
import { getAssetsImgUrl } from '../../utils/getImgUrl';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import { getImgUrl } from '@utils/getImgUrl';



function Section4() {
    // SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

        return (
        <section className='sec4'>
                <h3>전문지도사육성과정</h3>
                <p>한국전통문화예절원협동조합 전문지도강사 양성교육과정입니다.</p>
                <Swiper className="mySwiper2"
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={1}
                    // navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    touchStartPreventDefault={false}
                    simulateTouch={true} 
                >
                    <SwiperSlide className="slide">                                                                                                     
                    <div>
                        <img src="" alt="" />
                    </div>
                    <dl>
                        <dt>국가공인실천예절지도사</dt>
                        <dd>
                        국민의 문화적 의전을 분명하게 하고,
                        예의와 풍속을 바로 지도하는 전도자적 능력을 갖춘 직업인으로 양성하는 과정입니다.
                        </dd>
                    </dl>
                    </SwiperSlide>

                    <SwiperSlide className="slide">
                    <div>
                        <img src="" alt="" />
                    </div>
                    <dl>
                        <dt>유아다례지도사</dt>
                        <dd>
                        영ㆍ유아 어린이의 차(茶) 생활 예절을
                        체계적으로 교육 지도를 할 수 있는 유아다례 전문강사 교육 과정입니다.
                        </dd>
                    </dl>
                    </SwiperSlide>

                    <SwiperSlide className="slide">
                    <div>
                        <img src="" alt="" />
                    </div>
                    <dl>
                        <dt>전통혼례지도사</dt>
                        <dd>
                        건전한 혼례문화 보급과 함께 전통혼례 전문집례ㆍ집사로 활동할 수 있는 일자리 창출 교육 과정입니다.
                        </dd>
                    </dl>
                    </SwiperSlide>
                </Swiper>            
        </section>
    );

}

export default Section4;
