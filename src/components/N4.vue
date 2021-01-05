<template>
  <div class="n4">
    <h1 class="n4-title">{{ title }}</h1>
    <p class="n4-info">{{ info }}</p>
    <swiper
      class="swiper"
      :options="swiperOption"
      ref="mySwiper"
      @someSwiperEvent="callback()"
    >
      <!-- slides -->
      <swiper-slide
        class="swiper-item"
        v-for="(item, index) in content"
        :key="index"
      >
        <div>
          <p class="n4-date">2020</p>
          <p class="n4-caption">{{ item.caption }}</p>
          <div class="n4-view">
            <a class="n4-icon" href>VIEW</a>
          </div>
          <p class="n4-desc">{{ item.desc }}</p>
          <div class="n4-img">
            <img :src="item.imgUrl" alt />
          </div>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide, directive } from "vue-awesome-swiper";
export default {
  name: "n4",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: "auto",
        scrollbar: {
          el: ".swiper-scrollbar"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        autoplay:true
      },
      currentEnter: null,
      currentLeave: null,
      title: "全面、专业、智能的解决方案",
      info: "查看解决方案",
      content: [
        {
          imgUrl: require("../assets/images/n4-1.jpg"),
          caption:
            "数字政府",
          desc:
            "开发者一站式学习平台，涵盖云计算、大数据、人工智能、IoT、编程语言等领域，快速提升开发技能。"
        },
        {
          imgUrl: require("../assets/images/n4-1.jpg"),
          caption:
            "数字政府",
          desc:
            "开发者一站式学习平台，涵盖云计算、大数据、人工智能、IoT、编程语言等领域，快速提升开发技能。"
        },
        {
          imgUrl: require("../assets/images/n4-1.jpg"),
          caption:
            "数字政府",
          desc:
            "开发者一站式学习平台，涵盖云计算、大数据、人工智能、IoT、编程语言等领域，快速提升开发技能。"
        },
        {
          imgUrl: require("../assets/images/n4-1.jpg"),
          caption:
            "数字政府",
          desc:
            "开发者一站式学习平台，涵盖云计算、大数据、人工智能、IoT、编程语言等领域，快速提升开发技能。"
        },
        {
          imgUrl: require("../assets/images/n4-1.jpg"),
          caption:
            "数字政府",
          desc:
            "开发者一站式学习平台，涵盖云计算、大数据、人工智能、IoT、编程语言等领域，快速提升开发技能。"
        },
        {
          imgUrl: require("../assets/images/n4-1.jpg"),
          caption:
            "数字政府",
          desc:
            "开发者一站式学习平台，涵盖云计算、大数据、人工智能、IoT、编程语言等领域，快速提升开发技能。"
        },
        {
          imgUrl: require("../assets/images/n4-1.jpg"),
          caption:
            "数字政府",
          desc:
            "开发者一站式学习平台，涵盖云计算、大数据、人工智能、IoT、编程语言等领域，快速提升开发技能。"
        }
      ]
    };
  },
  methods: {
    imgMoveStart(index) {
      this.currentEnter = index;
      this.currentLeave = null;
    },
    imgMoveEnd(index) {
      this.currentLeave = index;
      this.currentEnter = null;
    }
  }
};
</script>

<style scoped>
.n4 {
  text-align: center;
  margin-top: 100px;
  height: 700px;
  overflow: hidden;
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
  background: url(../assets/images/n1_r.png) no-repeat center;
  background-size: contain;
  position: absolute;
  top: 5px;
  left: 100%;
}
h1::after {
  content: "";
  width: 66px;
  height: 13px;
  background: url(../assets/images/n1_l.png) no-repeat center;
  background-size: contain;
  position: absolute;
  top: 5px;
  right: 100%;
}
.swiper {
  margin: 30px;
}
.n4-content::after {
  content: "";
  clear: both;
  display: block;
}
.swiper-item {
  width: 360px;
  height: 500px;
  padding: 20px;
  text-align: center;
  font-size: 16px;
  background: #fff;
  box-shadow: 0 0 10px 0 rgba(27, 43, 79, 0.2);
  margin: 0 12px 4px;
  overflow: hidden;
}
.swiper-item:hover {
  box-shadow: 0 0 10px 0 rgba(27, 43, 79, 0.4);
}
.n4-date {
  opacity: 0.8;
  font-family: Roboto;
  font-weight: 800;
  font-size: 12px;
  color: #1b2b4f;
  letter-spacing: 2px;
  text-align: center;
  line-height: 16px;
  margin: 0;
}
.n4-caption {
  font-size: 24px;
  color: #1b2b4f;
  text-align: center;
  line-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  height: 80px;
  -webkit-box-orient: vertical;
}
.n4-desc {
  padding-right: 20px;
  opacity: 0.6;
  font-size: 14px;
  color: #1b2b4f;
  text-align: left;
  line-height: 28px;
  position: absolute;
  bottom: 240px;
  font-family: PingFangSC;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  height: 84px;
  -webkit-box-orient: vertical;
}
.n4-icon {
  background: url(../assets/images/n4-icon.png) right center no-repeat;
  padding-right: 5px;
  font-size: 12px;
  line-height: 12px;
  color: #d00000;
  letter-spacing: 3px;
  text-align: center;
  font-family: Roboto;
  font-weight: 700;
  text-decoration: none;
}
.n4-view {
  position: absolute;
  text-align: center;
  top: 160px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.n4-img {
  width: 360px;
  height: 210px;
  position: absolute;
  bottom: 20px;
  overflow: hidden;
}
.n4-img img {
  width: 360px;
  height: 210px;
  transition-duration: 0.5s;
}
.n4-img img:hover {
  transform: scale(1.1);
}
</style>


