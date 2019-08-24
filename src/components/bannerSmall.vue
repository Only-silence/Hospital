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
              'background': 'url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2763906314,2105266325&fm=26&gp=0.jpg)'
            }
          },
          {
            // html: 'slide2',
            style: {
              'background': 'url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2763906314,2105266325&fm=26&gp=0.jpg)'
            }
          },
          {
            // html: 'slide3',
            style: {
              'background': 'url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2763906314,2105266325&fm=26&gp=0.jpg)'
            }
          }
        ],
        //Slider configuration [obj]
        options: {
          currentPage: 0
        }
      }
    },
    components: {
      slider,
      slideritem
    }
}
</script>