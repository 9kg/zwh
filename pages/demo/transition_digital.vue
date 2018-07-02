<template>
  <section class="container">
    <div class="long">
      <transition-digital :value="num" :duration="100000" animation="smooth" />
    </div>
    <br/>
    <div class="long">
      <transition-digital :value="num" :duration="1000" animation="smooth" />
    </div>
    <br/>
    <div>
      <transition-digital :value="num" :duration="100000" animation="smooth" />
    </div>
    <br/>
    <div>
      <transition-digital :value="num" :duration="1000" animation="smooth" />
    </div>
    <br/>
    <div>
      <transition-digital :value="num" :duration="10000" />
    </div>
    <br/>
    <div>
      <transition-digital :value="num" :duration="1000" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  // 带动画的需要加这样的样式
  .long /deep/ .odometer.odometer-animating-up,
  .long /deep/ .odometer.odometer-animating-down.odometer-animating {
    .odometer-ribbon-inner {
      transition-duration: 10s !important
    }
  }

</style>

<script>
  import TransitionDigital from '~/components/common/TransitionDigital.vue'

  export default {
    data() {
      return {
        num: 0
      }
    },
    components: {
      TransitionDigital
    },
    mounted() {
      setTimeout(() => {
        this.num = 2000;
      }, 1000);
    },
    layout: 'demo'
  }

</script>
