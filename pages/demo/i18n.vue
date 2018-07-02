<i18n>
{
  "en": {
    "localTest": "local test"
  },
  "cn": {
    "localTest": "本地测试"
  }
}
</i18n>
<template>
  <section class="container">
    <el-row>
      {{$t('localTest')}}
    </el-row>
    <el-row>
      {{$t('demo.publicTest')}}
    </el-row>
  </section>
</template>

<script>
  export default {
    layout: 'demo'
  }

</script>
