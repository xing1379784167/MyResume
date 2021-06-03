<template>
    <div class="work-context">
        <project-title></project-title>
        <el-card class="box-card">
            <div v-for="(item,index) in work" :key="index" class="text item">
                <div class="date">{{item.date}}</div>
                <div class="company">{{item.company}}</div>
                <div class="job">{{item.job}}</div>
            </div>
          </el-card>
    </div>
</template>

<script>
    // import ProjectTitle from '../../components/common/ProjectTitle.vue'

    const ProjectTitle = () => import('../../components/common/ProjectTitle.vue')
  export default {
    name:'WorkContext',
    components:{
        ProjectTitle
    },
    data() {
        return {
            work:[
                {date:'时间',company:'公司名称',job:'职位名称'},
                {date:'2019/04-2020/06',company:'深圳市中升润丰汽车销售服务有限公司',job:'机修技师'},
                {date:'2018/09-2019/02',company:'中山市创世纪汽车有限公司（快车道）',job:'副店长'},
                {date:'2013/08-2018/09',company:'中山市创世纪汽车有限公司（北京现代车间）',job:'机电中大工'} 
            ]
        }
    },

  }

</script>
<style scoped>
@import"../../assets/css/workcontext.css";
</style>