<template>
  <section class="container">
    {{ saying }}
  </section>
</template>

<script>
  export default {
    async asyncData({ app }) {
      return {
        saying: await app.$axios.$post('mock/demo/get_saying')
      }
    },
    data() {
      return {

      }
    },
    mounted() {
      
    }
  }

</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    padding: 0 30px;
    line-height: 1.5em;
    color: #6c6c6c;
  }
</style>
