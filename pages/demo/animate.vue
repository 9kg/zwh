<template>
  <section class="container">
    <el-row>
      <el-button class="animated bounce">btn_default</el-button>
      <el-button class="animated flash" type="primary">btn_primary</el-button>
      <el-button class="animated pulse" type="success">btn_success</el-button>
      <el-button class="animated rubberBand" type="info">btn_info</el-button>
      <el-button class="animated shake" type="warning">btn_warning</el-button>
      <el-button class="animated swing" type="danger">btn_danger</el-button>
    </el-row>
    <el-row>
      <el-button class="animated tada" icon="el-icon-search"></el-button>
      <el-button class="animated wobble" type="primary" icon="el-icon-edit"></el-button>
      <el-button class="animated jello" type="success" icon="el-icon-check"></el-button>
      <el-button class="animated bounceIn" type="info" icon="el-icon-message"></el-button>
      <el-button class="animated bounceInDown" type="warning" icon="el-icon-star-off"></el-button>
      <el-button class="animated bounce" type="danger" icon="el-icon-delete"></el-button>
      <el-button class="animated fadeIn" type="danger" icon="my-icon-spinner my-icon-spin"></el-button>
      <el-button class="animated fadeInUp" type="danger" icon="my-icon-book"></el-button>
    </el-row>
    <el-row>
      <el-button class="animated fade" icon="el-icon-search" circle></el-button>
      <el-button class="animated fade" type="primary" icon="el-icon-edit" circle></el-button>
      <el-button class="animated flip" type="success" icon="el-icon-check" circle></el-button>
      <el-button class="animated lightSpeedIn" type="info" icon="el-icon-message" circle></el-button>
      <el-button class="animated rotateIn" type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button class="animated rotate" type="danger" icon="el-icon-delete" circle></el-button>
      <el-button class="animated slideInDown" type="danger" icon="my-icon-spinner my-icon-spin" circle></el-button>
      <el-button class="animated zoomIn" type="danger" icon="my-icon-book" circle></el-button>
      <el-button class="animated slideInRight" type="danger" icon="my-icon-book" circle></el-button>
    </el-row>
  </section>
</template>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
  }
</style>

<script>
  export default {
    layout: 'demo'
  }

</script>
