<template>
  <div class="n2">
    <h1 class="n2-title">{{title}}</h1>
    <p class="n2-info">{{info}}</p>
    <div class="n2-content">
      <el-row>
  <el-col :span="3" v-for="(item, index) in 4" :key="index" :offset="index > 0 ? 4 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="../assets/images/n2.jpg" class="image">
      <div style="padding: 14px;">
        <span>人与科技</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">详情请点击</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "n2",
  data() {
    return {
      currentIndex: 0,
      title: "科学技术",
      info: "”人类文明技术“",
      currentDate: new Date()
    };
  },
  methods: {
    showCard(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style scoped>
.n2 {
  text-align: center;
  background-size: cover;
  background: #000 url(../assets/images/n2-bg.png) no-repeat center;
  transition: background-position 0.5s ease-out;
  height: 680px;
}
h1 {
  position: relative;
  display: inline-block;
  margin: 50px auto 20px;
  line-height: 30px;
  padding: 0 30px;
  font-weight: 400;
  font-size: 28px;
  color: #fff;
}
.n2-info {
  color: #fff;
}
h1::before {
  content: "";
  width: 66px;
  height: 13px;
  background: url(../assets/images/n1_l.png) no-repeat center;
  background-size: contain;
  position: absolute;
  top: 5px;
  right: 100%;
}
h1::after {
  content: "";
  width: 66px;
  height: 13px;
  background: url(../assets/images/n1_r.png) no-repeat center;
  background-size: contain;
  position: absolute;
  top: 5px;
  left: 100%;
}
.n2-content  {
  display: flex;
  justify-content: center;
  padding: 0;
  margin-top: 60px;
  margin-bottom: 0;
}
.n2-content::after {
  content: "";
  clear: both;
  display: block;
}
 .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>