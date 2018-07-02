<template>
  <div class="page-menu">
    <h1 class="title">{{menuCollapse ? '9kg' : '9kg\'s logo'}}</h1>
    <el-menu
      :default-active="cur_route"
      class="el-menu-common"
      @select="jumpPage"
      :collapse="menuCollapse">
      <template v-for="menuItem in menu">
        <el-menu-item
          v-if="!menuItem.children"
          :key="`${menuItem.link}`"
          :index="`${menuItem.link}`">
          <i :class="menuItem.icon"></i>
          <span slot="title">{{menuItem.text}}</span>
        </el-menu-item>
        <el-submenu v-if="!!menuItem.children" :key="menuItem.link" :index="`${menuItem.link}`">
          <template slot="title">
            <i :class="menuItem.icon"></i>
            <span slot="title">{{menuItem.text}}</span>
          </template>
          <el-menu-item
            v-for="child in menuItem.children"
            :key="`${menuItem.link}${child.link}`"
            :index="`${menuItem.link}${child.link}`">
            {{child.text}}
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    data() {
      return {
        
      }
    },
    computed: {
      ...mapState('common', ['menuCollapse','activeIndex']),
      ...mapState(['user','menu']),
      cur_route(){
        return this.$route.path
      }
    },
    methods: {
      jumpPage(path){
        this.$router.push(path);
      }
    }
  }

</script>
<style lang="scss" scoped>
  // 用户区域高度
  $user-area-height: 88px;
  // 菜单项高度
  $item-height: 40px;
  // 菜单项高度-折叠时
  $item-collapse-height: 54px;
  // 菜单项内边距
  $item-padding: 0 6px !important;
  // 菜单项内边距-折叠时
  $item-collapse-padding: 5px 17px !important;
  // 菜单项icon大小
  $item-fontsize: 16px;
  // 菜单项icon大小-折叠时
  $item-collapse-fontsize: 24px;
  // 展开折叠动画过渡时间
  $transition-time: .3s;
  // 顶部标题大小
  $title-fontsize: 20px;
  // 菜单项激活时的左部bar宽度
  $active-bar-width: 4px;
  // icon color
  $c-icon: #84849d;
  .page-menu {
    width: $page-menu-width;
    transition: all $transition-time;
    background-color: $c-theme;
    &>.el-menu{
      height: calc(100% - #{$user-area-height} - #{$page-header-height});
      overflow: auto;
    }
  }
  .menu-collapse{
    .page-menu{
      width: $page-menu-collapse-width;
      .user-area{
        margin-top: -$user-area-height;
        margin-left: calc(#{$page-menu-collapse-width} - #{$page-menu-width});
      }
      >.el-menu{
        height: calc(100% - #{$page-header-height});
      }
    }
  }
  .el-menu-common:not(.el-menu--collapse) {
    width: $page-menu-width;
  }
  .title{
    height: $page-header-height;
    margin: 0;
    font-size: $title-fontsize;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;
    z-index: 1;
    background-color: mix($c-black, $c-theme, 30%);
    overflow: hidden;
  }
  .inner-dropdown{
    width: calc(100% + 15px);
    margin-right: -15px;
    padding-right: 20px;
    box-sizing: border-box;
  }
  .el-dropdown-menu /deep/{
    i{
      color: $c-text-placeholder;
      margin-right: 5px;
      &.el-icon-arrow-right{
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  // 样式重置
  .el-menu--vertical{
      // 收缩后的二级菜单被追加到body后，内部样式hack
      .el-menu-item{
        /deep/{
          padding-left: 30px!important;
          background-color: $c-theme;
        }
        &:first-child /deep/{
          margin-top: -5px;
        }
        &:last-child /deep/{
          margin-bottom: -5px;
        }
     }
  }
  /deep/ .el-menu {
    background-color: transparent;
    border-right: none;
    .el-menu {
      background-color: mix($c-black, $c-theme, 20%);
    }
  }

  .el-menu-item, /deep/ .el-submenu__title {
    padding: $item-padding;
    height: $item-height;
    line-height: $item-height;
    color: #fff;
    transition: all $transition-time;
    text-overflow: ellipsis;
    &:hover,
    &:focus {
      background-color: mix($c-black, $c-theme, 10%);
    }
    [class^="my-icon-"]{
      font-size: $item-fontsize;
      color: $c-icon;
      transition: all $transition-time;
    }
  }
  
  /deep/ .el-submenu__title {
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 35px!important;
    .el-submenu__icon-arrow {
      transform: rotateZ(90deg);
    }
  }
  .el-menu-item, /deep/ .el-menu--collapse .el-submenu{
    overflow: hidden;
    &:after {
      content: '';
      position: absolute;
      height: 100%;
      width: $active-bar-width;
      background-color: mix($c-black, $c-theme, 40%);
      left: 0;
      top: 0;
      transform: translateX(-$active-bar-width);
      transition: all $transition-time;
    }
    &.is-active {
      background-color: mix($c-black, $c-theme, 40%);
      &:after {
        background-color: $c-main;
        transform: translateX(0);
      }
    }
    .el-tooltip{
      transition: all $transition-time;
    }
  }
  
  /deep/ .el-submenu {
    .el-menu-item {
      min-width: auto;
      padding: 0 36px!important;
      &:hover,
      &:focus {
        background-color: mix($c-black, $c-theme, 40%);
      }
    }
    &.is-opened {
      >.el-submenu__title {
        background-color: mix($c-black, $c-theme, 10%);
        .el-submenu__icon-arrow {
            transform: rotateZ(0deg);
        }
      }
    }
  }
  /deep/ .el-menu--collapse {
    width: $page-menu-collapse-width;
    .el-tooltip,.el-submenu__title {
      padding: $item-collapse-padding;
      transition: all $transition-time;
    }
    .el-menu-item,.el-submenu__title{
      text-overflow: inherit;
      height: $item-collapse-height;
      [class^="my-icon-"]{
        font-size: $item-collapse-fontsize;
      }
    }
  }

  /deep/ .v-leave-to{
    .el-menu-item,.el-submenu__title{
      width: $page-menu-width;
      padding: $item-padding;
      text-overflow: inherit;
      height: $item-height;
      [class^="my-icon-"]{
        font-size: $item-fontsize;
        &+span{
          display: none;
        }
      }
      .el-tooltip,.el-submenu__title {
        padding: $item-padding;
        height: $item-height;
      }
    }
    .el-submenu.is-opened > .el-menu{
      display: none;
    }
    &:not(.el-menu--collapse){
      .el-menu-item,.el-submenu__title{
        width: $page-menu-collapse-width;
        padding: $item-collapse-padding;
        text-overflow: inherit;
        height: $item-collapse-height;
        [class^="my-icon-"]{
          font-size: $item-collapse-fontsize;
        }
      }
    }
  }
  
</style>