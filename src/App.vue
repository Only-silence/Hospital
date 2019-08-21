<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  beforeCreate: function() {
        document.getElementsByTagName("body")[0].setAttribute("style","background-color:white");
    },
  name: 'App'
}
</script>

<style>
/* @import './assets/font/iconfont.css'; */
@import '//at.alicdn.com/t/font_1356762_z4eh41ldanq.css';

@media (min-width: 1024px){
body{font-size: 18px}
} /*>=1024的设备*/

@media (min-width: 1100px) {
body{font-size: 20px}
} /*>=1100的设备*/
@media (min-width: 1280px) {
body{font-size: 22px;}
} /*>=1280的设备*/

@media (min-width: 1366px) {

body{font-size: 24px;}
}  

@media (min-width: 1440px) {
body{font-size: 25px !important;}
} 

@media (min-width: 1680px) {
body{font-size: 28px;}
} 
@media (min-width: 1920px) {
body{font-size: 33px;}
} 

*{
  margin: 0;
  padding: 0;
}
html,body,#app {
  height: 140%;
  width: 100.4%;
  font: normal 100% Helvetica, Arial, sans-serif;
  background-image:url('assets/img/phyy.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
