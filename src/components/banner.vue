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
              'background': 'url(http://image.uisdc.com/wp-content/uploads/2016/12/uisdc-banner-20161230-6.png)'
            }
          },
          {
            // html: 'slide2',
            style: {
              'background': 'url(http://image.uisdc.com/wp-content/uploads/2016/12/uisdc-banner-20161230-7.png)'
            }
          },
          {
            // html: 'slide3',
            style: {
              'background': 'url(http://image.uisdc.com/wp-content/uploads/2016/12/uisdc-banner-20161230-9.png)'
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