function getImgUrl(url, name){
    return new URL(url+'/'+name+'.jpg', import.meta.url).href
    // new URL(이미지의 경로, import.meta.url).href  -> vite의 이미지 불러오는 객체
}