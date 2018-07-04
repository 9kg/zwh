<template>
	<div class="container" :style="{'background-image': `linear-gradient(190deg, rgba(50, 66, 93, 0.75) 0%, rgba(146, 172, 204, .9) 50%, #fff 100%), url('${imageUrl}')`}">
		<el-upload
		  class="avatar-uploader"
		  drag
		  action="/upload/bg"
		  :show-file-list="false"
		  :on-success="handleAvatarSuccess"
		  :before-upload="beforeAvatarUpload"
		  name="bg"
		  accept=".jpg">
  		<!-- <i class="el-icon-plus avatar-uploader-icon"></i> -->
		  <i class="el-icon-upload"></i>
		  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
		  <div class="el-upload__tip" slot="tip">
		  	<p>只能上传png文件，且不超过2MB</p>
		  	<p>建议上传大尺寸图片</p>
		  </div>
		</el-upload>
	</div>
</template>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15vh;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
</style>

<script>
  export default {
    async asyncData({ app }) {
      return {
      	imageUrl: '/img/bg.jpg',
        fileList: []
      }
    },
    data() {
      return {

      }
    },
    methods: {
    	handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
    	beforeAvatarUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          this.$message.error('上传bg图片大小不能超过 2MB!');
        }
        return isLt2M;
      }
    },
    mounted() {
      
    }
  }

</script>