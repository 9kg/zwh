<template>
  <div class="container"> 
    <el-row type="flex" class="oper_area" justify="space-between">
      <el-button type="primary" size="small" @click="addTab(activeTypeId)">添加</el-button>
      <el-button type="success" size="small" @click="save">保存</el-button>
    </el-row>
    <div class="content">
      <el-tabs v-model="activeTypeId">
        <el-tab-pane
          v-for="(type, index) in typeList"
          :key="type.id"
          :name="type.id"
        >
          <span slot="label">{{ type.title }}</span>
          
        </el-tab-pane>
      </el-tabs>
      <section class="tab_container" v-if="typeList.length">
        <el-row type="flex" class="tab_oper_area" justify="space-between">
          <el-input placeholder="请输入内容" v-model="activeType.title" clearable></el-input>
          <el-button type="danger" size="small" @click="removeTab(activeTypeId)"> 删除 </el-button>
        </el-row>
        <div class="quill-editor" 
            :content="activeType.content"
            @change="onEditorChange($event)"
            v-quill:myQuillEditor="editorOption">
        </div>
      </section>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .oper_area{
    background-color: transparent;
    padding: 5px 0 20px;
    flex-shrink: 0;
    width: 100%;
  }
  .container{
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  .content{
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    background-color: #fff;
    flex-grow: 1;
  }
  .tab_container{
    .tab_oper_area{
      margin-bottom: 10px;
      .el-input{
        margin-right: 100px;
      }
    }
  }
  .quill-editor {
    min-height: 200px;
    max-height: 400px;
    overflow-y: auto;
  }
</style>
<script>
  export default {
    async asyncData({ app }) {
      let data = await app.$axios.$post('mock/set/getModule');
      return {
        typeList: data || [],
        activeTypeId: data && data[0] ? data[0].id : ''
      }
    },
    data() {
      return {
        activeTypeId: '',
        // typeList: [],
        editorOption: {
          // some quill options
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ 'header': 1 }, { 'header': 2 }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'script': 'sub' }, { 'script': 'super' }],
              [{ 'indent': '-1' }, { 'indent': '+1' }],
              [{ 'direction': 'rtl' }],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'font': [] }],
              [{ 'align': [] }],
              ['clean'],
              ['link', 'image']
              // ['link', 'image', 'video']
            ]
          },
          // theme: 'bubble'
        }
      }
    },
    computed: {
      activeType(){
        return this.typeList.find(tab => tab.id === this.activeTypeId);
      }
    },
    methods: {
      addTab(targetName) {
        let newTabName = ''+(+new Date);
        this.typeList.push({
          title: `标题${this.typeList.length+1}`,
          id: newTabName,
          content: `<p>这是一段描述${this.typeList.length+1}</p>`
        });
        this.activeTypeId = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.typeList;
        let activeName = this.activeTypeId;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.id === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.id;
              }
            }
          });
        }
        
        this.activeTypeId = activeName;
        this.typeList = tabs.filter(tab => tab.id !== targetName);
      },
      save(){
        this.$axios.$post('mock/set/setModule', {data: this.typeList});
      },
      onEditorChange({ editor, html, text }) {
        this.activeType.content = html
      }
    },
    mounted() {

    },
  }
</script>

