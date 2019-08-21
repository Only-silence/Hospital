<template>
    <div class="all">
        <div class="hospital-banner">
            <banner/>
        </div>
        <div class="hospital-function">
          <div class="function">
            <div class="function-list" v-for="(item, index) in functionList" :key="index">
              <div class="function-list-icon">
                <img class="icon-img" :src="item.imgUrl" alt="">
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
                <bannerSmall/>
              </div>
              <div class="news-culture">
                <div class="news-culture-title">
                  <div class="titleUp">
                    <div>NEWS</div>
                    <div>&</div>
                    <div>CULTURE</div>
                  </div>
                  <div class="title">
                    <div class="title-list" v-for="(item,index) in titleList" :key="index" @click="selectItem(index)">
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
                  <div v-if="isShow == 1">
                    2
                  </div>
                  <div v-if="isShow == 2">
                    3
                  </div>
                  <div v-if="isShow == 3">
                    4
                  </div>
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
                    <div class="one-left">门诊指南</div>
                    <div class="one-right">
                      <div class="one-right-left"></div>
                      <div class="one-right-right"></div>
                    </div>
                  </div>
                  <div class="guid-down-two"></div>
                  <div class="guid-down-three"></div>
                  <div class="guid-down-four"></div>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import banner from '@/components/banner.vue';
import bannerSmall from '@/components/bannerSmall.vue';
export default {
    components: {
      banner,
      bannerSmall
    },
    data () {
      return {
        isShow: 0,
        functionList:[
          {
            imgUrl:require("@/assets/img/order-icon.png"),
            functionText:"预约挂号",
            functionTextEn:"Appointment"
          },
          {
            imgUrl:require("@/assets/img/examine-icon.png"),
            functionText:"门诊安排",
            functionTextEn:"Outpatient arrangement"
          },
          {
            imgUrl:require("@/assets/img/email-icon.png"),
            functionText:"院长信箱",
            functionTextEn:"President's mailbox"
          },
          {
            imgUrl:require("@/assets/img/phone-icon.png"),
            functionText:"常用电话",
            functionTextEn:"Common phone"
          }
        ],
        titleList:[
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
        newOneList:[
          {
            textLeft:"我院开展手足口病防控宣传活动",
            textTime:"2018-09-26"
          },
          {
            textLeft:"我院开展手足口病防控宣传活动",
            textTime:"2018-09-26"
          },
          {
            textLeft:"我院开展手足口病防控宣传活动",
            textTime:"2018-09-26"
          },
          {
            textLeft:"我院开展手足口病防控宣传活动",
            textTime:"2018-09-26"
          },
          {
            textLeft:"我院开展手足口病防控宣传活动",
            textTime:"2018-09-26"
          },
          {
            textLeft:"我院开展手足口病防控宣传活动",
            textTime:"2018-09-26"
          },
          {
            textLeft:"我院开展手足口病防控宣传活动",
            textTime:"2018-09-26"
          },
          {
            textLeft:"我院开展手足口病防控宣传活动",
            textTime:"2018-09-26"
          },
          {
            textLeft:"我院开展手足口病防控宣传活动",
            textTime:"2018-09-26"
          },
          {
            textLeft:"我院开展手足口病防控宣传活动",
            textTime:"2018-09-26"
          }
        ]
      }
    },
    methods:{
      selectItem(i) {
        this.isShow = i;
      }
    }
}
</script>

<style scoped>
.all{
    width: 100%;
    height: 100%;
}
/* banner */
.hospital-banner{
  height: 23%;
}
/* function */
.hospital-function{
  height: 4.6%;
  margin: 0.5% 0;
  display: flex;
  justify-content: center;
}
.function{
  width: 73%;
  height: 100%;
  display: flex;
  border-top: #06b2c6 solid 2.5px;
  border-bottom: #06b2c6 solid 2.5px;
}
.function-list{
  height: 100%;
  width: 24.5%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.2%;
  background: #f1f1f1;
}
.function-list-icon{
  height: 100%;
  width: 34%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.function-list-text{
  height: 100%;
  width: 39%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.function-list-text>:first-child{
  color: #06b2c6;
  font-size: 1.6rem;
}
.function-list-text>:last-child{
  color: #a1a1a1;
  font-size: 0.1rem;
}
.icon-img{
  border-radius: 50px;
}
/* news */
.hospital-news{
  margin: 1.2% 0;
  height: 18.2%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: #f00 solid 1px;
}
.news{
  height: 100%;
  width: 73%;
  display: flex;
}
.news>:first-child{
  height: 100%;
  width: 33%;
}
.news-culture{
  height: 100%;
  width: 36%;
  border-right: #a1a1a1 solid 2px;
  margin: 0 1%;
}
.news-guide{
  height: 100%;
  width: 29%;
}
.news-culture-title{
  width: 88%;
  height: 100%;
  margin: 0 6%;
}
.titleUp{
  height: 7%;
  width: 45%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #c1c1c1;
  margin-top: 1%;
}
.titleUp>:first-child{
  color: #686666;
}
.titleUp>:last-child{
  color: #06b2c6;
}
.title{
  height: 9.3%;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: #06b2c6 solid 2px;
}
.title-list{
  width: 24%;
  font-size: 1.25rem;
  font-weight: 500;
  display: flex;
  align-items: center;
}
.title-list>:last-child{
  margin: 0 7%;
}
.newsOne{
  height: 82.5%;
}
.newsOne-list{
  margin: 3% 0;
  height: 6%;
  font-size: 1.1rem;
  display: flex;
}
.newOne-left{
  height: 100%;
  width: 78%;
  color: #686666;
}
.newOne-right{
  height: 100%;
  width: 21%;
  color: #69eaf3;
}
.news-guide{
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  border:#f00 solid 1px;
}
.guid-title{
  width: 95%;
  margin-top: 2%;
  height: 15%;
  border-bottom: #a1a1a1 solid 1.5px;
}
.guid-title-up{
  display: flex;
  font-size: 1.4rem;
}
.guid-title-up>:last-child{
  color: #69eaf3;
}
.guid-title-down{
  height: 60%;
  width: 22%;
  font-size: 1.3rem;
  border-bottom: #69eaf3 solid 2px;
}
.guid-down{
  height: 78%;
  width: 95%;
  color: #fff;
  font-size: 1.5rem;
  margin-top: 4%;
  display: flex;
  flex-direction: column;
  border: #f00 solid 1px;
}
.guid-down-one{
  flex: 1;
  display: flex;
  margin-bottom: 1%;
  border: #f00 solid 1px;
}
.one-left{
  height: 100%;
  width: 49%;
  background-image:url('../assets/img/guid-background1.png');
  display: flex;
  align-items: center;
  justify-content: center;
}
.one-right{
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: #f00 solid 1px;
}
.one-right-left{
  height: 100%;
  width: 50%;
  border: #f00 solid 1px;
}
.one-right-right{
  height: 100%;
  width: 50%;
  border: #f00 solid 1px;
}
.guid-down-two{
  flex: 1;
  margin-bottom: 1%;
  border: #f00 solid 1px;
}
.guid-down-three{
  flex: 1;
  margin-bottom: 1%;
  border: #f00 solid 1px;
}
.guid-down-four{
  flex: 1;
  margin-bottom: 1%;
  border: #f00 solid 1px;
}
</style>