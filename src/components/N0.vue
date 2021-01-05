<template>
  <div>
    <el-carousel :interval="5000" arrow="always" height="680px">
      <el-carousel-item v-for="(item,index) in content" :key="index">
          <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
        content:[
            {
          title: "内容标题1",
          imgUrl: require("../assets/images/n0-1.jpg"),
        },
        {
          title: "内容标题2",
          imgUrl: require("../assets/images/n0-2.jpg")
        },
        {
          title: "内容标题3",
          imgUrl: require("../assets/images/n0-3.jpg")
        },
        {
          title: "内容标题4",
          imgUrl: require("../assets/images/n0-4.jpg")
        }
        ]

        
    }
  }
}
</script>

<style>
.el-carousel__item{
  font-size: 18px;
  opacity: 0.75;
  line-height: 680px;
  margin: 0;
}
img{
    width: 100%;
    height: 100%;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

</style>