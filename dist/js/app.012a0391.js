(function(t){function a(a){for(var e,r,c=a[0],l=a[1],o=a[2],v=0,u=[];v<c.length;v++)r=c[v],n[r]&&u.push(n[r][0]),n[r]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(t[e]=l[e]);p&&p(a);while(u.length)u.shift()();return s.push.apply(s,o||[]),i()}function i(){for(var t,a=0;a<s.length;a++){for(var i=s[a],e=!0,c=1;c<i.length;c++){var l=i[c];0!==n[l]&&(e=!1)}e&&(s.splice(a--,1),t=r(r.s=i[0]))}return t}var e={},n={app:0},s=[];function r(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,a,i){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)r.d(i,e,function(a){return t[a]}.bind(null,e));return i},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=a,c=c.slice();for(var o=0;o<c.length;o++)a(c[o]);var p=l;s.push([0,"chunk-vendors"]),i()})({0:function(t,a,i){t.exports=i("56d7")},"00c8":function(t,a,i){t.exports=i.p+"img/n0-4.f8346c5a.jpg"},"034f":function(t,a,i){"use strict";var e=i("64a9"),n=i.n(e);n.a},1447:function(t,a,i){},"177f":function(t,a,i){t.exports=i.p+"img/n3-3.407feaeb.jpg"},"1be4":function(t,a,i){t.exports=i.p+"img/n3-2.10e9e365.jpg"},"1f0b":function(t,a,i){"use strict";var e=i("deac"),n=i.n(e);n.a},"21aa":function(t,a,i){t.exports=i.p+"img/n1-4.02344224.png"},2397:function(t,a,i){t.exports=i.p+"img/n3-7.3a33fba8.jpg"},"29b8":function(t,a,i){t.exports=i.p+"img/n1-6.1c2db34d.png"},"2d6d":function(t,a,i){t.exports=i.p+"img/n0-2.d59e4fdf.jpg"},"42d4":function(t,a,i){t.exports=i.p+"img/n3-6.d545a21e.jpg"},4456:function(t,a,i){"use strict";var e=i("59f7"),n=i.n(e);n.a},"56d7":function(t,a,i){"use strict";i.r(a);var e=i("2b0e"),n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},s=[],r=(i("034f"),i("2877")),c={},l=Object(r["a"])(c,n,s,!1,null,null,null),o=l.exports,p=i("8c4f"),v=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"index"},[i("N0"),i("N1"),i("N2"),i("N3"),i("N4"),i("N5"),i("N6")],1)},u=[],d=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("el-carousel",{attrs:{interval:5e3,arrow:"always",height:"680px"}},t._l(t.content,function(t,a){return i("el-carousel-item",{key:a},[i("img",{attrs:{src:t.imgUrl,alt:""}})])}),1)],1)},m=[],f={data(){return{content:[{title:"内容标题1",imgUrl:i("b304")},{title:"内容标题2",imgUrl:i("2d6d")},{title:"内容标题3",imgUrl:i("923d")},{title:"内容标题4",imgUrl:i("00c8")}]}}},g=f,k=(i("1f0b"),Object(r["a"])(g,d,m,!1,null,null,null)),_=k.exports,b=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"n1"},[i("h1",{staticClass:"n1-title"},[t._v(t._s(t.title))]),i("p",{staticClass:"n1-info"},[t._v(t._s(t.info))]),i("div",{staticClass:"n1-content"},[i("ul",t._l(t.content,function(a,e){return i("li",{key:e},[i("div",{staticClass:"n1-bg",class:{"n1-bg-enter":t.currentEnter===e,"n1-bg-leave":t.currentLeave===e},style:{backgroundImage:"url("+a.imgUrl+")"},on:{mouseenter:function(a){return t.imgMoveStart(e)},mouseout:function(a){return t.imgMoveEnd(e)}}}),i("p",{staticClass:"n1-bg-caption"},[t._v(t._s(a.caption))])])}),0)])])},C=[],h={name:"n1",data(){return{currentEnter:null,currentLeave:null,title:"大数据时代",info:"“数据，已经渗透到当今每一个行业和业务职能领域，成为重要的生产因素“",content:[{imgUrl:i("624f"),caption:"大数据"},{imgUrl:i("81e8"),caption:"云计算"},{imgUrl:i("70e5"),caption:"人工智能"},{imgUrl:i("21aa"),caption:"数据加工"},{imgUrl:i("aecd"),caption:"大数据"},{imgUrl:i("29b8"),caption:"云计算"},{imgUrl:i("7a9d"),caption:"人工智能"},{imgUrl:i("831b"),caption:"数据加工"},{imgUrl:i("ecec"),caption:"大数据"},{imgUrl:i("cbe2"),caption:"云计算"},{imgUrl:i("73ab"),caption:"人工智能"},{imgUrl:i("856e"),caption:"数据加工"}]}},methods:{imgMoveStart(t){this.currentEnter=t,this.currentLeave=null},imgMoveEnd(t){this.currentLeave=t,this.currentEnter=null}}},y=h,j=(i("78de"),Object(r["a"])(y,b,C,!1,null,"0e5061de",null)),x=j.exports,w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"n2"},[e("h1",{staticClass:"n2-title"},[t._v(t._s(t.title))]),e("p",{staticClass:"n2-info"},[t._v(t._s(t.info))]),e("div",{staticClass:"n2-content"},[e("el-row",t._l(4,function(a,n){return e("el-col",{key:n,attrs:{span:3,offset:n>0?4:0}},[e("el-card",{attrs:{"body-style":{padding:"0px"}}},[e("img",{staticClass:"image",attrs:{src:i("6f63")}}),e("div",{staticStyle:{padding:"14px"}},[e("span",[t._v("人与科技")]),e("div",{staticClass:"bottom clearfix"},[e("time",{staticClass:"time"},[t._v(t._s(t.currentDate))]),e("el-button",{staticClass:"button",attrs:{type:"text"}},[t._v("详情请点击")])],1)])])],1)}),1)],1)])},U=[],E={name:"n2",data(){return{currentIndex:0,title:"科学技术",info:"”人类文明技术“",currentDate:new Date}},methods:{showCard(t){this.currentIndex=t}}},O=E,I=(i("6ddf"),Object(r["a"])(O,w,U,!1,null,"a9494312",null)),N=I.exports,S=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"n3"},[i("h1",{staticClass:"n3-title"},[t._v(t._s(t.title))]),i("p",{staticClass:"n3-info"},[t._v(t._s(t.info))]),i("div",{staticClass:"n3-content"},[i("ul",t._l(t.content,function(a,e){return i("li",{key:e},[i("div",{staticClass:"n3-bg",style:{backgroundImage:"url("+a.imgUrl+")"}},[i("div",{staticClass:"n3-masking"},[i("p",{staticClass:"n3-caption"},[t._v(t._s(a.caption))]),i("p",{staticClass:"n3-desc"},[t._v(t._s(a.desc))])])])])}),0)])])},T=[],M={name:"n3",data(){return{currentEnter:null,currentLeave:null,title:"易用、精选、一站式的企业应用",info:"企业用户加入飞天会员，尊享更多低价，立即参与",content:[{imgUrl:i("812d"),caption:"大数据",desc:"一站式上云服务，帮助企业解决线下部署困难、自建成本过高、安全风险高、网络不稳定的问题。"},{imgUrl:i("1be4"),caption:"云计算",desc:"一站式上云服务，帮助企业解决线下部署困难、自建成本过高、安全风险高、网络不稳定的问题。"},{imgUrl:i("177f"),caption:"人工智能",desc:"一站式上云服务，帮助企业解决线下部署困难、自建成本过高、安全风险高、网络不稳定的问题。"},{imgUrl:i("99e6"),caption:"数据加工",desc:"一站式上云服务，帮助企业解决线下部署困难、自建成本过高、安全风险高、网络不稳定的问题。"},{imgUrl:i("751d"),caption:"大数据",desc:"一站式上云服务，帮助企业解决线下部署困难、自建成本过高、安全风险高、网络不稳定的问题。"},{imgUrl:i("42d4"),caption:"云计算",desc:"一站式上云服务，帮助企业解决线下部署困难、自建成本过高、安全风险高、网络不稳定的问题。"},{imgUrl:i("2397"),caption:"人工智能",desc:"一站式上云服务，帮助企业解决线下部署困难、自建成本过高、安全风险高、网络不稳定的问题。"},{imgUrl:i("cabe"),caption:"数据加工",desc:"一站式上云服务，帮助企业解决线下部署困难、自建成本过高、安全风险高、网络不稳定的问题。"}]}}},$=M,L=(i("d11f"),Object(r["a"])($,S,T,!1,null,"60c736c6",null)),P=L.exports,A=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"n4"},[i("h1",{staticClass:"n4-title"},[t._v(t._s(t.title))]),i("p",{staticClass:"n4-info"},[t._v(t._s(t.info))]),i("swiper",{ref:"mySwiper",staticClass:"swiper",attrs:{options:t.swiperOption},on:{someSwiperEvent:function(a){return t.callback()}}},[t._l(t.content,function(a,e){return i("swiper-slide",{key:e,staticClass:"swiper-item"},[i("div",[i("p",{staticClass:"n4-date"},[t._v("2020")]),i("p",{staticClass:"n4-caption"},[t._v(t._s(a.caption))]),i("div",{staticClass:"n4-view"},[i("a",{staticClass:"n4-icon",attrs:{href:""}},[t._v("VIEW")])]),i("p",{staticClass:"n4-desc"},[t._v(t._s(a.desc))]),i("div",{staticClass:"n4-img"},[i("img",{attrs:{src:a.imgUrl,alt:""}})])])])}),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),i("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),i("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"}),i("div",{staticClass:"swiper-scrollbar",attrs:{slot:"scrollbar"},slot:"scrollbar"})],2)],1)},B=[],D=(i("dfa4"),i("7212")),J={name:"n4",components:{swiper:D["swiper"],swiperSlide:D["swiperSlide"]},data(){return{swiperOption:{slidesPerView:"auto",scrollbar:{el:".swiper-scrollbar"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:!0},currentEnter:null,currentLeave:null,title:"全面、专业、智能的解决方案",info:"查看解决方案",content:[{imgUrl:i("bebe"),caption:"数字政府",desc:"开发者一站式学习平台，涵盖云计算、大数据、人工智能、IoT、编程语言等领域，快速提升开发技能。"},{imgUrl:i("bebe"),caption:"数字政府",desc:"开发者一站式学习平台，涵盖云计算、大数据、人工智能、IoT、编程语言等领域，快速提升开发技能。"},{imgUrl:i("bebe"),caption:"数字政府",desc:"开发者一站式学习平台，涵盖云计算、大数据、人工智能、IoT、编程语言等领域，快速提升开发技能。"},{imgUrl:i("bebe"),caption:"数字政府",desc:"开发者一站式学习平台，涵盖云计算、大数据、人工智能、IoT、编程语言等领域，快速提升开发技能。"},{imgUrl:i("bebe"),caption:"数字政府",desc:"开发者一站式学习平台，涵盖云计算、大数据、人工智能、IoT、编程语言等领域，快速提升开发技能。"},{imgUrl:i("bebe"),caption:"数字政府",desc:"开发者一站式学习平台，涵盖云计算、大数据、人工智能、IoT、编程语言等领域，快速提升开发技能。"},{imgUrl:i("bebe"),caption:"数字政府",desc:"开发者一站式学习平台，涵盖云计算、大数据、人工智能、IoT、编程语言等领域，快速提升开发技能。"}]}},methods:{imgMoveStart(t){this.currentEnter=t,this.currentLeave=null},imgMoveEnd(t){this.currentLeave=t,this.currentEnter=null}}},V=J,W=(i("ecd4"),Object(r["a"])(V,A,B,!1,null,"6f772865",null)),H=W.exports,q=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"n5"},[i("h1",{staticClass:"n5-title"},[t._v(t._s(t.title))]),i("p",{staticClass:"n5-info"},[t._v(t._s(t.info))]),i("div",{staticClass:"n5-content"},[i("ul",t._l(t.content,function(a,e){return i("li",{key:e},[i("div",{staticClass:"n5-card",class:{current:t.currentIndex===e},on:{mouseenter:function(a){return t.showCard(e)}}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.currentIndex!==e,expression:"currentIndex!==index"}]},[i("div",{staticClass:"n5-bgimg",style:{backgroundImage:"url("+a.imgUrl+")"}},[i("h4",{staticClass:"n5-caption"},[t._v(t._s(a.title))]),i("div",{staticClass:"n5-mask"}),i("h4",{staticClass:"n5-caption"},[t._v(t._s(a.title))])]),i("div",[i("p",[t._v(t._s(a.caption))])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.currentIndex===e,expression:"currentIndex===index"}]},[i("div",{staticClass:"current-bg",style:{backgroundImage:"url("+a.imgUrl+")"}},[i("div",{staticClass:"n5-current-mask"}),i("h4",{staticClass:"n5-current-caption"},[t._v(t._s(a.title))]),i("p",{staticClass:"current-desc"},[t._v(t._s(a.desc))])])])])])}),0)])])},z=[],F={name:"n5",data(){return{currentIndex:0,title:"必备爆款",info:"企业用户必备产品，助力企业上云企业实名认证享专属优惠",content:[{title:"内容标题1",imgUrl:i("e656"),desc:"基于百度天工 IOT 基础套件，垂直于智能家居方向，提供覆盖设备配网、注册、管理、控制、联动、OTA等全生命周期的一站式解决方案。帮助智能家居厂商更快捷地使用设备云服务，帮助企业节约人力成本，快速实现智能化转型"},{title:"内容标题2",imgUrl:i("b9d7"),desc:"天工能源物联网解决方案，是面向能源行业，融合百度智能云ABC技术和物联网技术的整体解决方案，由能源侧接入、天工物联网平台和能源应用三部分组成"},{title:"内容标题3",imgUrl:i("76d6"),desc:"基于百度天工 IOT 基础套件，垂直于智能家居方向，提供覆盖设备配网、注册、管理、控制、联动、OTA等全生命周期的一站式解决方案。帮助智能家居厂商更快捷地使用设备云服务，帮助企业节约人力成本，快速实现智能化转型"},{title:"内容标题4",imgUrl:i("6fbe"),desc:"天工能源物联网解决方案，是面向能源行业，融合百度智能云ABC技术和物联网技术的整体解决方案，由能源侧接入、天工物联网平台和能源应用三部分组成"},{title:"内容标题5",imgUrl:i("a2ea"),desc:"天工能源物联网解决方案，是面向能源行业，融合百度智能云ABC技术和物联网技术的整体解决方案，由能源侧接入、天工物联网平台和能源应用三部分组成"}]}},methods:{showCard(t){this.currentIndex=t}}},G=F,K=(i("79da"),Object(r["a"])(G,q,z,!1,null,"ab253cda",null)),Q=K.exports,R=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"n6"},[t._m(0),i("el-divider",{attrs:{"content-position":"right"}},[t._v("阿里云")]),i("p",{staticClass:"font"},[t._v("@2020 wanghuafeng.com 版权所有 翻版必究 沪12345678")]),i("p",{staticClass:"font"},[t._v("有事请拨打电话：12345678910,谢谢")])],1)},X=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"homepage-footer-main-services"},[i("div",{staticClass:"ali-main-services"},[i("span",{staticClass:"ali-main-services-title"},[t._v("支持与服务")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("联系我们")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("支持计划")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("新手学堂")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("帮助文档")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("自助工具")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("咨询与设计")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("迁移与部署")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("运维与管理")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("优化与提升")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("公告")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("聆听·建议反馈")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("服务案例")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("专家分享")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("上云能力中心CMC")])]),i("div",{staticClass:"ali-main-services"},[i("span",{staticClass:"ali-main-services-title"},[t._v("账户管理")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("管理控制台")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("备案管理")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("域名控制台")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("账号管理")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("云分期")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("充值付款")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("线下汇款/电汇")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("合同申请")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("索取发票")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("合规性")])]),i("div",{staticClass:"ali-main-services"},[i("span",{staticClass:"ali-main-services-title"},[t._v("快速入口")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("域名信息查询(WHOIS)")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("云产品查询")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("海外上云")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("客户案例")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("举报中心")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("信任中心")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("产品图标")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("产品学习路径")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("阿里云认证")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("贡献者榜单")])]),i("div",{staticClass:"ali-main-services"},[i("span",{staticClass:"ali-main-services-title"},[t._v("资源和社区")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("开发者社区")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("开发者社区")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("开发者社区")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("开发者社区")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("开发者社区")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("开发者社区")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("开发者社区")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("开发者社区")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("开发者社区")]),i("a",{staticClass:"ace-link ace-link-primary ali-main-services-link",attrs:{href:"javascript:void(0)",target:"_blank"}},[t._v("开发者社区")])])])}],Y={name:"n6",data(){return{}}},Z=Y,tt=(i("4456"),Object(r["a"])(Z,R,X,!1,null,null,null)),at=tt.exports,it={name:"index",components:{N0:_,N1:x,N2:N,N3:P,N4:H,N5:Q,N6:at}},et=it,nt=Object(r["a"])(et,v,u,!1,null,"37b78e1b",null),st=nt.exports;e["default"].use(p["a"]);var rt=new p["a"]({base:"",routes:[{path:"/",name:"index",component:st}]}),ct=(i("f5df"),i("5c96")),lt=i.n(ct);i("0fae");e["default"].config.productionTip=!1,e["default"].use(lt.a),new e["default"]({router:rt,render:function(t){return t(o)}}).$mount("#app")},"59f7":function(t,a,i){},"624f":function(t,a,i){t.exports=i.p+"img/n1-1.a343df4c.png"},"64a9":function(t,a,i){},"69d6":function(t,a,i){},"6ddf":function(t,a,i){"use strict";var e=i("91c5"),n=i.n(e);n.a},"6f63":function(t,a,i){t.exports=i.p+"img/n2.5527098e.jpg"},"6fbe":function(t,a,i){t.exports=i.p+"img/n5-bg4.7be4261f.png"},"70e5":function(t,a,i){t.exports=i.p+"img/n1-3.a8c6d457.png"},"73ab":function(t,a,i){t.exports=i.p+"img/n1-11.3decb074.png"},"751d":function(t,a,i){t.exports=i.p+"img/n3-5.239e879d.jpg"},"76d6":function(t,a,i){t.exports=i.p+"img/n5-bg3.d2163663.png"},"78de":function(t,a,i){"use strict";var e=i("69d6"),n=i.n(e);n.a},"79da":function(t,a,i){"use strict";var e=i("e1ff"),n=i.n(e);n.a},"7a9d":function(t,a,i){t.exports=i.p+"img/n1-7.11ca3c13.png"},"812d":function(t,a,i){t.exports=i.p+"img/n3-1.05c64bd4.jpg"},"81e8":function(t,a,i){t.exports=i.p+"img/n1-2.c2573cac.png"},"831b":function(t,a,i){t.exports=i.p+"img/n1-8.5010e9d5.png"},"856e":function(t,a,i){t.exports=i.p+"img/n1-12.8dd93add.png"},"91c5":function(t,a,i){},"923d":function(t,a,i){t.exports=i.p+"img/n0-3.b87e1a5e.jpg"},9617:function(t,a,i){},"99e6":function(t,a,i){t.exports=i.p+"img/n3-4.b386c517.jpg"},a2ea:function(t,a,i){t.exports=i.p+"img/n5-bg5.006d1ff0.png"},aecd:function(t,a,i){t.exports=i.p+"img/n1-5.09b47df9.png"},b304:function(t,a,i){t.exports=i.p+"img/n0-1.bb2af6b7.jpg"},b9d7:function(t,a,i){t.exports=i.p+"img/n5-bg2.b01b4e49.png"},bebe:function(t,a,i){t.exports=i.p+"img/n4-1.cac384d8.jpg"},cabe:function(t,a,i){t.exports=i.p+"img/n3-8.553a3f86.jpg"},cbe2:function(t,a,i){t.exports=i.p+"img/n1-10.586138ea.png"},d11f:function(t,a,i){"use strict";var e=i("9617"),n=i.n(e);n.a},deac:function(t,a,i){},e1ff:function(t,a,i){},e656:function(t,a,i){t.exports=i.p+"img/n5-bg1.fd0e8419.png"},ecd4:function(t,a,i){"use strict";var e=i("1447"),n=i.n(e);n.a},ecec:function(t,a,i){t.exports=i.p+"img/n1-9.e4d409df.png"}});
//# sourceMappingURL=app.012a0391.js.map