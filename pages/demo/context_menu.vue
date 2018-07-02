<template>
  <div>
    <div @contextmenu.prevent="$refs.ctxMenu.open" class="right_click_area"></div>
    <no-ssr>
      <context-menu id="context-menu" ref="ctxMenu">
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-menu-item index="1">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </context-menu>
    </no-ssr>
  </div>
</template>
<style lang="scss" scoped>
  .right_click_area {
    width: 100px;
    height: 100px;
    background-color: #f37;
  }

</style>
<script>
  export default {
    methods: {
      doSomething(a) {
        console.log(a)
      }
    }
  }

</script>
