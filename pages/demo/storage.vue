<template>
  <section class="container">
    <div>
      <input type="text" v-model="key">
      <el-button @click="setStorage()">设置</el-button>
      <el-button @click="getStorage()">打印</el-button>
    </div>
  </section>
</template>

<style lang="scss" scoped>


</style>

<script>
  import {
    mapState,
    mapMutations,
    mapActions
  } from 'vuex'

  export default {
    data() {
      return {
        key: 'a'
      };
    },
    methods: {
      setStorage() {
        this.$storage.set(this.key, {
          test: 11
        });
      },
      getStorage() {
        console.log(this.$storage.get(this.key));
      }
    },
    layout: 'demo'
  }

</script>
