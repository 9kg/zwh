<template>
  <section class="container">
    <h1>拖动嵌套拖动示例</h1>
    <draggable v-model="myArray">
      <transition-group>
        <div v-for="element in myArray" :key="element.id" class="outer_item">
          {{element.name}}
          <draggable v-model="element.children" class="inner_area">
            <transition-group>
              <div v-for="item in element.children" :key="item.id" class="inner_item">
                {{item.name}}
              </div>
            </transition-group>
          </draggable>
        </div>
      </transition-group>
    </draggable>
    <h1>element组件拖动示例</h1>
    <draggable element="el-collapse" :list="list" :component-data="getComponentData()">
      <el-collapse-item v-for="e in list" :title="e.title" :name="e.name" :key="e.name">
        <div>{{e.description}}</div>
      </el-collapse-item>
    </draggable>
    <h1>其它示例及疑问见文档</h1>
  </section>
</template>

<style lang="scss" scoped>
  .outer_item{
    border-bottom: 1px solid #ccc;
    padding: 10px;
  }
  .inner_item{
    border-bottom: 1px solid #333;
  }
  .inner_area{
    background-color: #f37;
    color: #fff;
  }
</style>

<script>
  //拖拽用的不多，所以随用随import吧
  import draggable from 'vuedraggable'
  export default {
    data() {
      return {
        myArray: [{
            id: 1,
            name: 'test1',
            children: [{
              id: 1,
              name: 'test1',
            }, {
              id: 2,
              name: 'test2'
            },
            {
              id: 3,
              name: 'test3'
            }]
          },
          {
            id: 2,
            name: 'test2',
            children: [{
              id: 1,
              name: 'test1',
            }, {
              id: 2,
              name: 'test2'
            },
            {
              id: 3,
              name: 'test3'
            }]
          },
          {
            id: 3,
            name: 'test3',
            children: [{
              id: 1,
              name: 'test1',
            }, {
              id: 2,
              name: 'test2'
            },
            {
              id: 3,
              name: 'test3'
            }]
          }
        ],
        list: [{
            title: '标题1',
            name: 'name1',
            description: '描述1',
        }, {
            title: '标题2',
            name: 'name2',
            description: '描述2',
        }, {
            title: '标题3',
            name: 'name3',
            description: '描述3',
        }, {
            title: '标题4',
            name: 'name4',
            description: '描述4',
        }]
      };
    },
    methods: {
      handleChange() {
        console.log('changed');
      },
      inputChanged(value) {
        this.activeNames = value;
      },
      getComponentData() {
        return {
          on: {
            change: this.handleChange,
            input: this.inputChanged
          },
          props: {
            value: this.activeNames
          }
        };
      }
    },
    components: {
      draggable
    },
    layout: 'demo'
  }

</script>
