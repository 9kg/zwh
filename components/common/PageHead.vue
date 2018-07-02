<template>
  <header class="page-head">
    <div class="oper_container">
      <el-button icon="el-icon-setting" @click="$router.push('/set/')">配置首页</el-button>
    </div>
    <div class="oper_container">
      <el-button icon="my-icon-home" @click="$router.push('/')">主页</el-button>
    </div>
  </header>
</template>
<style lang="scss" scoped>
  $btn-color: rgba($c-theme, .85);
  .el-button{
    border: none;
    font-size: 14px;
    color: $btn-color;
    background-color: transparent;
    border-radius: 0px;
    & + .el-button{
      margin-left: 0;
    }
    &:hover, &:focus {
        border-color: rgba($c-main, .35);
        background-color: rgba($c-main, .15);
    }
    &:focus:not(:hover){
      background-color: transparent;
      color: rgba($c-theme, .85);
    }
  }
  /deep/ .my-icon-outdent{
    transition: all .5s;
  }
  .menu-collapse .el-button /deep/ .my-icon-outdent{
    transform: rotateY(180deg);
  }
  .page-head {
    height: $page-header-height;
    background-color: $c-white;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 0 6px rgba(0,0,0,.2);
    position: relative;
    z-index: 1;
  }
  .oper_container{
    display: flex;
  }
  .collapse_btn, .msg_btn{
    width: 50px;
  }
</style>

<script>
  import { mapState, mapMutations } from 'vuex'
  
  export default {
    data() {
      return {
        langs: ['cn', 'en']
      }
    },
    computed: {
      // ...mapState('common', ['menuCollapse'])
    },
    methods: {
      ...mapMutations('common', ['TOGGLE_MENUCOLLAPSE']),
      exchangeLang(val) {
        this.$emit('langChange', val)
      },
      go_home(){
        location.href = `${location.protocol}//${location.host}`
      }
    }
  }

</script>
