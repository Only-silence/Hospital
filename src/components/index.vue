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
    <!-- <div class="hospital-banner"></div> -->
  </div>
</template>

<script>
import center from '@/components/center.vue';
export default {
  components: {
		center
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
*{
  display: flex;
  /* width: 100%; */
}
.all{
  height: 100%;
  flex-direction: column;
}

/* title */
.hospital-title{
  width: 100%;
  height: 5.2%;
}

/* title-left */
.title-left{
  height: 100%;
  width: 50%;
  align-items: center;
  justify-content: center;
}
.title-left-log{
  height: 65%;
  width: 12%;
}
.logo-png{
  height: 98%;
  width: 98%;
}
.title-left-text{
  align-items: center;
  height: 65%;
  width: 57.5%;
}
.text-logo-png{
  height: 40%;
  width: 73.5%;
}

/* title-right */
.title-right{
  height: 100%;
  width: 50%;
}
.title-right-search{
  width: 100%;
  align-items: center;
  justify-content: flex-end;
}

/* search */
.search{
  width: 75%;
  height: 25%;
  border-radius: 20px;
  border: #18b3df solid 2px;
}
.search-icon{
  height: 100%;
  width: 11%;
  align-items: center;
  border-radius: 20px 0 0 20px;
}
.search-icon-sousuo{
  font-size: 1.5rem;
  margin-left: 20%;
  color: #000;
  font-weight: 500;
}
.search-input{
  height: 100%;
  width: 69%;
  border: 0;  
  outline: none; 
  background-color: rgba(0, 0, 0, 0);
}
.search-button{
  height: 100%;
  width: 20%;
  background: #18d2c7;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1rem;
  border-radius: 20px 20px 20px 20px;
}

/* phone */
.title-right-phone{
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-right: 5%;
}
.phone-icon{
  width: 17%;
  height: 50%;
}
.phon-png{
  width: 100%;
  height: 100%;
}
.phone-text{
  width: 55%;
  height: 50%;
  flex-direction: column;
}
.phone-text-up{
  height: 50%;
  width: 90%;
  font-size: 1.3rem;
  margin-left: 3%;
  font-weight: 600;
  align-items: center;
  color: #18d2c7;
}
.phone-text-down{
  height: 50%;
  width: 90%;
  font-size: 1.8rem;
  margin-left: 3%;
  font-weight: 600;
  align-items: center;
  color: #ffb82c;
}

/* tab */
.hospital-tab{
  height: 2.8%;
  align-items: center;
  justify-content: center;
}
.hospital-tab-edge{
  width: 8%;
  height: 100%;
  background-image:url('../assets/img/list-background.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border: #fff solid 1px;
}
.hospital-tab-list{
  height: 100%;
  flex: 1;
}
.hospital-tab-list-button{
  height: 100%;
  width: 100%;
  font-weight: 500;
  color: #fff;
  background-image:url('../assets/img/list-background.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  justify-content: center;
  align-items: center;
  border-left: #fff solid 1px;
  border-right: #fff solid 1px;
}

</style>
