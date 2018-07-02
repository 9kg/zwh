<template>
  <section class="container">
    <el-collapse value="2" class="help_list">
      <el-collapse-item title="相关文档" name="1">
        <el-tree
          :data="docList"
          default-expand-all
          :props="defaultProps">
          <div class="custom-tree-node" slot-scope="{ node, data }">
            {{ node.label }}
            <el-tag class="doc_link" v-if="data.link" type="info" size="mini">
              <a :href="data.link" target="_blank">{{ data.link }}</a>
            </el-tag>
          </div>
        </el-tree>
      </el-collapse-item>
      <el-collapse-item title="相关示例" name="2">
        <el-row :gutter="12" v-for="row in Math.ceil(demoList.length/4)" :key="row">
          <el-col :span="6" v-for="(col, index) in demoList.slice((row-1)*4, row*4)" :key="index" @click.native="goDemo(col.link)">
            <el-card shadow="hover" :title="col.text">
              {{col.text}}
            </el-card>
          </el-col>
        </el-row>
      </el-collapse-item>
    </el-collapse>
  </section>
</template>

<script>
  export default {
    async asyncData({app}) {
      return {
        docList: await app.$axios.$post('mock/demo/get_doc')
      }
    },
    data() {
      return {
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        demoList: [{
          text: '试炼场(临时测试专用)',
          link: 'test'
        }, {
          text: 'vuex',
          link: 'vuex'
        }, {
          text: 'animate.css',
          link: 'animate'
        }, {
          text: '数据加载',
          link: 'dataload'
        }, {
          text: 'i18n',
          link: 'i18n'
        }, {
          text: 'element组件',
          link: 'element'
        }, {
          text: '继承其它组件(extends)',
          link: 'extends'
        }, {
          text: '图表(echarts)',
          link: 'echarts'
        }, {
          text: '本地存储(storage)',
          link: 'storage'
        }, {
          text: '拖拽(draggable)',
          link: 'draggable'
        }, {
          text: '右键菜单(context_menu)',
          link: 'context_menu'
        }, {
          text: '富文本编辑器(rich_editor)',
          link: 'rich_editor'
        }, {
          text: '代码编辑器(code_editor)',
          link: 'code_editor'
        }, {
          text: '数字动画(transition_digital)',
          link: 'transition_digital'
        }]
      };
    },
    methods: {
      goDemo(url){
        this.$router.push(`demo/${url}`);
      }
    },
    layout: 'demo'
  }

</script>

<style lang="scss">
  .el-tree-node{
    padding: 5px 0;
  }
  .el-tree-node__content:hover {
      background-color: transparent;
  }
  .el-tree-node__content{
    cursor: default;
  }
  .el-card__body{
    text-align: center;
    color: #c37;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>

<style lang="scss" scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .container{
    padding: 20px 30px;
    box-sizing: border-box;
  }
  .help_list{
    background: #fff;
    padding: 20px;
  }
  .doc_link{
    margin-left: 5px;
  }
  .demo_list {
    display: flex;
    flex-direction: column;
    a {
      height: 50px;
    }
  }

</style>
