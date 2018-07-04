<template>
	<div class="container">
	  <div class="ico_container">
	  	<img v-if="imageUrl" :src="imageUrl" class="ico">
	  </div>
		<el-upload
		  class="avatar-uploader"
		  drag
		  action="/upload/ico"
		  :show-file-list="false"
		  :on-success="handleAvatarSuccess"
		  :before-upload="beforeAvatarUpload"
		  name="favicon"
		  accept=".ico">
  		<!-- <i class="el-icon-plus avatar-uploader-icon"></i> -->
		  <i class="el-icon-upload"></i>
		  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
		  <div class="el-upload__tip" slot="tip">
		  	<p>只能上传png文件，且不超过50kb</p>
		  	<p>更改后不能立即生效, 可通过清除缓存或更换未登录过当前网站的设备验证。</p>
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
  .ico_container{
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
	  .ico {
      max-height: 100%;
			// width: 100px;
			// height: 20px;
	  }
  }
</style>

<script>
  export default {
    async asyncData({ app }) {
      return {
      	imageUrl: '/favicon.ico',
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
        const isLt50k = file.size / 1024 < 50;
        if (!isLt50k) {
          this.$message.error('上传ico图片大小不能超过 50kB!');
        }
        return isLt50k;
      }
    },
    mounted() {
      
    }
  }

</script>