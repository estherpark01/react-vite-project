import React from 'react';
import '../../css/Visual.css';

import { Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar} from "swiper";
import "swiper/swiper-bundle.min.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import { getImgUrl } from '../../utils/getImgUrl';


function getImgUrl(url, name){
    return new URL(url+'/'+name+'.jpg', import.meta.url).href
    // new URL(이미지의 경로, import.meta.url).href  -> vite의 이미지 불러오는 객체
        // ->public에서는 굳이 사용하지 않음 / vite에서는 require함수 사용x
}

function Visual() {
    // SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar]);

    return (
        <div className='visual'>
            <Swiper slidesPerView={1} spaceBetween={0} loop={true}
            pagination={{clickable:true}} navigation={true}
            // scrollbar={{ draggable: true }} 
            autoplay={{
                delay: 2200,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            touchStartPreventDefault={false}
            simulateTouch={true} 
            className="mySwiper1" >
                <SwiperSlide className="link1 link"><img src={getImgUrl('/images','visual1')} alt="비주얼이미지1" />
                    <span><strong>相應과 相生</strong><br/>
                    전통에서 길을 찾다.</span>
                </SwiperSlide>
                <SwiperSlide className="link2 link"><img src={getImgUrl('/images','visual2')} alt="비주얼이미지2" />
                    <span><strong>선례후학(先禮後學)</strong><br/>
                    지혜와 덕성을 우선으로 가르치는 사랑의 실천철학</span>
                </SwiperSlide>
                <SwiperSlide className="link3 link"><img src={getImgUrl('/images','visual3')} alt="비주얼이미지3" />
                    <span><strong>법고창신(法古創新)</strong><br/>
                    옛것을 본받아 <br/> 새로운 것을 창조하다.</span>
                </SwiperSlide>
                {/* <SwiperSlide><img src={getImgUrl('/images','con3')} alt="" /></SwiperSlide> */}
                {/* <SwiperSlide><img src="/images/con3.jpg" alt="" /></SwiperSlide> */}
            </Swiper>
        </div>
    );

}

export default Visual;
