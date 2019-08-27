<template>
  <div class="all">
    <div class="hospital-banner">
      <banner />
    </div>
    <div class="hospital-function">
      <div class="function">
        <div class="function-list" v-for="(item, index) in functionList" :key="index">
          <div class="function-list-icon">
            <img class="icon-img" :src="item.imgUrl" alt />
          </div>
          <div class="function-list-text">
            <div class="function-list-text-up">{{item.functionText}}</div>
            <div class="function-list-text-down">{{item.functionTextEn}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="hospital-news">
      <div class="news">
        <div>
          <bannerSmall />
        </div>
        <div class="news-culture">
          <div class="news-culture-title">
            <div class="titleUp">
              <div>NEWS</div>
              <div>&nbsp;&&nbsp;</div>
              <div>CULTURE</div>
            </div>
            <div class="title">
              <div
                class="title-list"
                v-for="(item,index) in titleList"
                :key="index"
                @click="selectItem(index)"
              >
                <div>{{item.titleText}}</div>
                <div>{{item.line}}</div>
              </div>
            </div>
            <div class="newsOne" v-if="isShow == 0">
              <div class="newsOne-list" v-for="(item,index) in newOneList" :key="index">
                <div class="newOne-left">{{item.textLeft}}</div>
                <div class="newOne-right">{{item.textTime}}</div>
              </div>
            </div>
            <div v-if="isShow == 1">2</div>
            <div v-if="isShow == 2">3</div>
            <div v-if="isShow == 3">4</div>
          </div>
        </div>
        <div class="news-guide">
          <div class="guid-title">
            <div class="guid-title-up">
              <div>CLINIC</div>
              <div>GUIDE</div>
            </div>
            <div class="guid-title-down">就医指南</div>
          </div>
          <div class="guid-down">
            <div class="guid-down-one">
              <div class="one-left background1">门诊指南</div>
              <div class="one-right">
                <div class="one-right-left guid-margin background2">
                  <div class="guid-down-text">急症指南</div>
                </div>
                <div class="one-right-right background2">
                  <div class="guid-down-text">住院流程</div>
                </div>
              </div>
            </div>
            <div class="guid-down-two">
              <div class="two-left background2">医保专区</div>
              <div class="two-right background1">医院地图</div>
            </div>
            <div class="guid-down-one">
              <div class="one-right">
                <div class="one-right-left background1">
                  <div class="guid-down-text">科室介绍</div>
                </div>
                <div class="one-right-right guid-margin background1">
                  <div class="guid-down-text">楼层分布</div>
                </div>
              </div>
              <div class="one-left background2">网上挂号</div>
            </div>
            <div class="guid-down-two">
              <div class="two-left background2">健康体检</div>
              <div class="two-right background1">特色服务</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hospital-doctor">
      <div class="doctor">
        <div class="doctor-title">
          <div>QUALIFICATION</div>
          <div>&nbsp;&&nbsp;</div>
          <div>TECHNICAL</div>
        </div>
        <div class="doctor-tab">
          <div class="doctor-tab-one" :class="{ 'doctor-tab-background':show }" @click="tab">
            <div class="doctor-tab-text">名医荟萃</div>
          </div>
          <div class="doctor-tab-two" :class="{ 'doctor-tab-background':show1 }" @click="tab2">
            <div class="doctor-tab-text">先进设备</div>
          </div>
          <div></div>
        </div>
        <div class="doctor-list" v-if="show">
          <div class="doctor-list-name" v-for="(item,index) in doctor" :key="index">
            <img class="doctor-list-img" :src="item.img" alt />
            <div class="doctor-list-text">
              <div>{{item.name}}</div>
              <div>{{item.post}}</div>
            </div>
            <div class="doctor-list-button">查看详情</div>
          </div>
        </div>
        <div v-if="show1">
          XXXXXXXXXXXX
        </div>
      </div>
    </div>
    <div class="hospital-healthcare">
      <div class="healthcare">
        <div class="healthcare-title">
          <div>HEALTH&nbsp;</div>
          <div>CARE</div>
        </div>
        <div class="healthcare-for">
          <div class="healthcare-list" v-for="(item,index) in healthcare" :key="index">
            <div class="healthcare-list-title">
              <div class="healthcare-list-title-left">{{item.healthcareTitle}}</div>
              <div class="healthcare-list-title-right">More</div>
            </div>
            <div class="healthcare-center" v-for="(list,key) in item.healthcareCenter" :key="key">
              <div class="healthcare-center-left">{{list.textLeft}}</div>
              <div class="healthcare-center-right">{{list.textTime}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from "@/components/banner.vue";
import bannerSmall from "@/components/bannerSmall.vue";
export default {
  components: {
    banner,
    bannerSmall
  },
  data() {
    return {
      isShow: 0,
      show: true,
      show1: false,
      functionList: [
        {
          imgUrl: require("@/assets/img/order-icon.png"),
          functionText: "预约挂号",
          functionTextEn: "Appointment"
        },
        {
          imgUrl: require("@/assets/img/examine-icon.png"),
          functionText: "门诊安排",
          functionTextEn: "Outpatient arrangement"
        },
        {
          imgUrl: require("@/assets/img/email-icon.png"),
          functionText: "院长信箱",
          functionTextEn: "President's mailbox"
        },
        {
          imgUrl: require("@/assets/img/phone-icon.png"),
          functionText: "常用电话",
          functionTextEn: "Common phone"
        }
      ],
      titleList: [
        {
          line: "|",
          titleText: "新闻动态"
        },
        {
          line: "|",
          titleText: "医院文化"
        },
        {
          line: "|",
          titleText: "医院概况"
        },
        {
          titleText: "政策法规"
        }
      ],
      newOneList: [
        {
          textLeft: "我院开展手足口病防控宣传活动",
          textTime: "2018-09-26"
        },
        {
          textLeft: "我院开展手足口病防控宣传活动",
          textTime: "2018-09-26"
        },
        {
          textLeft: "我院开展手足口病防控宣传活动",
          textTime: "2018-09-26"
        },
        {
          textLeft: "我院开展手足口病防控宣传活动",
          textTime: "2018-09-26"
        },
        {
          textLeft: "我院开展手足口病防控宣传活动",
          textTime: "2018-09-26"
        },
        {
          textLeft: "我院开展手足口病防控宣传活动",
          textTime: "2018-09-26"
        },
        {
          textLeft: "我院开展手足口病防控宣传活动",
          textTime: "2018-09-26"
        },
        {
          textLeft: "我院开展手足口病防控宣传活动",
          textTime: "2018-09-26"
        },
        {
          textLeft: "我院开展手足口病防控宣传活动",
          textTime: "2018-09-26"
        },
        {
          textLeft: "我院开展手足口病防控宣传活动",
          textTime: "2018-09-26"
        }
      ],
      doctor: [
        {
          img: require("@/assets/img/doctor1.png"),
          name: "顾海丽",
          post: "妇科手术主任"
        },
        {
          img: require("@/assets/img/doctor2.png"),
          name: "余兰",
          post: "专家门诊主任医师"
        },
        {
          img: require("@/assets/img/doctor3.png"),
          name: "李云朝",
          post: "XXX医院医生"
        },
        {
          img: require("@/assets/img/doctor4.png"),
          name: "毛健清",
          post: "住院部医生"
        },
        {
          img: require("@/assets/img/doctor5.png"),
          name: "邹军",
          post: "皮肤泌尿专科主任"
        }
      ],
      healthcare: [
        {
          healthcareTitle:"家庭保健",
          healthcareCenter:[
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            }
          ]
        },
        {
          healthcareTitle:"饮食保健",
          healthcareCenter:[
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            }
          ]
        },
        {
          healthcareTitle:"病人护理",
          healthcareCenter:[
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            }
          ]
        },
        {
          healthcareTitle:"用药常识",
          healthcareCenter:[
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            }
          ]
        },
        {
          healthcareTitle:"疾病防治",
          healthcareCenter:[
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            }
          ]
        },
        {
          healthcareTitle:"医学知识",
          healthcareCenter:[
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            },
            {
              textLeft: "我院开展手足口病防控宣传活动",
              textTime: "2018-09-26"
            }
          ]
        }
      ]
    };
  },
  methods: {
    selectItem(i) {
      this.isShow = i;
    },
    tab(i) {
      this.show = true;
      this.show1 = false;
    },
    tab2(i) {
      this.show1 = true;
      this.show = false;
    }
  }
};
</script>

<style scoped>
@import url(../css/center.css);
</style>