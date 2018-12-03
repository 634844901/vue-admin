<template>
  <div class="rahmen">
    <rotate-img :imgs ="imgs"/>
  </div>
</template>

<script>
import rotateImg from './rotateImg'
export default {
  name: '',
  components: {
    rotateImg
  },
  data() {
    return {
      imgs: [
        { imgurl: require('../../assets/img/6ad4c226ly1fcx95462inj20qo0zkdlr.jpg'), content: '野生种遍见于中国长江以南各省的山区，为小乔木状，叶片较大，常超过10厘米长，长期以来，经广泛栽培，毛被及叶型变化很大。茶叶可作饮品，含有多种有益成分，并有保健功效。' },
        { imgurl: require('../../assets/img/6ad4c226gy1fqfrfp78oej21mq2q6kjm.jpg'), content: '野生种遍见于中国长江以南各省的山区，为小乔木状，叶片较大，常超过10厘米长，长期以来，经广泛栽培，毛被及叶型变化很大。茶叶可作饮品，含有多种有益成分，并有保健功效。' },
        { imgurl: require('../../assets/img/6ad4c226ly1fcx955061pj20qo0zkwla.jpg'), content: '野生种遍见于中国长江以南各省的山区，为小乔木状，叶片较大，常超过10厘米长，长期以来，经广泛栽培，毛被及叶型变化很大。茶叶可作饮品，含有多种有益成分，并有保健功效。' },
        { imgurl: require('../../assets/img/6ad4c226ly1fnyck2qosnj20hs0notcv.jpg'), content: '野生种遍见于中国长江以南各省的山区，为小乔木状，叶片较大，常超过10厘米长，长期以来，经广泛栽培，毛被及叶型变化很大。茶叶可作饮品，含有多种有益成分，并有保健功效。' },
        { imgurl: require('../../assets/img/6ad4c226ly1fed1yyjt19j20qo0zkjxn.jpg'), content: '野生种遍见于中国长江以南各省的山区，为小乔木状，叶片较大，常超过10厘米长，长期以来，经广泛栽培，毛被及叶型变化很大。茶叶可作饮品，含有多种有益成分，并有保健功效。' },
        { imgurl: require('../../assets/img/6ad4c226ly1fdnmi1nd26j20qo0zk45e.jpg'), content: '野生种遍见于中国长江以南各省的山区，为小乔木状，叶片较大，常超过10厘米长，长期以来，经广泛栽培，毛被及叶型变化很大。茶叶可作饮品，含有多种有益成分，并有保健功效。' }
      ]
    }
  }
}
</script>

<style scoped>
</style>
