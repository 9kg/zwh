<template>
  <span :class="className"></span>
</template>

<script>


// import 'odometer/themes/odometer-theme-car.css'
import 'odometer/themes/odometer-theme-default.css'
// import 'odometer/themes/odometer-theme-digital.css'
// import 'odometer/themes/odometer-theme-minimal.css'
// import 'odometer/themes/odometer-theme-plaza.css'
// import 'odometer/themes/odometer-theme-slot-machine.css'
// import 'odometer/themes/odometer-theme-train-station.css'

export default {
  // name: 'TransitionDigital',
  props: {
    value: { type: Number, default: () => 0 },
    // theme: { type: String, default: () => 'minimal' },
    format: { type: String, default: () => '(,ddd).dd' },
    duration: { type: Number, default: () => 3000 },
    className: { type: String, default: () => 'odometer' },
    animation: { type: String, default: () => 'count' },
    formatFunction: { type: Function },
  },
  data: () => ({
    instance: null,
  }),
  watch: {
    value: {
      handler (value) {
        if (this.instance && this.instance.update) {
          this.instance.update(value)
        }
      },
      deep: false,
    },
  },
  mounted () {
    const Odometer = require('odometer/odometer.min.js')
    this.instance = new Odometer({
      el: this.$el,
      value: this.value,
      theme: this.theme,
      format: this.format,
      duration: this.duration,
      animation: this.animation,
    })
    this.instance.render()
  },
}
</script>