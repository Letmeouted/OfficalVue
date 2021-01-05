<template>
  <div class="n3">
    <h1 class="n3-title">{{title}}</h1>
    <p class="n3-info">{{info}}</p>
    <div class="n3-content">
      <ul>
        <li v-for="(item,index) in content" :key="index">
          <div class="n3-bg" :style="{backgroundImage:'url('+item.imgUrl+')'}">
            <div class="n3-masking">
              <p class="n3-caption">{{item.caption}}</p>
              <p class="n3-desc">{{item.desc}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "n3",
  data() {
    return {
      currentEnter: null,
      currentLeave: null,
      title: "易用、精选、一站式的企业应用",
      info: "企业用户加入飞天会员，尊享更多低价，立即参与",
      content: [
        {
          imgUrl: require("../assets/images/n3-1.jpg"),
          caption: "大数据",
          desc:
            "一站式上云服务，帮助企业解决线下部署困难、自建成本过高、安全风险高、网络不稳定的问题。"
        },
        {
          imgUrl: require("../assets/images/n3-2.jpg"),
          caption: "云计算",
          desc:
            "一站式上云服务，帮助企业解决线下部署困难、自建成本过高、安全风险高、网络不稳定的问题。"
        },
        {
          imgUrl: require("../assets/images/n3-3.jpg"),
          caption: "人工智能",
          desc:
            "一站式上云服务，帮助企业解决线下部署困难、自建成本过高、安全风险高、网络不稳定的问题。"
        },
        {
          imgUrl: require("../assets/images/n3-4.jpg"),
          caption: "数据加工",
          desc:
            "一站式上云服务，帮助企业解决线下部署困难、自建成本过高、安全风险高、网络不稳定的问题。"
        },
        {
          imgUrl: require("../assets/images/n3-5.jpg"),
          caption: "大数据",
          desc:
            "一站式上云服务，帮助企业解决线下部署困难、自建成本过高、安全风险高、网络不稳定的问题。"
        },
        {
          imgUrl: require("../assets/images/n3-6.jpg"),
          caption: "云计算",
          desc:
            "一站式上云服务，帮助企业解决线下部署困难、自建成本过高、安全风险高、网络不稳定的问题。"
        },
        {
          imgUrl: require("../assets/images/n3-7.jpg"),
          caption: "人工智能",
          desc:
            "一站式上云服务，帮助企业解决线下部署困难、自建成本过高、安全风险高、网络不稳定的问题。"
        },
        {
          imgUrl: require("../assets/images/n3-8.jpg"),
          caption: "数据加工",
          desc:
            "一站式上云服务，帮助企业解决线下部署困难、自建成本过高、安全风险高、网络不稳定的问题。"
        }
      ]
    };
  }
};
</script>

<style scoped>
.n3 {
  text-align: center;
  margin-top: 100px;
}
h1 {
  position: relative;
  display: inline-block;
  margin: 0 auto 20px;
  line-height: 30px;
  padding: 0 30px;
  font-weight: 400;
  font-size: 28px;
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
.n3-bg {
  position: relative;
  width: 286px;
  height: 200px;
  display: block;
  margin: auto;
  background-size: cover;
  background-position: 0 0;
  overflow: hidden;
}
.n3-masking {
  position: absolute;
  width: 286px;
  height: 200px;
  transform: translateY(150px);
  background-color: rgba(0, 0, 0, 0.7);
  transition: 0.3s ease-in;
}
.n3-bg :hover {
  transform: translateY(0px);
  transition: 0.3s ease-in;
}
.n3-content::after {
  content: "";
  clear: both;
  display: block;
}
.n3-content ul {
  margin: 20px auto;
  width: 1280px;
}
.n3-content ul li {
  float: left;
  width: 286px;
  margin: 0 6px 12px;
}
.n3-caption {
  position: relative;
  display: inline-block;
  font-size: 18px;
  color: #ffffff;
  line-height: 25px;
  margin-top: 15px;
  margin-bottom: 10px;
}
.n3-desc {
  position: relative;
  display: inline-block;
  font-size: 14px;
  color: #ffffff;
  line-height: 25px;
  margin: 10px 20px;
}
</style>


