<template>
  <div class="page-container" :class="{'menu-collapse': menuCollapse}">
    <page-menu/>
    <div class="page-main">
      <page-head/>
      <nuxt class="page_content"/>
    </div>
  </div>
</template>
<script>
  import PageHead from '~/components/common/PageHead.vue'
  import PageMenu from '~/components/common/PageMenu.vue'
  import { mapState, mapMutations } from 'vuex'
  
  export default {
    computed: {
      ...mapState('common', ['menuCollapse'])
    },
    methods: {
      ...mapMutations('common', ['TOGGLE_MENUCOLLAPSE']),
      // langChange(val){
      //   this.$store.commit('SET_LANG', val)
      //   this.$i18n.locale = this.locale
      // }
    },
    components: {
      PageHead,
      PageMenu
    },
    mounted(){
      let menuCollapse = !!this.$storage.get('menuCollapse');
      if(menuCollapse !== this.menuCollapse){
        this.TOGGLE_MENUCOLLAPSE();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-container{
    min-width: 1024px;
    display: flex;
    height: 100%;
    overflow: hidden;
  }
  .page-menu{
    flex-shrink: 0;
  }
  .page-main{
    width: calc(100% - #{$page-menu-width});
    flex-grow: 1;
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
  .menu-collapse .page-main{
    width: calc(100% - #{$page-menu-collapse-width});
  }
  .page_content{
    height: calc(100% - #{$page-header-height});
    overflow: auto;
  }
</style>
