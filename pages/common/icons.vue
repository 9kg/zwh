<template>
  <div class="content">
    <el-tabs v-model="activeName">
      <el-tab-pane label="element 图标列表" name="el">
        <ul class="icon_list">
          <li v-for="(icon, index) in elIcons" :key="index" class="icon_item">
            <div class="icon_ct">
              <i :class="icon"></i>
              <span class="icon_desc">{{ icon.slice(8) }}</span>
            </div>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="fontawesome 图标列表" name="fa">
        <ul class="icon_list">
          <li v-for="(icon, index) in faIcons" :key="index" class="icon_item">
            <div class="icon_ct">
              <i :class="icon"></i>
              <span class="icon_desc">{{ icon.slice(8) }}</span>
            </div>
          </li>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style lang="scss">
  .content{
    padding: 10px 20px;
  }
  .icon_list{
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
    margin-top: 10px;
    .icon_item{
      padding: 15px 5px;
      cursor: pointer;
      .icon_ct{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100px;
        white-space: nowrap;
        font-size: 20px;
        transition: all .3s;
        color: $c-text-regular;
        .icon_desc{
          font-size: 12px;
          color: $c-text-secondary;
        }
      }
      &:hover{
        .icon_ct{
          transform: scale(2);
        }
      }
    }
  }

</style>

<script>
  export default {
    async asyncData({app}) {
      let { fa, el } = await app.$axios.$post('mock/common/getIcons')
      return {
        faIcons: fa,
        elIcons: el,
      }
    },
    data() {
      return {
          activeName: 'el'
      }
    },
    methods: {
      async getIcons() {
        this.icons = await this.$axios.$post('mock/common/getIcons')
      }
    },
    mounted(){
      // this.getIcons();
    },
    layout: 'demo'
  }

</script>
