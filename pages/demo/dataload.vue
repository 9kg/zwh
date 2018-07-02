<template>
  <section class="container">
    <div class="data_ct">
      mock服务端数据渲染
      <code>
        {{JSON.stringify(mockServer)}}
      </code>
    </div> 
    <!-- <div class="data_ct">
      back服务端数据渲染
      <code>
        {{JSON.stringify(backServer)}}
      </code>
    </div>  -->
    <div class="data_ct">
      mock异步数据渲染(模拟2s耗时)
      <code>
        {{mockAsync}}
      </code> 
    </div>
    <!-- <div class="data_ct">
      back异步数据渲染
      <code>
        {{serverAsync}}
      </code> 
    </div> -->
  </section>
</template>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
  }
  .data_ct{
    box-shadow: 0 0 0 1px rgba(0,0,0,.3);
    margin: 10px;
    line-height: 30px;
    text-indent: 1em;
    background-color: #bb8200;
    color: #fff;
  }
  code{
    display: block;
    background-color: rgba(0,0,0,.85);
    color: #eee;
    padding: 5px 3px;
    line-height: 1.5em;
    text-indent: 0;
  }
</style>

<script>
  export default {
    async asyncData({app}) {
      return {
        mockServer: await app.$axios.$post('mock/index', {
          arg1: '参数1',
          arg2: '参数2'
        }),
        // backServer: await app.$axios.$post('api/wf/myWorkCount', {
        //   xx: '参数1',
        //   arg2: '参数2'
        // })
      }
    },
    data: () => {
      return {
        mockAsync: null,
        // serverAsync: null
      }
    },
    methods: {
      async getMockAsync() {
        this.mockAsync = await this.$axios.$post('mock/demo/demo', {
          arg1: '参数111',
          arg2: '参数22'
        })
      },
      // async getServerAsync() {
      //   this.serverAsync = await this.$axios.$post('api/wf/myWorkCount', {
      //     arg1: '参数111',
      //     arg2: '参数22'
      //   })
      // }
    },
    mounted(){
      this.getMockAsync();
      // this.getServerAsync();
    },
    layout: 'demo'
  }

</script>
