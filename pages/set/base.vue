<template>
  <section class="container">
    <div>
      基础设置
      {{data}}
    </div>
    <el-form :model="data" status-icon :rules="ruleForm" ref="data" label-width="100px" class="demo-ruleForm">
      <el-form-item label="标题" prop="title">
        <el-input v-model="data.title" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="desc">
        <el-input v-model="data.desc" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="data.age"></el-input>
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
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      return {
        ruleForm: {
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      async submitForm(formName) {
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
    margin: 0 auto;
  }
</style>
