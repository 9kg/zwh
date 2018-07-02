<template>
  <section class="container">
    dsadas
  </section>
</template>

<script>
  export default {
    async asyncData({
      app
    }) {
      return {
        // docList: await app.$axios.$post('mock/demo/get_doc')
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
  .user_info_ct {
    height: 250px;
    background: url('~/assets/image/home/user_info_bg.jpg') center/cover no-repeat;
    .user_info{
      height: 50%;
      background-color: rgba($c-theme, .7);
      color: $c-white;
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      align-items: center;
      .welcome{
        font-size: 20px;
        margin: 20px 0;
        line-height: 1em;
        letter-spacing: .5px;
      }
      .desc{
        font-size: 13px;
        color: rgba($c-white, .85);
        letter-spacing: .5px;
        line-height: 1.5em;
      }
    }
  }
</style>
