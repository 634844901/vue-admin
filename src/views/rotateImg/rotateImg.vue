<template>
  <div class="rotateImg">
    <div v-for="(img,index) in imgs" :key="index" :img="img" class="imgcontent">
      <div class="img">
        <img :src="img.imgurl" class="img">
      </div>
      <div class="content">
        <p class="text">{{ img.content }}内容</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    imgs: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
  .rotateImg{
    width: 100%;
    height: 100%;
    /*display: flex;*/
    /*justify-content: space-between;*/
  }
  .imgcontent{
    margin-top: 40px;
    margin-left: 75px;;
    /*边框*/
    box-shadow: 0 0 5px #cccccc;
    /*阴影*/
    width: 280px;
    height: 350px;
    border-radius: 5px;
    /*圆角*/
    float: left;
    perspective: 1000px;
  }
  .img{
    position: absolute;
    width: 280px;
    height: 350px;
    transition: 0.5s;
  }
  .content{
    transition: 0.5s;
    position: absolute;
    transform: rotateY(-90deg);
    background-color: rgba(0,0,0,0.7);
    width: 280px;
    display: flex;
    height: 350px;
    align-items: center;
  }
  .text{
    padding: 5px;
    display: block;
    margin: 0;
    text-align: center;
    color: white;
  }
  .imgcontent:hover .img{
    transform: rotateY(-90deg);
  }
  .imgcontent:hover .content{
    transform: rotateY(0deg);
  }
</style>
