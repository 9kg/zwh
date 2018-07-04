<template>
  <section class="container">
    <el-form :model="data" status-icon :rules="ruleForm" ref="data" label-width="100px" class="demo-ruleForm">
      <el-form-item label="标题" prop="title">
        <el-input v-model="data.title" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="desc">
        <el-input v-model="data.desc" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="copyright" prop="copyright">
        <el-input v-model.number="data.copyright"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('data')">提交</el-button>
        <el-button @click="resetForm('data')">重置</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
  export default {
    async asyncData({ app }) {
      let data = await app.$axios.$post('mock/set/getBase');
      return {
        data: data || {}
      }
    },
    data() {
      return {
        ruleForm: {
          title: [
            { required: true, message: '标题不能为空', trigger: 'blur' }
          ],
          copyright: [
            { required: true, message: 'copyright不能为空', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.$post('mock/set/setBase', {data: this.data}).then(data => {
              console.log(data);
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted() {
      
    }
  }

</script>

<style lang="scss" scoped>
  .el-form{
    width: 80%;
    margin: 20px auto;
  }
</style>
