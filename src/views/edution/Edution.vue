<template>
  <div class="edution-item">
     <project-title></project-title>
        <div><h3>教育背景</h3></div>
          　<el-row :gutter="20">
            <el-col :span="6" v-for="(item,index) in edutiontitle" :key="index"><div class="grid-content bg-purple" >{{item}}</div></el-col>
           
          </el-row>
  </div>
</template>

<script>
// import ProjectTitle from '../../components/common/ProjectTitle.vue'
const ProjectTitle = () => import('../../components/common/ProjectTitle.vue')
  export default {
    name:'Edution',
    data() {
        return {
            edutiontitle:['2010/09-2013/06','广东机电职业技术学院','汽车检测与维修','大专']
        }
    },
    components:{
        ProjectTitle
    }
  }

</script>
<style  scoped>
@import "../../assets/css/edution.css";
</style>