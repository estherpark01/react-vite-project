export function getPublicImgUrl(name) {
    return `/images/${name}.jpg`;
}

export function getAssetsImgUrl(name) {
    return new URL(`/src/assets/images/${name}.jpg`, import.meta.url).href;
}

// new URL(이미지의 경로, import.meta.url).href  -> vite의 이미지 불러오는 객체



// !! 2번째 방법 !!
// function getImgUrl(url, name){
//     return new URL(url+'/'+name+'.jpg', import.meta.url).href
//     // new URL(이미지의 경로, import.meta.url).href  -> vite의 이미지 불러오는 객체
//         // ->public에서는 굳이 사용하지 않음 / vite에서는 require함수 사용x
// }



// !! 컴포넌트에서 사용하는 법 !!!

// import { getPublicImgUrl, getAssetsImgUrl } from '../../utils/getImgUrl';

// // public 폴더에서 이미지 불러오기
// <img src={getPublicImgUrl('visual1')} alt="" />

// // assets 폴더에서 이미지 불러오기
// <img src={getAssetsImgUrl('sec1_1')} alt="" />