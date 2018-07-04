<template>
	<div class="container">
	  <div class="logo_container">
	  	<img v-if="imageUrl" :src="imageUrl" class="logo">
	  </div>
		<el-upload
		  class="avatar-uploader"
		  drag
		  action="/upload/logo"
		  :show-file-list="false"
		  :on-success="handleAvatarSuccess"
		  :before-upload="beforeAvatarUpload"
		  name="logo"
		  accept=".png">
  		<!-- <i class="el-icon-plus avatar-uploader-icon"></i> -->
		  <i class="el-icon-upload"></i>
		  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
		  <div class="el-upload__tip" slot="tip">
		  	<p>只能上传png文件，且不超过200kb</p>
		  	<p>建议上传尺寸(100px*20px)</p>
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
  .logo_container{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 14vh;
    background-color: #eee;
    background-image: linear-gradient(45deg, #666 25%, transparent 25%, transparent),
					  linear-gradient(-45deg, #666 25%, transparent 25%, transparent),
					  linear-gradient(45deg, transparent 75%, #666 75%),
					  linear-gradient(-45deg, transparent 75%, #666 75%);
    background-size: 32px 32px;
	  .logo {
			width: 100px;
			height: 20px;
	  }
  }
</style>

<script>
  export default {
    async asyncData({ app }) {
      return {
      	imageUrl: '/img/logo.png',
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
        const isLt200k = file.size / 1024 < 200;
        if (!isLt200k) {
          this.$message.error('上传logo图片大小不能超过 200kB!');
        }
        return isLt200k;
      }
    },
    mounted() {
      
    }
  }

</script>