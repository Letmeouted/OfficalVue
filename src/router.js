/*
 * @Author: whf
 * @Date: 2020-12-16 10:57:08
 * @LastEditTime: 2021-01-05 10:15:52
 * @FilePath: \WebDemo\src\router.js
 */
import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      component: Index
    }
  ]
});
