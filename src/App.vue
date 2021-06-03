<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
// import MainTabBar from './components/tabbar/MainTabBar.vue'
const MainTabBar = () => import('./components/tabbar/MainTabBar.vue')

  export default {
    name:'App',
    components:{
        MainTabBar
    }
  
}
</script>

<style scoped>
    @import "assets/css/base.css";
    #app {
        width: 1000px;
        margin: 0 auto;
    }
</style>