<template>
  <div>
    <el-select
        :value="xx.value10"
        @input="setVal({aa: $event})">
        <el-option
        v-for="item in options5"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
    </el-select>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options5: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        xx:{
            value10: ''
        }
      }
    },
    methods: {
        setVal(val){
            console.log(val)
            this.xx.value10 = val.aa;
        }
    }
  }
</script>