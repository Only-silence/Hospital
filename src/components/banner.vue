<template name="banner">
<!-- Make a div wrapped slider,set height and width -->
 <div style="width:100%;height:100%">
      <!-- Using the slider component -->
      <slider ref="slider" :options="options">
          <!-- slideritem wrapped package with the components you need -->
          <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">{{item.html}}</slideritem>
          <!-- Customizable loading -->
          <div slot="loading">loading...</div>
      </slider>
 </div>
</template>
<script>
// import slider components
import { slider, slideritem } from 'vue-concise-slider'
export default {
   el: '#app',
   data () {
      return {
        //data list [array]
        someList:[
          {
            // html: 'slide1',
            style: {
              'background': 'url(http://img2.imgtn.bdimg.com/it/u=3864177753,3040528167&fm=26&gp=0.jpg)'
            }
          },
          {
            // html: 'slide2',
            style: {
              'background': 'url(http://img5.imgtn.bdimg.com/it/u=128087870,3045749721&fm=26&gp=0.jpg)'
            }
          },
          {
            // html: 'slide3',
            style: {
              'background': 'url(http://img5.imgtn.bdimg.com/it/u=3514761049,1866138884&fm=26&gp=0.jpg)'
            }
          }
        ],
        //Slider configuration [obj]
        options: {
          currentPage: 0,
          autoplay: 5000,
          loop:true,
          infinite:1,//无限滚动前后遍历数
          slidesToScroll:1//每次滑动项数
        }
      }
    },
    components: {
      slider,
      slideritem
    }
}
</script>