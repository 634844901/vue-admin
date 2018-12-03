<template>
  <div class="swiper">
    <swiper ref="mySwiperA" :options="swiperOption" class="imgs-maring">
      <swiper-slide v-for="(item, index) in slides" :key="index">
        <img :src="item" class="imgs" @click="has(item)">
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination"/>
      <div slot="button-prev" class="swiper-button-prev"/>
      <div slot="button-next" class="swiper-button-next"/>
      <div slot="pagination" class="swiper-pagination"/>
    </swiper>
    <!--<rahmen v-if="imgoff"/>-->
  </div>
</template>
<script>
// import rahmen from './img'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
  name: 'Test2',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      imgoff: false,
      slides: {
        img1: require('../../assets/img/6ad4c226ly1fd9wncrfh8j20qo0zkdmv.jpg'),
        img2: require('../../assets/img/6ad4c226ly1fnyck2qosnj20hs0notcv.jpg'),
        img3: require('../../assets/img/6ad4c226ly1fd9wmrf6udj20qo0zkjwr.jpg'),
        img4: require('../../assets/img/6ad4c226ly1fcx955061pj20qo0zkwla.jpg')
      },
      // 轮播config
      swiperOption: {
        slidesPerView: 'auto', // 设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        centeredSlides: true, // <span style="color:rgb(68,68,68);font-family:'microsoft yahei';font-size:13px;">设定为true时，活动块会居中，而不是默认状态下的居左。</span>
        // notNextTick: true,
        autoplay: {
          disableOnInteraction: false, // 自动播放
          delay: 3000
        },
        loop: true,
        grabCursor: true, // 获取光标
        // setWrapperSize: true,
        // autoHeight: true,
        pagination: {
          el: '.swiper-pagination'// 分页器
        },
        navigation: {
          nextEl: '.swiper-button-next', // 前进后退按钮
          prevEl: '.swiper-button-prev'
        },
        scrollbar: '.swiper-scrollbar', // 抓手图标
        mousewheel: true, // 鼠标滚动
        slideToClickedSlide: console.log('123153')
      }
    }
  },
  methods: {
    has(imgurl) {
      return (imgurl)
    }
  }
}
</script>

<style>
  .swiper{
    width: 100%;
    height: 100%;
    background-color: #1482f0;
  }
  .imgs-maring{
    width: 400px;
    height: 500px;
    text-align: center;
  }
  .imgs{
    width: 400px;
    height: 500px;
  }
</style>
