<template>
  <section class="container">
    <div>
      title:{{title}}
      <el-button @click="SET_TITLE(Math.random())">改title</el-button>
      <el-button @click="ASYNC_SET_TITLE()">异步改title</el-button>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapState('demo', ['title'])
    },
    methods: {
      ...mapMutations('demo', ['SET_TITLE']),
      ...mapActions('demo', ['ASYNC_SET_TITLE'])
    },
    layout: 'demo'
  }

</script>
