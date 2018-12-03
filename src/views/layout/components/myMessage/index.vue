<template>
  <ul class="myMessage" style="margin-right: 70px;margin-top: 5px">
    <li class="message">
      <div class="badge badge-default" width="15px">7</div>
      <img :src="addimg" class="addimg">
    </li>
    <li class="message">
      <div class="badge badge-default">7</div>
      <img :src="imgUrl" class="addimg">
    </li>
    <li class="message">
      <div class="badge badge-default">7</div>
      <img :src="imgage" class="addimg">
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      imgUrl: require('./img/app.png'),
      imgage: require('./img/goutong.png'),
      addimg: require('./img/img.png')
    }
  }
}
</script>

<style scoped>
  .myMessage{
    right: 35px;
    width: 190px;
    /*display: flex;*/
  }
  .message{
    float: left;
    margin-left: 20px;
    list-style-type: none;
  }
  .addimg{
    width: 24px;
    height: 24px;
    color: #ffffff;
    margin-top: 10px;
    /*position: absolute;*/
  }
  .badge-default{
    display: block;
    font-size: 14px;
    width: 19.5px;
    text-align: center;
    border-radius: 50%;
    color: mediumslateblue;
    position: absolute;
    padding: 0px;
    margin-top: -15px;
    margin-left: 18px;
  }
</style>
