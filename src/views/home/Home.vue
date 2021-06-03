<template>
    <div class="project-item">
        <project-title></project-title>
              <h1>谭耀斌</h1>
               <h3>求职意向：Web前端开发</h3>
               <span class="myself">本人性格开朗，容易相处，待人友好，喜欢思考以及研究难题，有较强的学习能力。同时对编程语言非常感兴趣。对待工作认真负责，善于沟通、协调有较强的组织能力与团队精神。对一门新的编程语言能快速掌握熟悉，熟悉掌握前端开发的语言，Vue的思想编程，JavaScript，axios等技术，熟悉掌握html+css的语法，对linux系统有过研究，以及对element和bootstrap的使用有过一定的了解。</span>
    </div>
    
</template>

<script>
    // import ProjectTitle from '../../components/common/ProjectTitle.vue'
    const ProjectTitle = () => import('../../components/common/ProjectTitle.vue')
  export default {
    name:'Home',
    components:{
        ProjectTitle
    }
  }

</script>
<style scoped>
@import"../../assets/css/home.css";
</style>