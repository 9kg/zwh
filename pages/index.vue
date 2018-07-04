<template>
  <div class="container">
    <header>
      <span class="title">
        <img src="/img/logo.png" :alt="baseInfo.title">
        {{ baseInfo.title }}
      </span>
      <small v-if="baseInfo.desc">——<span>{{ baseInfo.desc }}</span></small>
    </header>
    <div class="banner_container">
      <el-carousel :interval="5000" type="card" height="200px">
        <el-carousel-item v-for="item in 3" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="types_container">
      <el-tabs v-model="activeTypeId">
        <el-tab-pane
          v-for="(type, index) in typeList"
          :key="type.id"
          :name="type.id"
        >
          <span slot="label" class="type_title">{{ type.title }}</span>
          <div v-html="type.content"></div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <footer>
      <span>
        {{ baseInfo.copyright }}
      </span>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
  .container{
    display: flex;
    flex-direction: column;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: linear-gradient(190deg, rgba($c-theme, 0.75) 0%, rgba(146, 172, 204, .9) 50%, white 100%), url('/img/bg.jpg');
  }
  header{
    font-size: 30px;
    font-weight: bold;
    letter-spacing: .2em;
    text-align: center;
    height: 50px;
    line-height: 50px;
    width: 100%;
    flex-shrink: 0;
    text-shadow: 1px 3px 3px rgba($c-main, .5);
    margin-bottom: 20px;
    color: #fff;
    transition: all .3s;
    position: relative;
    .title{
      position: relative;
      img{
        position: absolute;
        width: 100px;
        height: 20px;
        left: -130px;
        top: 50%;
        margin-top: -10px;
      }
    }
    small{
      position: absolute;
      bottom: -20px;
      font-size: 14px;
      right: 20%;
      height: 20px;
      line-height: 20px;
      letter-spacing: normal;
      transition: all .3s;
      text-shadow: none;
      span{
        margin-left: 15px;
      }
    }
  }
  footer{
    font-size: 12px;
    color: $c-text-secondary;
    height: 30px;
    flex-shrink: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
      display: flex;
      white-space: nowrap;
      transition: all .3s;
    }
  }
  .banner_container{
    height: 240px;
    width: 100%;
    padding: 10px 50px;
    flex-shrink: 0;
    box-sizing: border-box;
    // background-color: #ccc;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  
  .types_container{
    height: calc(100% - 360px);
    flex-grow: 1;
    box-sizing: border-box;
    width: 100%;
  }
  .type_title{
    font-weight: bold;
    font-size: 18px;
    transition: all .3s;
  }
  .el-tabs /deep/{
    height: 100%;
    display: flex;
    flex-direction: column;
    .el-tabs__header{
      flex-shrink: 0;
      margin-bottom: 0;
      padding: 0 50px;
    }
    .el-tabs__content{
      height: 100%;
      flex-grow: 1;
      overflow: auto;
      padding: 10px 50px;
      box-sizing: border-box;
    }
  }
  /deep/ .el-tabs__nav-next,/deep/ .el-tabs__nav-prev{
    color: #efefef;
  }
  @media (max-width: 768px) {
    header{
      font-size: 16px;
      .title{
        img{
          width: 40px;
          height: 8px;
          left: -43px;
          top: 50%;
          margin-top: -4px;
        }
      }
      small{
        font-size: 12px;
        right: 10%;
      }
    }
    footer{
      span{
        transform: scale(.6);
      }
    }
    .type_title{
      font-size: 14px;
    }
  }
</style>

<script>
  export default {
    async asyncData({ app }) {
      let baseInfo = await app.$axios.$post('mock/set/getBase');
      let moduleInfo = await app.$axios.$post('mock/set/getModule');
      return {
        baseInfo: baseInfo || {},
        typeList: moduleInfo || [],
        activeTypeId: moduleInfo && moduleInfo[0] ? moduleInfo[0].id : ''
      }
    },
    data() {
      return {

      }
    },
    mounted() {
      
    },
    layout: 'full_screen'
  }

</script>
