<template>
  <section class="container">
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <el-row>
      <el-button icon="el-icon-search"></el-button>
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="success" icon="el-icon-check"></el-button>
      <el-button type="info" icon="el-icon-message"></el-button>
      <el-button type="warning" icon="el-icon-star-off"></el-button>
      <el-button type="danger" icon="el-icon-delete"></el-button>
      <el-button type="danger" icon="my-icon-spinner my-icon-spin"></el-button>
      <el-button type="danger" icon="my-icon-book"></el-button>
    </el-row>
    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
      <el-button type="danger" icon="my-icon-spinner my-icon-spin" circle></el-button>
      <el-button type="danger" icon="my-icon-book" circle></el-button>
    </el-row>
    <div>
      <i class="el-icon-edit"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-delete"></i>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>
    <div class="list-group">
      <i class="my-icon-home"></i>
      <i class="my-icon-book"></i>
      <i class="my-icon-pencil"></i>
      <i class="my-icon-cog"></i>
    </div>
    <div>
      <i class="my-icon-spinner my-icon-spin"></i>
      <i class="my-icon-circle-o-notch my-icon-spin"></i>
      <i class="my-icon-refresh my-icon-spin"></i>
      <i class="my-icon-cog my-icon-spin"></i>
      <i class="my-icon-spinner my-icon-pulse"></i>
    </div>
  </section>
</template>
<script>
  export default {
    layout: 'demo'
  }

</script>
