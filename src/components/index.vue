<template>
  <div class="all">
    <div class="hospital-title">
      <div class="title-left">
        <div class="title-left-log">
          <img class="logo-png" src="../assets/img/logo.png" alt="">
        </div>
        <div class="title-left-text">
          <img class="text-logo-png" src="../assets/img/logo-text.png" alt="">
        </div>
      </div>
      <div class="title-right">
        <div class="title-right-search">
          <div class="search">
            <div class="search-icon">
              <i class="iconfont icon-sousuo search-icon-sousuo"></i>
            </div>
            <input class="search-input" type="text" placeholder="请输入关键词">
            <div class="search-button">搜索</div>
          </div>
        </div>
        <div class="title-right-phone">
          <div class="phone-icon">
            <img class="phon-png" src="../assets/img/phone.png" alt="">
          </div>
          <div class="phone-text">
            <div class="phone-text-up">24小时健康热线</div>
            <div class="phone-text-down">0691-2229228</div>
          </div>
        </div>
      </div>
    </div>
    <div class="hospital-tab">
      <div class="hospital-tab-edge"></div>
      <div class="hospital-tab-list" v-for="(item, index) in list" :key="index">
        <div class="hospital-tab-list-button">
          <div>{{item.text}}</div>
        </div>
      </div>
      <div class="hospital-tab-edge"></div>
    </div>
    <center/>
    <!-- <div class="hospital-tail">
      <tail/>
    </div> -->
    <!-- <div class="hospital-banner"></div> -->
  </div>
</template>

<script>
import center from '@/components/center.vue';
import tail from '@/components/tail.vue';
export default {
  components: {
    center,
    tail
	},
  data () {
    return {
      list:[
        {
          text: '首页'
        },
        {
          text: '医院概况'
        },
        {
          text: '就医指南'
        },
        {
          text: '科室预览'
        },
        {
          text: '医院荣誉'
        },
        {
          text: '招聘信息'
        },
        {
          text: '联系我们'
        }
      ]
    }
  },
  computed:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(../css/index.css);
</style>
