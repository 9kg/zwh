<template>
  <div class="container">
    <header>{{ baseInfo.title }}</header>
    <div class="types_container">
      <el-tabs v-model="activeTypeId">
        <el-tab-pane
          v-for="(type, index) in typeList"
          :key="type.id"
          :name="type.id"
        >
          <span slot="label">{{ type.title }}</span>
          <div v-html="type.content"></div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <footer>
      {{ baseInfo.copyright }}
    </footer>
  </div>
</template>

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

<style lang="scss" scoped>
  .container{
    display: flex;
    flex-direction: column;
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
    text-shadow: 1px 2px 3px rgba(0, 0, 0, .3);
    margin-bottom: 20px;
  }
  footer{
    font-size: 12px;
    color: $c-text-secondary;
    height: 30px;
    line-height: 30px;
    text-align: center;
    flex-shrink: 0;
    width: 100%;
  }
  .types_container{
    height: calc(100% - 100px);
    flex-grow: 1;
    box-sizing: border-box;
    width: 100%;
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
</style>
